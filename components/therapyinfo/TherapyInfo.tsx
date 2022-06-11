import React from "react";
import { TherapyInfoProps } from "./TherapyProps";
import AccordianComponent from "../accordian/Accordian";
import ReactPlayer from "react-player";
import { Grid, GridItem, Flex, Heading, Badge, SimpleGrid, Box } from "@chakra-ui/react";
import Link from "next/link";
import RenderMarkdownToHTML from "../markdown/RenderMarkdown";

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
      accordianTitle: "Summary Statement",
      accordianChildNode: <RenderMarkdownToHTML markdownText={summaryStatement ? summaryStatement : ""} />
    },
    {
      accordianTitle: "Level of Evidence",
      accordianChildNode: (
        <Box>
          <Heading as='h4' size='lg' mb='4'>
            {" "}
            Evidence Statement:
          </Heading>
          <RenderMarkdownToHTML
            markdownText={levelOfEvidence?.evidenceStatement ? levelOfEvidence?.evidenceStatement : ""}
          />
          <RenderMarkdownToHTML markdownText={levelOfEvidence?.additionalText ? levelOfEvidence?.additionalText : ""} />
        </Box>
      )
    },
    {
      accordianTitle: "Therapy Targets",
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
                {therapyTargets?.clientSelection?.aphasiaText && (
                  <Box mt='5'>
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
                {therapyTargets?.clientSelection?.aphasiaSeverity && (
                  <Box mt='5'>
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
                {therapyTargets?.clientSelection?.aphasiaAetiology && (
                  <Box mt='5'>
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
                    <RenderMarkdownToHTML
                      markdownText={
                        therapyTargets?.clientSelection?.timeSinceOnsetList
                          ? therapyTargets?.clientSelection?.timeSinceOnsetList
                          : "-"
                      }
                    />
                    <RenderMarkdownToHTML
                      markdownText={
                        therapyTargets?.clientSelection?.timeSinceOnset
                          ? therapyTargets?.clientSelection?.timeSinceOnset
                          : "-"
                      }
                    />
                  </Box>
                )}
                {therapyTargets?.clientSelection?.otherClientSelectionText && (
                  <Box mt='5'>
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
      accordianTitle: "Therapy Ingredients",
      accordianChildNode: (
        <>
          <Box>
            <Heading as='h4' size='lg' mb='4'>
              Therapy Protocol
            </Heading>{" "}
            <RenderMarkdownToHTML
              markdownText={therapyIngredients?.therapyProtocol ? therapyIngredients?.therapyProtocol : ""}
            />
          </Box>
          <Box mt='5'>
            <Heading as='h3' size='lg' mb='4'>
              Therapy Method
            </Heading>
            <RenderMarkdownToHTML
              markdownText={therapyIngredients?.therapyMethod ? therapyIngredients?.therapyMethod : ""}
            />
          </Box>
          <Box mt='5'>
            <Heading as='h4' size='lg' mb='4'>
              Key Therapeautic Principles
            </Heading>
            <RenderMarkdownToHTML
              markdownText={
                therapyIngredients?.keyTherapeuticPrincipals ? therapyIngredients?.keyTherapeuticPrincipals : ""
              }
            />
          </Box>
          <Box mt='5'>
            <Heading as='h4' size='lg'>
              Therapy Mode
            </Heading>
            <Box mt='5'>
              <b>Setting:</b>
              <RenderMarkdownToHTML
                markdownText={therapyIngredients?.therapyMode?.setting ? therapyIngredients?.therapyMode.setting : ""}
              />
            </Box>
            <Box mt='5'>
              <b>Dose And Schedule:</b>
              <RenderMarkdownToHTML
                markdownText={
                  therapyIngredients?.therapyMode?.doseAndSchedule
                    ? therapyIngredients?.therapyMode.doseAndSchedule
                    : ""
                }
              />
            </Box>
            <Box mt='5'>
              <b>Delivery:</b>
              <RenderMarkdownToHTML
                markdownText={therapyIngredients?.therapyMode?.delivery ? therapyIngredients?.therapyMode.delivery : ""}
              />
            </Box>
          </Box>
        </>
      )
    },
    {
      accordianTitle: "Mechanism of Action",
      accordianChildNode: (
        <>
          {mechainismOfAction?.theoreticalUnderPinnings && (
            <Box>
              <Heading as='h4' size='lg' mb='4'>
                Theoritical Underpinnings:
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
                Supporting Empirical Evidence:
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
      accordianTitle: "Therapy Resources",
      accordianChildNode: (
        <>
          <Box>
            <Heading as='h4' size='lg' mb='4'>
              Literature:
            </Heading>{" "}
            <RenderMarkdownToHTML markdownText={therapyResources?.literature ? therapyResources?.literature : ""} />
          </Box>
          {therapyResources?.videoFile?.url && (
            <Box>
              <Heading as='h4' size='lg' mb='4'>
                Video:
              </Heading>{" "}
              <ReactPlayer url={therapyResources?.videoFile?.url} controls={true} />
            </Box>
          )}
        </>
      )
    },
    {
      accordianTitle: "Keywords",
      accordianChildNode: (
        <>
          <Box>
            <RenderMarkdownToHTML markdownText={keywords ? keywords : ""} />
          </Box>
        </>
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
            <Badge key={index} variant='subtle' fontSize={"1.0em"} colorScheme={"messenger"} mr='4'>
              {name}
            </Badge>
          );
        })}
      </GridItem>
      <GridItem colSpan={12}>
        <Heading as='h4' size='md'>
          Similar or related therapies:{" "}
        </Heading>
        {relatedTherapies
          ? relatedTherapies.split("\n").map((name, index) => {
              return (
                <Link href={"/index"} key={index}>
                  {name}
                </Link>
              );
            })
          : "N/A"}
      </GridItem>
      <GridItem colSpan={12}>
        <AccordianComponent currentKey={0} accordianItems={accordianItems} />
      </GridItem>
    </SimpleGrid>
  );
};

export default TherapyInfo;
