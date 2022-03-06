import React from "react";
import { TherapyInfoProps } from "./TherapyProps";
import AccordianComponent from "../accordian/Accordian";
import { Grid, GridItem, Heading, Badge } from "@chakra-ui/react";
import Link from "next/link";

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
  const accordianItems = [{}];
  return (
    <Grid gap={6}>
      <GridItem colSpan={6}>
        <Heading as='h2'>{therapyName}</Heading>
      </GridItem>
      <GridItem colSpan={6}>
        <h3>Alternative names: </h3>
        {alternativeNames?.split("\n").map((name, index) => {
          return (
            <Badge key={index} variant='solid' colorScheme={"blue"}>
              {name}
            </Badge>
          );
        })}
      </GridItem>
      <GridItem colSpan={6}>
        <h3>Similar or related therapies: </h3>
        {relatedTherapies?.split("\n").map((name, index) => {
          return (
            <Link href={"/index"} key={index}>
              {name}
            </Link>
          );
        })}
      </GridItem>
      <GridItem colSpan={6}>
        <AccordianComponent currentKey={0} accordianItems={[]} />
      </GridItem>
    </Grid>
  );
};

export default TherapyInfo;
