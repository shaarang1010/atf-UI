import { ApolloClient, InMemoryCache, ApolloLink, HttpLink } from "@apollo/client";

const httpLink = new HttpLink({ uri: process.env.ATF_GRAPHQL_URL });

const authLink = new ApolloLink((operation, forward) => {
  return forward(operation);
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});

export default client;
