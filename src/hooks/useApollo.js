import React, { useEffect, useState } from "react";
import {
  ApolloClient,
  ApolloProvider,
  HttpLink,
  InMemoryCache,
  useApolloClient,
} from "@apollo/client";
import { useUserStore } from "../components/store/userStore";

const uri =
  "https://ashlandauction.my.salesforce.com/services/data/v57.0/graphql?";

const createApolloClient = (accessToken) => {
  return new ApolloClient({
    link: new HttpLink({
      uri,
      headers: {
        Origin: "null",
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
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
    uri: "https://ashlandauction.com/api",
    headers: {
      "x-api-key": "aag",
    },
  }),
});

const useApollo = () => {
  return useApolloClient();
};

export const ApolloProviderWithClient = ({ children }) => {
  const initialAccessToken = useUserStore.getState().accessToken;
  const [accessToken, setAccessToken] = useState(initialAccessToken);
  const client = createApolloClient(accessToken);

  // Update the Apollo Client when the access token changes
  useEffect(() => {
    client.setLink(
      new HttpLink({
        uri,
        headers: {
          Origin: "null",
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
      }),
    );
  }, [accessToken, client]);

  // Watch for changes in the access token
  useEffect(() => {
    const unsubscribe = useUserStore.subscribe((state) => {
      console.log("Access Token Changed", state.accessToken);
      setAccessToken(state.accessToken);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export { useApollo };
