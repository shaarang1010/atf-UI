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
import { AdditionalPages } from "../models/ComponentModel";
import AppContext from "../context/AppContext";

const additionalPagesData = {
  homepage: "",
  toolspage: "",
  glossarypage: "",
  aboutpage: ""
};

function MyApp({ Component, pageProps }: AppProps) {
  const [username, setUserName] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [additionalPages, setAdditionalPages] = useState<AdditionalPages>(additionalPagesData);
  return (
    <ApolloProvider client={client}>
      <ChakraProvider theme={theme}>
        <UserContext.Provider value={{ username, setUserName, isAuthenticated, setIsAuthenticated, email: "" }}>
          <Fonts />
          <Layout>
            <AppContext.Provider value={{ additionalPages, setAdditionalPages }}>
              <Component {...pageProps} />
            </AppContext.Provider>
          </Layout>
        </UserContext.Provider>
      </ChakraProvider>
    </ApolloProvider>
  );
}

export default MyApp;
