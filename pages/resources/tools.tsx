import React, { useContext, useState } from "react";
import { Container, Heading } from "@chakra-ui/react";
import { ReactMarkdownRender } from "../../components/markdown/ReactMarkdownRender";
import AppContext from "../../context/AppContext";

type ToolsPageProps = {
  pageData: string;
};

const ToolsPage: React.FC<ToolsPageProps> = ({ pageData }) => {
  const { additionalPages, setAdditionalPages } = useContext(AppContext);
  return (
    <Container maxW={"container.xl"}>
      {additionalPages.toolspage && <ReactMarkdownRender text={additionalPages.toolspage} />}
    </Container>
  );
};

export default ToolsPage;
