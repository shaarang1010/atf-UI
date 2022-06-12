import React, { useContext, useState } from "react";
import { Container, Box } from "@chakra-ui/react";
import { ReactMarkdownRender } from "../../components/markdown/ReactMarkdownRender";
import AppContext from "../../context/AppContext";

type ToolsPageProps = {
  pageData: string;
};

const ToolsPage: React.FC<ToolsPageProps> = ({ pageData }) => {
  const { additionalPages } = useContext(AppContext);
  return (
    <Container maxW={"container.lg"}>
      <Box mt='10'>{additionalPages.toolspage && <ReactMarkdownRender text={additionalPages.toolspage} />}</Box>
    </Container>
  );
};

export default ToolsPage;
