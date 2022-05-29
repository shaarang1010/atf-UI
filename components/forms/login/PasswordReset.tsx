import React from "react";
import {
  Box,
  Button,
  FormControl,
  Text,
  FormLabel,
  Input,
  FormHelperText,
  FormErrorMessage,
  Flex
} from "@chakra-ui/react";
import styles from "./Login.module.css";
import { useRouter } from "next/router";
import UserContext from "../../../context/UserContext";

type PasswordResetFormProps = {
  isMessageSent: boolean;
  resetPassword(): void;
  userEmail: string;
  isError: boolean;
  setUserEmail(e: React.ChangeEvent<HTMLInputElement>): void;
};

export const PasswordResetForm: React.FC<PasswordResetFormProps> = ({
  isMessageSent,
  isError,
  resetPassword,
  userEmail,
  setUserEmail
}) => {
  return (
    <>
      <FormControl isInvalid={isError}>
        {!isMessageSent ? (
          <>
            <FormLabel htmlFor='email'>Your Email</FormLabel>
            <Input id='email' type='email' value={userEmail} onChange={setUserEmail} />
            {!isError ? (
              <FormHelperText mt='5'>Enter the email you signed up with.</FormHelperText>
            ) : (
              <FormErrorMessage>Email is required.</FormErrorMessage>
            )}

            <Button colorScheme='blue' size='lg' mt='5' isFullWidth={true} onClick={resetPassword}>
              Send Reset Link
            </Button>
          </>
        ) : (
          <Text fontSize='xl'>A reset link has been sent to {userEmail}</Text>
        )}
      </FormControl>
    </>
  );
};
