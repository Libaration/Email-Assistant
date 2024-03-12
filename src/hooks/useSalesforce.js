import { useEffect } from 'react';
import { useUserStore } from '../components/store/userStore';
import { useQuery } from '@apollo/client';
import { queries } from '../queries';

export const useSalesforce = () => {
  const clientId = process.env.REACT_APP_SALESFORCE_CLIENT_ID;
  const handleLogout = useUserStore((state) => state.logout);
  let accessToken = useUserStore((state) => state.accessToken);
  let refreshToken = useUserStore((state) => state.refreshToken);
  const storedAccessToken = localStorage.getItem('accessToken');
  if (!accessToken && storedAccessToken) {
    accessToken = storedAccessToken;
    refreshToken = localStorage.getItem('refreshToken');
    useUserStore.setState({ accessToken, refreshToken });
  }
  useUserStore.subscribe((state) => {
    localStorage.setItem('accessToken', state.accessToken);
    localStorage.setItem('refreshToken', state.refreshToken);
  });
  const refreshStoredToken = () => {
    window.electronAPI && window.electronAPI.refreshToken({ clientId, refreshToken, accessToken });
  };
  // Not happy with checking token this way, but it works for now
  const { error } = useQuery(queries.EMPTY_QUERY);
  if (error?.message.includes('401') && accessToken && refreshToken) {
    refreshStoredToken();
  } else if (error?.message.includes('401') && accessToken && !refreshToken) {
    handleLogout();
    localStorage.clear();
  }

  useEffect(() => {
    const handleTokens = (event, { accessToken, refreshToken }) => {
      useUserStore.setState({ accessToken, refreshToken });
    };

    // Listen for accessToken changes
    window.electronAPI && window.electronAPI.onTokens(handleTokens);

    return () => {
      // Remove accessToken listener when component unmounts
      window.electronAPI && window.electronAPI.removeAccessTokenListener(handleTokens);
    };
  }, []);

  return { clientId, accessToken, handleLogout, refreshToken };
};
