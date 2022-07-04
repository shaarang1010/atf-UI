import React from "react";
import { TherapyInfoProps } from "./TherapyProps";
import AccordianComponent from "../accordian/Accordian";
import ReactPlayer from "react-player";
import { Grid, GridItem, Text, Heading, Badge, SimpleGrid, Box, Wrap, WrapItem } from "@chakra-ui/react";
import Link from "next/link";
import RenderMarkdownToHTML from "../markdown/RenderMarkdown";
import { replaceNewLineChar, searchByKey } from "../../util/listFilter";

const TherapyInfo: React.FC<TherapyInfoProps> = ({
  therapyIngredients,
  therapyname,
  mechainismOfAction,
  therapyTargets,
  alternativeNames,
  keywords,
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
      accordianTitle: "Summary statement",
      accordianChildNode: <RenderMarkdownToHTML markdownText={summaryStatement ? summaryStatement : ""} />
    },
    {
      accordianTitle: "Level of evidence",
      accordianChildNode: (
        <Box>
          {levelOfEvidence &&
            replaceNewLineChar(levelOfEvidence.evidenceDropdown)
              .split(",")
              .map((option: string, index: number) => (
                <Badge p='2' mr='2' variant='subtle' fontSize={"1.0em"} colorScheme='messenger' key={index}>
                  {levelOfEvidence.evidenceDropdown ? searchByKey("levels", option).label : ""}
                </Badge>
              ))}
          <Box m='2' />
          <RenderMarkdownToHTML
            markdownText={levelOfEvidence?.evidenceStatement ? levelOfEvidence?.evidenceStatement : ""}
          />
          <RenderMarkdownToHTML markdownText={levelOfEvidence?.additionalText ? levelOfEvidence?.additionalText : ""} />
        </Box>
      )
    },
    {
      accordianTitle: "Therapy targets",
      accordianChildNode: (
        <Box>
          {therapyTargets?.icfDomains ? (
            <Box mb='4'>
              <Heading as='h4' size='lg' mb='4'>
                ICF domains
              </Heading>
              <Box ml='4'>
                <RenderMarkdownToHTML markdownText={therapyTargets?.icfDomains} />
              </Box>
            </Box>
          ) : null}
          <Box>
            <Box>
              <Heading as='h4' size='lg' mb='4'>
                Targets
              </Heading>
              <Box>
                <RenderMarkdownToHTML
                  markdownText={therapyTargets?.therapeuticTargets ? therapyTargets?.therapeuticTargets : ""}
                />
              </Box>
            </Box>
            {therapyTargets?.clientSelection && (
              <Box mt='5'>
                <Heading as='h4' size='lg' mb='4'>
                  Client selection
                </Heading>
                {therapyTargets?.clientSelection?.clientSelection && (
                  <Box mt='5'>
                    <Text as='b'>Client selection</Text>
                    <RenderMarkdownToHTML
                      markdownText={
                        therapyTargets?.clientSelection?.clientSelection
                          ? therapyTargets?.clientSelection?.clientSelection
                          : "-"
                      }
                    />
                  </Box>
                )}
                {therapyTargets?.clientSelection?.aphasiaTypeList && (
                  <Box mt='5'>
                    <Text as='b'>Aphasia type</Text>
                    <RenderMarkdownToHTML
                      markdownText={
                        therapyTargets?.clientSelection?.aphasiaTypeList
                          ? therapyTargets?.clientSelection?.aphasiaTypeList
                          : ""
                      }
                    />
                    <RenderMarkdownToHTML
                      markdownText={
                        therapyTargets?.clientSelection?.aphasiaText ? therapyTargets?.clientSelection?.aphasiaText : ""
                      }
                    />
                  </Box>
                )}
                {therapyTargets?.clientSelection?.aphasiaSeverityList && (
                  <Box mt='5'>
                    <Text as='b'>Aphasia severity</Text>
                    <RenderMarkdownToHTML
                      markdownText={
                        therapyTargets?.clientSelection?.aphasiaSeverityList
                          ? therapyTargets?.clientSelection?.aphasiaSeverityList
                          : ""
                      }
                    />
                    <RenderMarkdownToHTML
                      markdownText={
                        therapyTargets?.clientSelection?.aphasiaSeverity
                          ? therapyTargets?.clientSelection?.aphasiaSeverity
                          : ""
                      }
                    />
                  </Box>
                )}
                {therapyTargets?.clientSelection?.aphasiaAetiologyList && (
                  <Box mt='5'>
                    <Text as='b'>Aphasia aetiology</Text>
                    <RenderMarkdownToHTML
                      markdownText={
                        therapyTargets?.clientSelection?.aphasiaAetiologyList
                          ? therapyTargets?.clientSelection?.aphasiaAetiologyList
                          : "-"
                      }
                    />
                    <RenderMarkdownToHTML
                      markdownText={
                        therapyTargets?.clientSelection?.aphasiaAetiology
                          ? therapyTargets?.clientSelection?.aphasiaAetiology
                          : "-"
                      }
                    />
                  </Box>
                )}
                {therapyTargets?.clientSelection?.timeSinceOnsetList && (
                  <Box mt='5'>
                    <Text as='b'>Time since aphasia onset</Text>
                    <RenderMarkdownToHTML
                      markdownText={
                        therapyTargets?.clientSelection?.timeSinceOnsetList
                          ? therapyTargets?.clientSelection?.timeSinceOnsetList
                          : "-"
                      }
                    />
                  </Box>
                )}
                {therapyTargets?.clientSelection?.timeSinceOnset && (
                  <Box>
                    <RenderMarkdownToHTML
                      markdownText={
                        therapyTargets?.clientSelection?.timeSinceOnset
                          ? therapyTargets?.clientSelection?.timeSinceOnset
                          : "-"
                      }
                    />
                  </Box>
                )}
                {therapyTargets?.clientSelection?.timeSinceOnsetText && (
                  <Box>
                    <RenderMarkdownToHTML
                      markdownText={
                        therapyTargets?.clientSelection?.timeSinceOnsetText
                          ? therapyTargets?.clientSelection?.timeSinceOnsetText
                          : "-"
                      }
                    />
                  </Box>
                )}
                {therapyTargets?.clientSelection?.otherClientSelectionText && (
                  <Box mt='5'>
                    <Text as='b'>Other client Selection</Text>
                    <RenderMarkdownToHTML
                      markdownText={
                        therapyTargets?.clientSelection?.otherClientSelectionText
                          ? therapyTargets?.clientSelection?.otherClientSelectionText
                          : "-"
                      }
                    />
                  </Box>
                )}
              </Box>
            )}
          </Box>
        </Box>
      )
    },
    {
      accordianTitle: "Therapy ingredients",
      accordianChildNode: (
        <>
          <Box>
            <Heading as='h4' size='lg' mb='4'>
              Therapy protocol
            </Heading>{" "}
            <RenderMarkdownToHTML
              markdownText={therapyIngredients?.therapyProtocol ? therapyIngredients?.therapyProtocol : ""}
            />
          </Box>
          <Box mt='5'>
            <Heading as='h3' size='lg' mb='4'>
              Therapy method
            </Heading>
            <RenderMarkdownToHTML
              markdownText={therapyIngredients?.therapyMethod ? therapyIngredients?.therapyMethod : ""}
            />
          </Box>
          <Box mt='5'>
            <Heading as='h4' size='lg' mb='4'>
              Key therapeautic principles
            </Heading>
            <RenderMarkdownToHTML
              markdownText={
                therapyIngredients?.keyTherapeuticPrincipals ? therapyIngredients?.keyTherapeuticPrincipals : ""
              }
            />
          </Box>
          <Box mt='5'>
            <Heading as='h4' size='lg'>
              Therapy mode
            </Heading>
            <Box mt='5'>
              <b>Setting</b>
              <RenderMarkdownToHTML
                markdownText={therapyIngredients?.therapyMode?.setting ? therapyIngredients?.therapyMode.setting : ""}
              />
            </Box>
            <Box mt='5'>
              <b>Dose and schedule</b>
              <RenderMarkdownToHTML
                markdownText={
                  therapyIngredients?.therapyMode?.doseAndSchedule
                    ? therapyIngredients?.therapyMode.doseAndSchedule
                    : ""
                }
              />
            </Box>
            <Box mt='5'>
              <b>Delivery</b>
              <RenderMarkdownToHTML
                markdownText={therapyIngredients?.therapyMode?.delivery ? therapyIngredients?.therapyMode.delivery : ""}
              />
            </Box>
          </Box>
          {therapyIngredients?.materials && (
            <Box mt='5'>
              <b>Materials</b>
              <RenderMarkdownToHTML markdownText={therapyIngredients?.materials ? therapyIngredients?.materials : ""} />
            </Box>
          )}
          {therapyIngredients?.frequentClinicalQuestions && (
            <Box mt='5'>
              <b>Frequent Clinal Questions </b>
              <RenderMarkdownToHTML
                markdownText={
                  therapyIngredients?.frequentClinicalQuestions ? therapyIngredients?.frequentClinicalQuestions : ""
                }
              />
            </Box>
          )}
        </>
      )
    },
    {
      accordianTitle: "Mechanism of action",
      accordianChildNode: (
        <>
          {mechainismOfAction?.theoreticalUnderPinnings && (
            <Box>
              <Heading as='h4' size='lg' mb='4'>
                Theoritical underpinnings
              </Heading>{" "}
              <RenderMarkdownToHTML
                markdownText={
                  mechainismOfAction?.theoreticalUnderPinnings ? mechainismOfAction?.theoreticalUnderPinnings : ""
                }
              />
            </Box>
          )}
          {mechainismOfAction?.supportingEmpiricalEvidence && (
            <Box>
              <Heading as='h4' size='lg' mb='4'>
                Supporting empirical evidence
              </Heading>{" "}
              <RenderMarkdownToHTML
                markdownText={
                  mechainismOfAction?.supportingEmpiricalEvidence ? mechainismOfAction?.supportingEmpiricalEvidence : ""
                }
              />
            </Box>
          )}
        </>
      )
    },
    {
      accordianTitle: "Therapy resources",
      accordianChildNode: (
        <Box width={["xs", "4xl"]}>
          <Heading as='h4' size='lg' mb='4'>
            Literature
          </Heading>{" "}
          <Box>
            <RenderMarkdownToHTML markdownText={therapyResources?.literature ? therapyResources?.literature : ""} />
          </Box>
        </Box>
      )
    }
  ];
  return (
    <SimpleGrid columns={{ sm: 1, md: 12 }} gap={5}>
      <GridItem colSpan={12}>
        <Heading as='h2' size='3xl'>
          {therapyname}
        </Heading>
      </GridItem>
      <GridItem colSpan={12}>
        <Heading as='h4' size='md'>
          {" "}
          Alternative names:{" "}
        </Heading>
        {alternativeNames?.split("\n").map((name, index) => {
          return (
            <Badge key={index} variant='subtle' fontSize={["0.8em", "1.0em"]} colorScheme={"messenger"} mr='4'>
              {name}
            </Badge>
          );
        })}
      </GridItem>
      <GridItem colSpan={12}>
        {relatedTherapies && (
          <Heading as='h4' size='md'>
            Similar or related therapies:{" "}
          </Heading>
        )}
        {relatedTherapies &&
          relatedTherapies.split("\n").map((name, index) => {
            return (
              <Link href={"/index"} key={index}>
                {name}
              </Link>
            );
          })}
      </GridItem>
      <GridItem colSpan={12}>
        {therapyResources?.videoFile?.url && (
          <Box width={["xs", "lg"]}>
            <ReactPlayer url={therapyResources?.videoFile?.url} controls={true} width='360px' />
          </Box>
        )}
      </GridItem>
      <GridItem colSpan={12}>
        <AccordianComponent currentKey={0} accordianItems={accordianItems} />
      </GridItem>
    </SimpleGrid>
  );
};

export default TherapyInfo;
