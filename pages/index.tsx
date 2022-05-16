import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import theme from "../styles/theme";
import styles from "../styles/Home.module.css";
import { Container, SimpleGrid, Box } from "@chakra-ui/react";
import React, { useContext, useEffect, useState } from "react";
import LoginComponent from "../components/forms/login/Login";
import InformationPane from "../components/infopane/InformationPane";
import { Signup } from "../components/forms/signup/Signup";
import { auth } from "../util/firebase/firebase";
import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import UserContext from "../context/UserContext";
import { useRouter } from "next/router";

const Home: NextPage = () => {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [forgotPassword, setForgotPassword] = useState(false);
  const [login, setLogin] = useState<Boolean>(false);
  const { isAuthenticated, setIsAuthenticated } = useContext(UserContext);
  const router = useRouter();
  const userLogin = async (username: string, password: string) => {
    try {
      const data = await signInWithEmailAndPassword(auth, username, password);
      console.log(data);
      if (data) {
        setLogin(true);
        setIsAuthenticated(true);
        router.push("/therapyprofile");
      }
    } catch (err) {
      console.error(err);
    }
  };

  const informationText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae nibh mauris. Proin at ante tortor. Donec lacus diam, convallis et laoreet ac, varius sed ante. Donec condimentum tempor aliquam. Vestibulum vitae efficitur velit, nec convallis nibh. Etiam nec ipsum nibh. Vestibulum ac blandit ligula, auctor molestie ipsum. Sed porttitor ullamcorper lacus nec imperdiet. Donec nisl urna, efficitur in felis non, mollis mollis erat. Nam ligula odio, aliquet varius lectus eget, faucibus lacinia erat. Nulla enim justo, placerat non mauris quis, pretium eleifend magna. Vivamus at velit mi. Curabitur tincidunt sed justo sit amet varius.
  # Nunc ullamcorper, leo a consectetur vestibulum, urna sapien molestie est, ac porttitor nulla quam a mi. Integer vitae scelerisque odio. Curabitur aliquet, elit sagittis mollis vehicula, eros nibh viverra neque, non porttitor urna nisl vitae neque. Aenean eget arcu eros. Donec eleifend metus et ultrices pharetra. Sed commodo nulla at tempor pellentesque. Phasellus dapibus eros id nisi dapibus porttitor. Curabitur luctus pharetra justo.
  # Nulla enim justo, placerat non mauris quis, pretium eleifend magna. Vivamus at velit mi. Curabitur tincidunt sed justo sit amet varius.
  # Nunc ullamcorper, leo a consectetur vestibulum, urna sapien molestie est, ac porttitor nulla quam a mi. 
  `;

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
        <h1 className={styles.title}>Welcome to Aphasia Therapy Finder</h1>

        <p className={styles.description}>Get started by logining in or sign-up</p>
        <Container maxW='container.lg'>
          <SimpleGrid columns={{ sm: 2, md: 2 }} spacing={10}>
            <Box maxWidth={"lg"} mt='20'>
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
                />
              ) : (
                <Signup loginAccount={toggleLogin} />
              )}
            </Box>
            <Box maxWidth={"lg"} boxShadow={"sm"}>
              <InformationPane backgroundColor={theme.colors.gray.default} informationText={informationText} />
            </Box>
          </SimpleGrid>
        </Container>
      </main>
    </>
  );
};

export default Home;
