import React from "react";
import Link from "next/link";
import { Box, Heading, FormLabel, Input, Text, Icon, Badge, SimpleGrid } from "@chakra-ui/react";
import theme from "../../styles/theme";
import { BsFillCameraVideoFill } from "react-icons/bs";

interface TherapyCardProps {
  cardTitle: string;
  videoSource: string;
  therapyTargets: React.ReactNode;
  summaryStatement: string;
  levelOfEvidence: string;
}

const TherapyCard: React.FC<TherapyCardProps> = ({
  cardTitle,
  videoSource,
  therapyTargets,
  summaryStatement,
  levelOfEvidence
}) => {
  const strippedSummaryText = summaryStatement.split(".").slice(0, 3);
  const strippedLevelOfEvidence = levelOfEvidence.split(".").slice(0, 3);
  return (
    <Box maxW='lg' borderWidth='1px' borderRadius='lg' overflow='hidden' p='3'>
      <Box display={"flex"} alignItems='baseline'>
        <Link href='/therapyprofile'>
          <Heading as='h3' size='lg' color={theme.colors.primaryBlue}>
            {cardTitle}
          </Heading>
        </Link>
        {/*<Box bg={theme.colors.gray.default} width={10} ml='5' borderRadius='md'>*/}
        <Badge colorScheme='gray' textTransform='uppercase' fontSize='0.9em' ml='3'>
          <Icon as={BsFillCameraVideoFill} fill='blue' mx='3' my='1' />
        </Badge>
        {/*</Box>*/}
      </Box>
      <Box mt='5'>
        <Badge px='2' colorScheme='gray' textTransform='uppercase' fontSize='0.9em'>
          Targets
        </Badge>
        <Box mt='3'>{therapyTargets}</Box>
      </Box>
      <Box mt='5'>
        <Text>
          {strippedSummaryText.join(".")}
          <a href='/' style={{ marginLeft: "3px", color: "blue" }}>
            ...more
          </a>
        </Text>
      </Box>
      <Box mt='5'>
        <Badge px='2' colorScheme='gray' textTransform='uppercase' fontSize='0.9em'>
          Level of Evidence
        </Badge>
        <Box mt='3'>
          {strippedLevelOfEvidence.join(".")}
          <a href='/' style={{ marginLeft: "3px", color: "blue" }}>
            ...more
          </a>
        </Box>
      </Box>
    </Box>
  );
};

export default TherapyCard;
