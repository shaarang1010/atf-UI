import { ApolloClient, InMemoryCache, ApolloLink, HttpLink } from "@apollo/client";

const httpLink = new HttpLink({ uri: process.env.ATF_GRAPHQL_URL });

const authLink = new ApolloLink((operation, forward) => {
  // Retrieve the authorization token from local storage.
  const token = typeof window !== "undefined" ? localStorage.getItem("id_token") : "";

  // Use the setContext method to set the HTTP headers.
  operation.setContext({
    headers: {
      authorization: token ? `Bearer ${token}` : ""
    }
  });

  // Call the next link in the middleware chain.
  return forward(operation);
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});

export default client;
