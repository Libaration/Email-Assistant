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
  console.log("Creating Apollo Client");
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
      setAccessToken(state.accessToken);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export { useApollo };
