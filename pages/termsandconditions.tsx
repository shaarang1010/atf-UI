import React, { useContext, useState } from "react";
import { Container, Box } from "@chakra-ui/react";
import RenderMarkdownToHTML from "../components/markdown/RenderMarkdown";
import AppContext from "../context/AppContext";

type LegalPageProps = {
  pageData: string;
};

const LegalPage: React.FC<LegalPageProps> = ({ pageData }) => {
  const { additionalPages } = useContext(AppContext);
  return (
    <Container maxW={"container.lg"}>
      <Box mt='10'>
        {additionalPages.legalpage && <RenderMarkdownToHTML markdownText={additionalPages.legalpage} />}
      </Box>
    </Container>
  );
};

export default LegalPage;
