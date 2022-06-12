import React from "react";
import { Box, Heading, Text, Spacer, Flex, Center } from "@chakra-ui/react";
import RenderMarkdownToHTML from "../markdown/RenderMarkdown";

interface InformationPaneProps {
  backgroundColor?: string;
  informationHeading?: string;
  informationText?: string;
  children?: React.ReactNode;
}

const InformationPane: React.FC<InformationPaneProps> = ({
  backgroundColor,
  informationHeading,
  informationText,
  children
}) => {
  return (
    <Flex>
      <Box maxWidth='md' m='16'>
        <Heading as={"h2"} size='lg'>
          {informationHeading}
        </Heading>
        <Spacer />
        {informationText && <RenderMarkdownToHTML markdownText={informationText} />}
        {children ? (
          <>
            <Spacer />
            <Box maxWidth={"lg"}>{children}</Box>
          </>
        ) : null}
      </Box>
    </Flex>
  );
};

export default InformationPane;
