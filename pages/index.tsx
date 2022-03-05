import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Container, SimpleGrid, Box } from "@chakra-ui/react";
import theme from "../styles/theme";
import React, { useState } from "react";
import LoginComponent from "../components/forms/login/Login";
import { getTherapyDetailsById } from "../util/graphql-queries";
import client from "../util/apollo-client";
import Layout from "../components/layout/Layout";

const Home: NextPage = ({ token: string }) => {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [forgotPassword, setForgotPassword] = useState(false);

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
            <Box maxWidth={"lg"}>
              <LoginComponent
                userEmail={userEmail}
                userPassword={userPassword}
                setUserEmail={(e) => setUserEmail(e.target.value)}
                setUserPassword={(e) => setUserPassword(e.target.value)}
                forgotPassword={forgotPassword}
                setForgotPassword={() => setForgotPassword(!forgotPassword)}
              />
            </Box>
            <Box maxWidth={"lg"}>Hellow world</Box>
          </SimpleGrid>
        </Container>
      </main>
    </>
  );
};

export async function getServerSideProps() {
  //const { data } = await client.query({ query: getTherapyDetailsById(1) });
  return {
    props: {
      token: ""
    }
  };
}

export default Home;
