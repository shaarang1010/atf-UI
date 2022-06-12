import React, { useContext, useState } from "react";
import { Container, Skeleton, Text, Box, Stack, SimpleGrid, Heading } from "@chakra-ui/react";
import { ReactMarkdownRender } from "../components/markdown/ReactMarkdownRender";
import AppContext from "../context/AppContext";

type AboutPageProps = {
  pageData: string;
};

const AboutPage: React.FC<AboutPageProps> = ({ pageData }) => {
  const { additionalPages, setAdditionalPages } = useContext(AppContext);
  return (
    <Container maxW={"container.lg"}>
      <Heading as='h1' size='3xl' mr='10' my='10'>
        About Aphasia Therapy Finder
      </Heading>
      {additionalPages.aboutpage && <ReactMarkdownRender text={additionalPages.aboutpage} />}
    </Container>
  );
};

export default AboutPage;
