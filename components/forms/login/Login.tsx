import { Box, Grid, GridItem, Button, FormControl, Flex, FormLabel, Input, Heading, Link } from "@chakra-ui/react";
import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import styles from "./Login.module.css";
import { useRouter } from "next/router";

interface LoginProps {
  userEmail: String;
  setUserEmail(e: React.ChangeEvent<HTMLInputElement>): void;
  userPassword: String;
  setUserPassword(e: React.ChangeEvent<HTMLInputElement>): void;
  forgotPassword: boolean;
  setForgotPassword(): void;
}

const LoginComponent: React.FC<LoginProps> = ({
  userEmail,
  userPassword,
  forgotPassword,
  setForgotPassword,
  setUserEmail,
  setUserPassword
}) => {
  const [sendResetLink, setSendResetLink] = useState(false);
  const router = useRouter();
  const onClickNavigate = (e: any, link: string) => {
    e.preventDefault();
    router.push(link);
  };
  return (
    <>
      {forgotPassword ? (
        <Flex>
          <Box>
            {!sendResetLink ? (
              <>
                <FormControl>
                  <FormLabel htmlFor='email'>Email address</FormLabel>
                  <Input id='email' type='email' onChange={setUserEmail} />
                </FormControl>
                <Button size='md' width='200px' colorScheme='primaryBlue'>
                  Send recovery link
                </Button>
              </>
            ) : (
              <Heading as='h2'>A recovery link has been sent to your email address.</Heading>
            )}
          </Box>
        </Flex>
      ) : (
        <Grid gap={5}>
          <GridItem colSpan={6}>
            <Button className={styles.socialLogin} leftIcon={<FcGoogle />} isFullWidth={true}>
              Login with Google
            </Button>
          </GridItem>
          <GridItem colSpan={6}>
            <Button className={styles.socialLogin} leftIcon={<BsFacebook />} isFullWidth={true}>
              Login with Facebook
            </Button>
          </GridItem>
          <GridItem colSpan={6}>
            <FormControl>
              <FormLabel htmlFor='email'>Email address</FormLabel>
              <Input id='email' type='email' onChange={setUserEmail} />
            </FormControl>
          </GridItem>
          <GridItem colSpan={6}>
            <FormControl>
              <FormLabel htmlFor='password'>Password</FormLabel>
              <Input id='password' type='password' onChange={setUserPassword} />
            </FormControl>
          </GridItem>
          <GridItem colSpan={6} mt='4'>
            <Link href='/'>Forgot Password?</Link>
          </GridItem>
          <GridItem colStart={4} colEnd={6}>
            <Button colorScheme='blue' onClick={(e) => onClickNavigate(e, "/therapyprofile")}>
              Login
            </Button>
          </GridItem>
          <GridItem colStart={4} colEnd={6} mt='4'>
            <Link href='/therapyprofile'>Create Account</Link>
          </GridItem>
        </Grid>
      )}
    </>
  );
};

export default LoginComponent;
