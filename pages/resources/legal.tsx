import React, { useContext, useState } from "react";
import { Container, Heading } from "@chakra-ui/react";
import { ReactMarkdownRender } from "../../components/markdown/ReactMarkdownRender";
import AppContext from "../../context/AppContext";

type LegalPageProps = {
  pageData: string;
};

const LegalPage: React.FC<LegalPageProps> = ({ pageData }) => {
  const { additionalPages, setAdditionalPages } = useContext(AppContext);
  return (
    <Container maxW={"container.xl"}>
      {additionalPages.legalpage && <ReactMarkdownRender text={additionalPages.legalpage} />}
    </Container>
  );
};

export default LegalPage;
