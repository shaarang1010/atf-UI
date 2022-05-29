import {
  Box,
  Grid,
  GridItem,
  Button,
  FormControl,
  Flex,
  FormLabel,
  Input,
  Icon,
  Link,
  FormErrorMessage
} from "@chakra-ui/react";
import React, { useContext, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import { IoArrowBackSharp } from "react-icons/io5";
import styles from "./Login.module.css";
import { useRouter } from "next/router";
import UserContext from "../../../context/UserContext";
import validator from "validator";
import { PasswordResetForm } from "./PasswordReset";

import { auth } from "../../../util/firebase/firebase";
import { sendPasswordResetEmail } from "firebase/auth";

interface LoginProps {
  userEmail: string;
  setUserEmail(e: React.ChangeEvent<HTMLInputElement>): void;
  userPassword: string;
  setUserPassword(e: React.ChangeEvent<HTMLInputElement>): void;
  forgotPassword: boolean;
  setForgotPassword(): void;
  createAccount(): void;
  loginUser(): void;
  errorMessage?: { message: string; type: "email" | "password" | null };
}

const LoginComponent: React.FC<LoginProps> = ({
  userEmail,
  userPassword,
  forgotPassword,
  setForgotPassword,
  setUserEmail,
  loginUser,
  setUserPassword,
  createAccount,
  errorMessage
}) => {
  const [sendResetLink, setSendResetLink] = useState(false);
  const [isMessageSent, setIsMessageSent] = useState(false);
  const router = useRouter();
  const onClickNavigate = (e: any, link: string) => {
    e.preventDefault();
    router.push(link);
  };
  const setResetLink = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setForgotPassword();
  };

  const sendResetPassordLink = async () => {
    try {
      const data = await sendPasswordResetEmail(auth, userEmail);
      setIsMessageSent(true);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      {forgotPassword ? (
        <Box>
          {!sendResetLink && (
            <Grid templateColumns={"repeat(5,1fr)"} gap={5}>
              <GridItem colSpan={6}>
                <PasswordResetForm
                  isMessageSent={isMessageSent}
                  userEmail={userEmail}
                  setUserEmail={setUserEmail}
                  isError={!validator.isEmail(userEmail)}
                  resetPassword={sendResetPassordLink}
                />
              </GridItem>
              <Flex>
                <Icon as={IoArrowBackSharp} pt='1' color='blue.500' />
                <Link color='blue.500' onClick={(e) => setForgotPassword()}>
                  {" "}
                  Back
                </Link>
              </Flex>
            </Grid>
          )}
        </Box>
      ) : (
        <Grid templateColumns={"repeat(5,1fr)"} gap={5}>
          <GridItem colSpan={6}>
            <FormControl isInvalid={errorMessage?.type === "email"}>
              <FormLabel htmlFor='email'>Email address</FormLabel>
              <Input id='email' type='email' value={userEmail} onChange={setUserEmail} />
              <FormErrorMessage>{errorMessage?.message}</FormErrorMessage>
            </FormControl>
          </GridItem>
          <GridItem colSpan={6}>
            <FormControl isInvalid={errorMessage?.type === "password"}>
              <FormLabel htmlFor='password'>Password</FormLabel>
              <Input id='password' type='password' value={userPassword} onChange={setUserPassword} />
              <FormErrorMessage>{errorMessage?.message}</FormErrorMessage>
            </FormControl>
          </GridItem>
          <GridItem colSpan={6} mt='4'>
            <Link href='/' color='blue.500' onClick={(e) => setResetLink(e)}>
              Forgot Password?
            </Link>
          </GridItem>
          <GridItem colStart={2} colEnd={5}>
            <Button colorScheme='blue' size='lg' isFullWidth={true} onClick={loginUser}>
              Login
            </Button>
          </GridItem>
          <GridItem colStart={2} colEnd={6} mt='4' ml='20'>
            <Link onClick={createAccount} color='blue.500'>
              Create Account
            </Link>
          </GridItem>
          <GridItem colSpan={6} mt='10'>
            <Button className={styles.socialLogin} leftIcon={<FcGoogle />} isFullWidth={true}>
              Login with Google
            </Button>
          </GridItem>
          <GridItem colSpan={6}>
            <Button className={styles.socialLogin} leftIcon={<BsFacebook />} isFullWidth={true}>
              Login with Facebook
            </Button>
          </GridItem>
        </Grid>
      )}
    </>
  );
};

export default LoginComponent;
