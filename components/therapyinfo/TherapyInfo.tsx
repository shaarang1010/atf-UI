import React from "react";
import { TherapyInfoProps } from "./TherapyProps";
import { Grid, GridItem, Heading } from "@chakra-ui/react";

const TherapyInfo: React.FC<TherapyInfoProps> = ({
  therapyIngredients,
  therapyName,
  mechainismOfAction,
  therapyTargets,
  alternativeNames,
  published_at,
  summaryStatement,
  levelOfEvidence,
  relatedTherapies
}) => {
  return (
    <Grid gap={4}>
      <GridItem colSpan={6}>
        <Heading as='h2'>{therapyName}</Heading>
      </GridItem>
      <GridItem></GridItem>
    </Grid>
  );
};
