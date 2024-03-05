import {
  ApolloClient,
  ApolloProvider,
  HttpLink,
  InMemoryCache,
  useApolloClient,
} from '@apollo/client';

const uri =
  'https://ashlandauction.my.salesforce.com/services/data/v57.0/graphql?';

const createApolloClient = () => {
  return new ApolloClient({
    link: new HttpLink({
      uri,
      headers: {
        Origin: 'null',
        Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        'Content-Type': 'application/json',
      },
      
    }),
    cache: new InMemoryCache(),
  }); 
};

const useApollo = () => {
  return useApolloClient();
};

export const ApolloProviderWithClient = ({ children }) => {
  const client = createApolloClient();

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export { useApollo };
