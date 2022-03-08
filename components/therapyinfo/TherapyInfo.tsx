import React from "react";
import { TherapyInfoProps } from "./TherapyProps";
import AccordianComponent from "../accordian/Accordian";
import { Grid, GridItem, Flex, Heading, Badge, SimpleGrid, Box } from "@chakra-ui/react";
import Link from "next/link";
import RenderMarkdownToHTML from "../markdown/RenderMarkdown";

const TherapyInfo: React.FC<TherapyInfoProps> = ({
  therapyIngredients,
  therapyName,
  mechainismOfAction,
  therapyTargets,
  alternativeNames,
  published_at,
  summaryStatement,
  levelOfEvidence,
  relatedTherapies,
  therapyResources
}) => {
  /**
   * TODO: Split the bottom across different component to avoid mutiple nesting.
   *
   */
  const accordianItems = [
    {
      accordianTitle: "Summary Statement",
      accordianChildNode: <RenderMarkdownToHTML markdownText={summaryStatement ? summaryStatement : ""} />
    },
    {
      accordianTitle: "Level of Evidence",
      accordianChildNode: (
        <Box>
          <Heading as='h3' size='md' mb='4'>
            {" "}
            Evidence Statement: {levelOfEvidence?.evidenceStatement}
          </Heading>
          <RenderMarkdownToHTML markdownText={levelOfEvidence?.additionalText ? levelOfEvidence.additionalText : ""} />
        </Box>
      )
    },
    {
      accordianTitle: "Therapy Targets",
      accordianChildNode: (
        <Box>
          {therapyTargets?.icfDomains ? (
            <Box mb='4'>
              <Heading as='h3' size='md'>
                ICF Domains:{" "}
              </Heading>
              {therapyTargets?.icfDomains}
            </Box>
          ) : null}
          <Box m={therapyTargets?.icfDomains ? "4" : "0"}>
            <Box>
              <Heading as='h3' size='md' mb='4'>
                {" "}
                Therapeutic Targets{" "}
              </Heading>
              <Box>
                <RenderMarkdownToHTML
                  markdownText={therapyTargets?.therapeuticTargets ? therapyTargets?.therapeuticTargets : ""}
                />
              </Box>
            </Box>
            <Box mt='5'>
              <Heading as='h3' size='md' mb='4'>
                {" "}
                Client Selection{" "}
              </Heading>
              <Box mt='5'>
                <b>Aphasia Text:</b>
                <RenderMarkdownToHTML
                  markdownText={
                    therapyTargets?.clientSelection?.aphasiaText ? therapyTargets?.clientSelection.aphasiaText : ""
                  }
                />
              </Box>
              <Box mt='5'>
                <b>Aphasia Severity:</b>
                <RenderMarkdownToHTML
                  markdownText={
                    therapyTargets?.clientSelection?.aphasiaSeverity
                      ? therapyTargets?.clientSelection.aphasiaSeverity
                      : ""
                  }
                />
              </Box>
              <Box mt='5'>
                <b>Aphasia Aetiology:</b>
                <RenderMarkdownToHTML
                  markdownText={
                    therapyTargets?.clientSelection?.aphasiaAetiology
                      ? therapyTargets?.clientSelection.aphasiaAetiology
                      : ""
                  }
                />
              </Box>
              <Box mt='5'>
                <b>Time since onset of Aphasia:</b>
                <RenderMarkdownToHTML
                  markdownText={
                    therapyTargets?.clientSelection?.timeSinceOnsetOfAphasia
                      ? therapyTargets?.clientSelection.timeSinceOnsetOfAphasia
                      : ""
                  }
                />
              </Box>
            </Box>
          </Box>
        </Box>
      )
    },
    {
      accordianTitle: "Therapy Ingredients",
      accordianChildNode: (
        <>
          <Box>
            <Heading as='h3' size='md'>
              Therapy Protocol:
            </Heading>{" "}
            <Link href='/index'>{therapyIngredients?.therapyProtocol}</Link>
          </Box>
          <Box mt='5'>
            <Heading as='h3' size='md'>
              Therapy Method
            </Heading>
            <RenderMarkdownToHTML
              markdownText={therapyIngredients?.therapyMethod ? therapyIngredients.therapyMethod : ""}
            />
          </Box>
        </>
      )
    },
    {
      accordianTitle: "Therapy Resources",
      accordianChildNode: (
        <>
          <Box>
            <Heading as='h3' size='md'>
              Literature:
            </Heading>{" "}
            <RenderMarkdownToHTML markdownText={therapyResources?.literature ? therapyResources.literature : ""} />
          </Box>
        </>
      )
    }
  ];
  return (
    <SimpleGrid columns={{ sm: 1, md: 12 }} gap={5}>
      <GridItem colSpan={12}>
        <Heading as='h2' size='3xl'>
          {therapyName}
        </Heading>
      </GridItem>
      <GridItem colSpan={12}>
        <Heading as='h3' size='md'>
          {" "}
          Alternative names:{" "}
        </Heading>
        {alternativeNames?.split("\n").map((name, index) => {
          return (
            <Badge key={index} variant='subtle' fontSize={"1.0em"} colorScheme={"pink"} mr='4'>
              {name}
            </Badge>
          );
        })}
      </GridItem>
      <GridItem colSpan={12}>
        <Heading as='h3' size='md'>
          Similar or related therapies:{" "}
        </Heading>
        {relatedTherapies?.split("\n").map((name, index) => {
          return (
            <Link href={"/index"} key={index}>
              {name}
            </Link>
          );
        })}
      </GridItem>
      <GridItem colSpan={12}>
        <AccordianComponent currentKey={0} accordianItems={accordianItems} />
      </GridItem>
    </SimpleGrid>
  );
};

export default TherapyInfo;
