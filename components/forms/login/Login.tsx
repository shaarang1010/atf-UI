import {
  Box,
  Grid,
  GridItem,
  Button,
  FormControl,
  Flex,
  FormLabel,
  Input,
  Heading,
  Link,
  FormErrorMessage
} from "@chakra-ui/react";
import React, { useContext, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import styles from "./Login.module.css";
import { useRouter } from "next/router";
import UserContext from "../../../context/UserContext";

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
  const router = useRouter();
  const onClickNavigate = (e: any, link: string) => {
    e.preventDefault();
    router.push(link);
  };
  console.log(errorMessage?.type);
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
            <Link href='/' color='blue.500'>
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
