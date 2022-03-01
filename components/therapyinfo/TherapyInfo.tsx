import React from "react";
import { TherapyInfoProps } from "./TherapyProps";
import AccordianComponent from "../accordian/Accordian";
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
      <GridItem colSpan={6}>
        {/**
         * TODO:
         * 1. Add accordian components
         * Each accordian should have title, info and other React.Node components based on the type
         * of data be displayed.
         *
         * 2. Display, info text 3 lines with option to expand the accordian section
         *
         * 3. Check for assets and render based on type
         *
         */}
      </GridItem>
    </Grid>
  );
};

export default TherapyInfo;
