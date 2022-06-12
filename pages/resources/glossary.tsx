import React, { useContext, useState } from "react";
import { Container, Skeleton, Text, Box, Stack, SimpleGrid, Heading } from "@chakra-ui/react";
import { ReactMarkdownRender } from "../../components/markdown/ReactMarkdownRender";
import AppContext from "../../context/AppContext";

type DocumentationPageProps = {
  pageData: string;
};

const DocumentationPage: React.FC<DocumentationPageProps> = ({ pageData }) => {
  const { additionalPages } = useContext(AppContext);
  return (
    <Container maxW={"container.lg"}>
      <Box mt='10'>
        <Heading as='h3' size='xl' mb='4'>
          Glossary
        </Heading>
        {additionalPages.glossarypage && <ReactMarkdownRender text={additionalPages.glossarypage} />}
      </Box>
    </Container>
  );
};

export default DocumentationPage;
