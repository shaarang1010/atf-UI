import React from "react";
import Link from "next/link";
import { Box, Heading, Flex, Input, Text, Icon, Image, Badge, SimpleGrid, Link as ChakraLink } from "@chakra-ui/react";
import theme from "../../styles/theme";
import PopOverComponent from "../popovers/Popovers";
import TableComponent from "./Table";
import { replaceNewLineChar, searchByKey } from "../../util/listFilter";
import { TableData } from "../../models/ComponentModel";
import RenderMarkdownToHTML from "../markdown/RenderMarkdown";

interface TherapyCardProps {
  cardTitle: string;
  id: string | number;
  summaryStatement: string;
  levelOfEvidence: string;
}

const TherapyCard: React.FC<TherapyCardProps> = ({
  id,
  cardTitle,
  summaryStatement,
  levelOfEvidence
}) => {
  const data = [
    {
      dataItems: ["Level I", "Lorem ipsum dolor sit amet, consectetur adipiscing ."]
    },
    { dataItems: ["Level II", "lorem ipsum diotr"] }
  ];
  return (
    <Box maxW='lg' borderWidth='1px' borderRadius='lg' mt='2' overflow='hidden' p='3'>
      <Box display={"flex"} alignItems='baseline'>
        <ChakraLink as={Link} href={`/therapyprofile`} style={{ cursor: "pointer" }}>
          <Heading as='h4' size='lg' color={theme.colors.primaryBlue}>
            {cardTitle}
          </Heading>
        </ChakraLink>
        <Box ml='2'>
          <PopOverComponent
            header={"NHMRC Level of Evidence Hierarchy "}
            content={
              // <TableComponent headers={["Level of Evidence", "Info"]} data={data} variant='simple' tableCaption='' />
              <Image
                src={
                  "https://www.researchgate.net/profile/Trentham-Furness/publication/276921671/figure/tbl1/AS:614204427997212@1523449155846/NHMRC-and-NICE-levels-of-evidence.png"
                }
                alt='NHMRC Level of Evidence Hierarchy'
              />
            }
          />
        </Box>
      </Box>
      <Box mt='5'>
        <Badge p='2' mr='2' colorScheme='gray' textTransform='uppercase' fontSize='0.9em'>
          Level of Evidence
        </Badge>
        {levelOfEvidence &&
          replaceNewLineChar(levelOfEvidence)
            .split(",")
            .map((option: string, index: number) => (
              <Badge p='2' mr='2' variant='subtle' colorScheme='pink' key={index}>
                {levelOfEvidence ? searchByKey("levels", option).label : ""}
              </Badge>
            ))}
      </Box>
      <Box mt='5'>
        <Badge p='2' mr='2' colorScheme='gray' textTransform='uppercase' fontSize='0.9em'>
          Summary Statement
        </Badge>
        <RenderMarkdownToHTML markdownText={summaryStatement} />
      </Box>
    </Box>
  );
};

export default TherapyCard;
