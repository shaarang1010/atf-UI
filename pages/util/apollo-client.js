import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: process.env.ATF_GRAPHQL_URL,
  cache: new InMemoryCache(),
});

export default client;
