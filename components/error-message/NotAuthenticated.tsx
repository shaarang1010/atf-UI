import React, { useEffect } from "react";

import { Box, Center, Heading } from "@chakra-ui/react";
import { useRouter } from "next/router";

interface NotAuthenticatedProps {
  message?: string;
}

export const NotAuthenticated: React.FC<NotAuthenticatedProps> = ({ message }) => {
  let router = useRouter();
  useEffect(() => {
    let timer = setTimeout(() => {
      router.push("/");
    }, 5000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <Center>
      <Box my='100'>
        <Heading as='h1' size='2xl' p='10' ml='10'>
          Your are currently not authenticated{" "}
        </Heading>
        <Heading as='h1' size='2xl' p='10'>
          You will be redirected to login/sign-up page
        </Heading>
      </Box>
    </Center>
  );
};
