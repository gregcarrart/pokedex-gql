import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { GQLRoot } from './constants/APIConstants';

export const apolloClient = new ApolloClient({
  link: new HttpLink({
    uri: GQLRoot,
    transportBatching: true,
  }),
  cache: new InMemoryCache(),
  connectToDevTools: true,
});