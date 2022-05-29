import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/layout/Layout";
import { ChakraProvider } from "@chakra-ui/provider";
import { ApolloProvider } from "@apollo/client";
import theme from "../styles/theme";
import client from "../util/apollo-client";
import { Fonts } from "../styles/Fonts";
import UserContext from "../context/UserContext";
import { useState } from "react";
import { Container } from "@chakra-ui/react";

const ProviderValues = {
  username: "",
  email: "",
  isAuthenticated: false
};

function MyApp({ Component, pageProps }: AppProps) {
  const [username, setUserName] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  return (
    <ApolloProvider client={client}>
      <ChakraProvider theme={theme}>
        <UserContext.Provider value={{ username, setUserName, isAuthenticated, setIsAuthenticated, email: "" }}>
          <Fonts />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </UserContext.Provider>
      </ChakraProvider>
    </ApolloProvider>
  );
}

export default MyApp;
