import React, { useEffect, useState } from 'react';
import { ApolloClient, ApolloProvider, HttpLink, InMemoryCache, useApolloClient } from '@apollo/client';
import { ErrorBoundary } from 'react-error-boundary';
import { useAuth } from '../providers/AuthProvider';

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

/***********************************************************************************\
 * could implement handling both hooks sharing a cache and both using context but   *
 * I don't think we need all of that for such simple requests at the moment         *
\***********************************************************************************/

export const spectrumClient = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: process.env.REACT_APP_SPECTRUM_API_BASE,
    headers: {
      'x-api-key': 'aag',
    },
  }),
});

const useApollo = () => {
  return useApolloClient();
};

export const ApolloProviderWithClient = ({ children }) => {
  const { accessToken } = useAuth();
  const client = createApolloClient(accessToken);

  // Update the Apollo Client when the access token changes
  useEffect(() => {
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

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export { useApollo };
