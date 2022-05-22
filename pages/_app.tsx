import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/layout/Layout";
import { ChakraProvider } from "@chakra-ui/provider";
import { MantineProvider, MantineThemeOverride } from "@mantine/core";
import { ApolloProvider } from "@apollo/client";
import theme from "../styles/theme";
import { appTheme } from "../styles/appTheme";
import client from "../util/apollo-client";
import { Fonts } from "../styles/Fonts";
import UserContext from "../context/UserContext";
import { useState } from "react";

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
      <MantineProvider
        theme={{
          fontFamily: "Roboto",
          headings: { fontFamily: "Roboto" },
          colors: {
            darkBlue: ["#1864AB"],
            "bright-pink": ["#E64980"],
            gray: ["#C4C4C4"]
          }
        }}
        withGlobalStyles
        withNormalizeCSS
      >
        <UserContext.Provider value={{ username, setUserName, isAuthenticated, setIsAuthenticated, email: "" }}>
          <Fonts />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </UserContext.Provider>
      </MantineProvider>
    </ApolloProvider>
  );
}

export default MyApp;
