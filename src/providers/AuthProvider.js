import React, { createContext, useContext, useEffect, useState, useMemo } from 'react';
import { useUserStore } from '../components/store/userStore';
import { useQuery } from '@apollo/client';
import { queries } from '../queries';
import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';
import { ApolloProvider } from '@apollo/client/react';
import { ErrorBoundary } from 'react-error-boundary';

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

const createApolloClient = (accessToken) => {
  return new ApolloClient({
    link: new HttpLink({
      uri: process.env.REACT_APP_SALESFORCE_API_BASE,
      headers: {
        Origin: 'null',
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
    }),
    cache: new InMemoryCache(),
  });
};

export const spectrumClient = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: process.env.REACT_APP_SPECTRUM_API_BASE,
    headers: {
      'x-api-key': 'aag',
    },
  }),
});

export const AuthProvider = ({ children }) => {
  const clientId = process.env.REACT_APP_SALESFORCE_CLIENT_ID;
  const [accessToken, setAccessToken] = useState('');
  const [refreshToken, setRefreshToken] = useState('');
  const handleLogout = useUserStore((state) => state.logout);

  const client = useMemo(() => createApolloClient(accessToken), [accessToken]);

  const { error } = useQuery(queries.EMPTY_QUERY, {
    fetchPolicy: 'network-only',
    client,
  });

  const logoutSession = () => {
    setAccessToken('');
    setRefreshToken('');
    handleLogout();
    localStorage.clear();
  };

  useEffect(() => {
    const removeLogoutListener = window.electronAPI.onLogout(logoutSession);
    return () => {
      removeLogoutListener();
    };
  }, []);

  useEffect(() => {
    const storedAccessToken = localStorage.getItem('accessToken');
    const storedRefreshToken = localStorage.getItem('refreshToken');

    if (storedAccessToken && storedRefreshToken) {
      setAccessToken(storedAccessToken);
      setRefreshToken(storedRefreshToken);
    }
  }, []);

  useEffect(() => {
    console.log('Setting up Apollo Client with access token', accessToken);
    client.setLink(
      new HttpLink({
        uri: process.env.REACT_APP_SALESFORCE_API_BASE,
        headers: {
          Origin: 'null',
          Authorization: `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
        },
      }),
    );
  }, [accessToken, client]);

  useEffect(() => {
    const handleTokens = (event, { accessToken, refreshToken }) => {
      setAccessToken(accessToken);
      setRefreshToken(refreshToken);
      localStorage.setItem('accessToken', accessToken);
      localStorage.setItem('refreshToken', refreshToken);
    };

    window.electronAPI && window.electronAPI.onTokens(handleTokens);

    return () => {
      window.electronAPI && window.electronAPI.removeAccessTokenListener(handleTokens);
    };
  }, []);

  useEffect(() => {
    if (error?.message.includes('401') && accessToken && refreshToken) {
      console.log('Hit 401 error with access token and refresh token, attempting to refresh token');
      window.electronAPI.refreshToken({ clientId, refreshToken, accessToken });
    } else if (error?.message.includes('401') && accessToken && !refreshToken) {
      console.log('Hit 401 error with access token but no refresh token, logging out');
      logoutSession();
    }
  }, [error, accessToken, refreshToken, clientId, logoutSession]);

  const isLoggedIn = () => {
    return !!accessToken;
  };

  const value = {
    clientId,
    accessToken,
    refreshToken,
    isLoggedIn,
    handleLogout,
  };

  return (
    <AuthContext.Provider value={value}>
      <ApolloProvider client={client}>
        <ErrorBoundary fallback={<div>Something went wrong</div>}>{children}</ErrorBoundary>
      </ApolloProvider>
    </AuthContext.Provider>
  );
};
