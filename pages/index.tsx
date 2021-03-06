import type { NextPage } from "next";
import Head from "next/head";
import theme from "../styles/theme";
import styles from "../styles/Home.module.css";
import { Container, SimpleGrid, Box, useToast, Image } from "@chakra-ui/react";
import React, { useContext, useEffect, useState } from "react";
import LoginComponent from "../components/forms/login/Login";
import InformationPane from "../components/infopane/InformationPane";
import { Signup } from "../components/forms/signup/Signup";
import { auth } from "../util/firebase/firebase";
import { getAuth, signInWithEmailAndPassword, signOut, setPersistence, browserSessionPersistence } from "firebase/auth";
import { getAdditionalPages } from "../util/graphql-queries";
import client from "../util/apollo-client";
import UserContext from "../context/UserContext";
import { useRouter } from "next/router";
import { firebaseErrors } from "../models/FirebaseErrorConstants";
import get from "lodash/get";
import AppContext from "../context/AppContext";
import { AdditionalPages } from "../models/ComponentModel";
import RenderMarkdownToHTML from "../components/markdown/RenderMarkdown";
import { checkSession } from "../context/Session";

const mapErrors = (error: string) => {
  const errorObject = { ...firebaseErrors };
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
  //setIsAuthenticated(checkSession("firebase"));

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
      const persistence = setPersistence(getAuth(), browserSessionPersistence)
        .then(() => {
          return signInWithEmailAndPassword(auth, username, userPassword);
        })
        .catch((error) => {
          // Handle Errors here.
          toast({
            title: "Authentication Error",
            position: "top",
            duration: 4000,
            status: "error",
            isClosable: true,
            onCloseComplete: () => router.push("/")
          });
        });
      const data = await persistence;
      // const data = true;
      if (data) {
        onLoginSuccess(username);
        toast({
          title: `Successfully Logged in!`,
          position: "top",
          duration: 3000,
          status: "success",
          isClosable: true,
          onCloseComplete: navigateOnLogin
        });
      }
    } catch (err: any) {
      const errorMessage = err.message.substring(err.message.indexOf("(") + 1, err.message.indexOf(")"));
      toast({
        title: mapErrors(errorMessage).message,
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
        <Image
          src='https://atf-upload-bucket.s3.ap-southeast-2.amazonaws.com/biglogo_ca983ee5e0.svg?3716443'
          alt='Aphasia Therapy Finder'
          mb='20'
        />
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
                  setForgotPassword={() => {
                    setForgotPassword(!forgotPassword);
                    setUserPassword("");
                  }}
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
