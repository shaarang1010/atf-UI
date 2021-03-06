import React from "react";
import Link from "next/link";
import {
  Box,
  Heading,
  Flex,
  Input,
  Text,
  IconButton,
  Image,
  Badge,
  SimpleGrid,
  Link as ChakraLink
} from "@chakra-ui/react";
import theme from "../../styles/theme";
import PopOverComponent from "../popovers/Popovers";
import { replaceNewLineChar, searchByKey } from "../../util/listFilter";
import { BsCameraVideoFill } from "react-icons/bs";
import RenderMarkdownToHTML from "../markdown/RenderMarkdown";

interface TherapyCardProps {
  cardTitle: string;
  id: string | number;
  summaryStatement: string;
  levelOfEvidence: string;
  videoSrc: string;
  openModal(): void;
  onCardClick(): void;
}

const TherapyCard: React.FC<TherapyCardProps> = ({
  id,
  cardTitle,
  summaryStatement,
  levelOfEvidence,
  videoSrc,
  openModal,
  onCardClick
}) => {
  return (
    <Box maxW='lg' borderWidth='1px' borderRadius='lg' mt='2' overflow='hidden' p='3' boxShadow='lg'>
      <Box display={"flex"} cursor={"pointer"}>
        <ChakraLink as={Link} href={`/therapyprofile/${id}`} style={{ cursor: "pointer" }}>
          <Heading as='h4' size='lg' color={"darkBlue"} onClick={onCardClick}>
            {cardTitle}
          </Heading>
        </ChakraLink>
        {videoSrc && <IconButton colorScheme='gray' aria-label='Video' size='lg' icon={<BsCameraVideoFill />} />}
      </Box>
      <Box mt='5'>
        <Badge p='2' mr='2' colorScheme='gray' textTransform='uppercase' fontSize='0.8em'>
          Level of Evidence
          {"   "}
          <PopOverComponent
            size='xs'
            header={"NHMRC Level of Evidence Hierarchy "}
            content={
              <Image
                src={
                  "https://www.researchgate.net/profile/Trentham-Furness/publication/276921671/figure/tbl1/AS:614204427997212@1523449155846/NHMRC-and-NICE-levels-of-evidence.png"
                }
                alt='NHMRC Level of Evidence Hierarchy'
              />
            }
          />
        </Badge>
        {levelOfEvidence &&
          replaceNewLineChar(levelOfEvidence)
            .split(",")
            .map((option: string, index: number) => (
              <Badge p='2' mr='2' variant='subtle' colorScheme='messenger' key={index}>
                {levelOfEvidence ? searchByKey("levels", option).label : ""}
              </Badge>
            ))}
      </Box>
      <Box mt='5'>
        <Badge p='2' mr='2' mb='2' colorScheme='gray' textTransform='uppercase' fontSize='0.9em'>
          Summary Statement
        </Badge>
        <RenderMarkdownToHTML markdownText={summaryStatement} />
      </Box>
    </Box>
  );
};

export default TherapyCard;
