import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { ChakraProvider, Container } from "@chakra-ui/react";
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
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to Aphasia Therapy Finder</h1>

        <p className={styles.description}>Get started by logining in or sign-up</p>
        <Container>
          <LoginComponent
            userEmail={userEmail}
            userPassword={userPassword}
            setUserEmail={(e) => setUserEmail(e.target.value)}
            setUserPassword={(e) => setUserPassword(e.target.value)}
            forgotPassword={forgotPassword}
            setForgotPassword={() => setForgotPassword(!forgotPassword)}
          />
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
