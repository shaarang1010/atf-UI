import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import theme from "../styles/theme";
import styles from "../styles/Home.module.css";
import { Container, SimpleGrid, Box, useToast } from "@chakra-ui/react";
import React, { useContext, useEffect, useState } from "react";
import LoginComponent from "../components/forms/login/Login";
import InformationPane from "../components/infopane/InformationPane";
import { Signup } from "../components/forms/signup/Signup";
import { auth } from "../util/firebase/firebase";
import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { getAdditionalPages } from "../util/graphql-queries";
import client from "../util/apollo-client";
import UserContext from "../context/UserContext";
import { useRouter } from "next/router";
import { firebaseErrors } from "../models/FirebaseErrorConstants";
import get from "lodash/get";
import AppContext from "../context/AppContext";
import { AdditionalPages } from "../models/ComponentModel";
import RenderMarkdownToHTML from "../components/markdown/RenderMarkdown";

const mapErrors = (error: string) => {
  const errorObject = { ...firebaseErrors };
  console.log(get(errorObject, error));
  return get(errorObject, error);
};

type ErrMessage = {
  message: string;
  type: "email" | "password" | null;
};

const Home: NextPage = ({ additionalPageData }: any) => {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [forgotPassword, setForgotPassword] = useState(false);
  const [login, setLogin] = useState<Boolean>(false);
  const [error, setError] = useState<ErrMessage>({ message: "", type: null });
  const { isAuthenticated, setIsAuthenticated } = useContext(UserContext);
  const { additionalPages, setAdditionalPages } = useContext(AppContext);
  const toast = useToast();

  if (additionalPageData) {
    setAdditionalPages(additionalPageData[0]);
  }

  const navigateOnLogin = () => {
    router.push("/dashboard");
  };

  const onLoginSuccess = (username: string) => {
    setLogin(true);
    setIsAuthenticated(true);
  };

  const router = useRouter();
  const userLogin = async (username: string, password: string) => {
    try {
      const data = await signInWithEmailAndPassword(auth, username, password);
      // const data = true;
      if (data) {
        onLoginSuccess(username);
        toast({
          title: `Successfully Logged in!`,
          position: "top",
          duration: 4000,
          status: "success",
          isClosable: true,
          onCloseComplete: navigateOnLogin
        });
      }
    } catch (err: any) {
      const errorMessage = err.message.substring(err.message.indexOf("(") + 1, err.message.indexOf(")"));
      console.log(errorMessage);
      toast({
        title: mapErrors(errorMessage),
        position: "top",
        duration: 4000,
        status: "error",
        isClosable: true
      });
      setError(mapErrors(errorMessage));
      console.error(err);
    }
  };

  useEffect(() => {
    setLogin(true);
  }, []);

  const toggleLogin = () => {
    setLogin(!login);
  };

  return (
    <>
      <Head>
        <title>Aphasia Therapy Finder</title>
        <meta
          name='description'
          content='Therapy finder platform for clinicians trying to provide treatment to patients living with aphasia'
        />
        <meta name='viewport' content='initial-scale=1, width=device-width' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <h2 className={styles.title}>Aphasia Therapy Finder</h2>

        <p className={styles.description}>Get started by login in or sign-up</p>
        <Container maxW='container.lg'>
          <SimpleGrid columns={{ sm: 2, md: 2 }} spacing={10}>
            <Box maxWidth={"lg"} boxShadow={"sm"} backgroundColor={theme.colors.gray.default} borderRadius='lg'>
              <InformationPane backgroundColor={theme.colors.gray.default} informationText={additionalPages.homepage} />
            </Box>
            <Box maxWidth={"lg"} mt='5'>
              {login ? (
                <LoginComponent
                  userEmail={userEmail}
                  userPassword={userPassword}
                  setUserEmail={(e) => setUserEmail(e.target.value)}
                  setUserPassword={(e) => setUserPassword(e.target.value)}
                  forgotPassword={forgotPassword}
                  setForgotPassword={() => setForgotPassword(!forgotPassword)}
                  createAccount={toggleLogin}
                  loginUser={() => userLogin(userEmail, userPassword)}
                  errorMessage={error}
                />
              ) : (
                <Signup loginAccount={toggleLogin} />
              )}
            </Box>
          </SimpleGrid>
        </Container>
      </main>
    </>
  );
};

export async function getStaticProps() {
  const { data } = await client.query({ query: getAdditionalPages() });
  return {
    props: {
      additionalPageData: data.additionalPages
    },
    revalidate: 60
  };
}

export default Home;
