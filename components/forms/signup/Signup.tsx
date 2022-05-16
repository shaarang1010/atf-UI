import {
  Box,
  Grid,
  GridItem,
  Button,
  FormControl,
  FormLabel,
  Input,
  Divider,
  Link,
  SimpleGrid,
  Text
} from "@chakra-ui/react";
import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import { useRouter } from "next/router";
import styles from "./Signup.module.css";
import { auth, db } from "../../../util/firebase/firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { collection, addDoc } from "firebase/firestore";

interface SignupProps {
  loginAccount(): void;
}

export const Signup: React.FC<SignupProps> = ({ loginAccount }) => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [retypePassword, setRetypePassword] = useState("");
  const [passwordsMatch, setPasswordsMatch] = useState<boolean>(false);

  const router = useRouter();
  const onClickNavigate = (e: any, link: string) => {
    e.preventDefault();
    router.push(link);
  };

  const matchPasswords = (retypedPassword: string) => {
    if (password === retypedPassword) {
      setPasswordsMatch(true);
    }
  };

  const signUpUser = async (e: React.MouseEvent) => {
    e.preventDefault();

    const data = await createUserWithEmailAndPassword(auth, email, password).catch((err) => console.error(err));
    if (data) {
      const { uid, email, metadata } = data.user;
      const updatedProfile = await updateProfile(data.user, { displayName: `${firstname} ${lastname}` }).catch((err) =>
        console.error(err)
      );
      const docRef = await addDoc(collection(db, "users"), {
        firstname: firstname,
        lastname: lastname,
        lastLogin: metadata.lastSignInTime,
        uid: uid,
        email: email
      }).catch((err) => {
        console.log("Database Error", err);
      });
      router.push("/therapyprofile");
    }
  };

  return (
    <Grid templateColumns={"repeat(5,1fr)"} gap={6}>
      <GridItem colSpan={8}>
        <FormControl isRequired>
          <FormLabel htmlFor='firstname'>Firstname</FormLabel>
          <Input
            id='firstname'
            type='text'
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFirstname(e.target.value)}
          />
        </FormControl>
      </GridItem>
      <GridItem colSpan={4}>
        <FormControl isRequired>
          <FormLabel htmlFor='lastname'>Lastname</FormLabel>
          <Input
            id='lastname'
            type='text'
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setLastname(e.target.value)}
          />
        </FormControl>
      </GridItem>
      <GridItem colSpan={12}>
        <FormControl isRequired>
          <FormLabel htmlFor='email'>Email address</FormLabel>
          <Input
            id='email'
            type='email'
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmailAddress(e.target.value)}
          />
        </FormControl>
      </GridItem>
      <GridItem colSpan={12}>
        <FormControl isRequired>
          <FormLabel htmlFor='password'>Password</FormLabel>
          <Input
            id='password'
            type='password'
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
          />
        </FormControl>
      </GridItem>
      <GridItem colSpan={12}>
        <FormControl isRequired>
          <FormLabel htmlFor='password'>Re-type Password</FormLabel>
          <Input
            id='re-type-password'
            type='password'
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setRetypePassword(e.target.value);
              matchPasswords(e.target.value);
            }}
          />
        </FormControl>
      </GridItem>
      <GridItem colSpan={12}>
        {!passwordsMatch && (
          <Text fontSize='sm' color='red'>
            Passwords do not match
          </Text>
        )}
      </GridItem>
      <GridItem colStart={4} colEnd={11}>
        <Button colorScheme='blue' size='lg' isFullWidth={true} isDisabled={!passwordsMatch} onClick={signUpUser}>
          Sign up
        </Button>
      </GridItem>
      <GridItem colSpan={12}>
        <Divider orientation='horizontal' />
      </GridItem>
      <GridItem colSpan={12}>
        <Button className={styles.socialLogin} leftIcon={<FcGoogle />} isFullWidth={true} disabled={true}>
          Signup with Google
        </Button>
      </GridItem>
      <GridItem colSpan={12}>
        <Button className={styles.socialLogin} leftIcon={<BsFacebook />} isFullWidth={true} disabled={true}>
          Signup with Facebook
        </Button>
      </GridItem>
      <GridItem colStart={5} colEnd={11} mt='5'>
        <Link onClick={loginAccount}>Already have an account?</Link>
      </GridItem>
    </Grid>
  );
};
