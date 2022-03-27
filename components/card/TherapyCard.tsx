import React from "react";
import { Box, Heading, FormLabel, Input, Text, Link, Icon, Badge, SimpleGrid } from "@chakra-ui/react";
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
  return (
    <Box maxW='md' borderWidth='1px' borderRadius='lg' overflow='hidden' p='3'>
      <Box display={"flex"} alignItems='baseline'>
        <Link>
          <Heading as='h3' size='lg'>
            {cardTitle}
          </Heading>
        </Link>
        <Box bg={theme.colors.gray.default} width={10} ml='5' borderRadius='md'>
          <Icon as={BsFillCameraVideoFill} fill='blue' ml='3' mt='3' />
        </Box>
      </Box>
      <Box mt='5'>
        <Badge borderRadius='full' px='2' colorScheme='gray' textTransform='uppercase' fontSize='0.8em'>
          Targets
        </Badge>
        <Box mt='3'>{therapyTargets}</Box>
      </Box>
      <Box mt='5'>
        <Text>{summaryStatement}</Text>{" "}
      </Box>
      <Box mt='5'>
        <Badge borderRadius='full' px='2' colorScheme='gray' textTransform='uppercase'>
          Level of Evidence
        </Badge>
        <Box mt='3'>{levelOfEvidence}</Box>
      </Box>
    </Box>
  );
};

export default TherapyCard;
