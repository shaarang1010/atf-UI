import React from "react";
import { Box, Heading, Text, Spacer, Flex } from "@chakra-ui/react";

interface InformationPaneProps {
  backgroundColor: string;
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
      <Box maxWidth='md' borderWidth='1px' borderRadius='lg' bg={backgroundColor}>
        <Heading as={"h2"} size='lg'>
          {informationHeading}
        </Heading>
        <Spacer />
        {informationText
          ? informationText.split("# ").map((text, index) => {
              return (
                <Text fontSize={"md"} p='4' key={index}>
                  {text}
                </Text>
              );
            })
          : null}
        {children ? (
          <>
            <Spacer />
            <Box maxWidth={"md"}>{children}</Box>
          </>
        ) : null}
      </Box>
    </Flex>
  );
};

export default InformationPane;
