import React from "react";

import { Box, Center, Heading } from "@chakra-ui/react";

interface NotAuthenticatedProps {
  message?: string;
}

export const NotAuthenticated: React.FC<NotAuthenticatedProps> = ({ message }) => {
  return (
    <Center>
      <Box my='100'>
        <Heading as='h1' size='2xl' p='10' ml='10'>
          Your are not authenticated{" "}
        </Heading>
        <Heading as='h1' size='2xl' p='10'>
          Please Login/Sign-up to continue
        </Heading>
      </Box>
    </Center>
  );
};
