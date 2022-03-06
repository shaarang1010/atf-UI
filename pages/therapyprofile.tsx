import React from "react";
import type { NextPage, GetServerSideProps } from "next";
import TherapyInfo from "../components/therapyinfo/TherapyInfo";
import { TherapyInfoProps } from "../components/therapyinfo/TherapyProps";
import RenderMarkdownToHTML from "../components/markdown/RenderMarkdown";
import { getTherapyDetailsById } from "../util/graphql-queries";
import client from "../util/apollo-client";
import { Container, Box, Flex } from "@chakra-ui/react";

const TherapyProfile: NextPage = ({ data }: any) => {
  const markdownText =
    "**Clinical Studies: Randomized Controlled Trials (RCTs)**\n\nPulvermüller F, Neininger B, Elbert T, Mohr B, Rockstroh B, Koebbel P. et al. Constraint-Induced therapy of chronic aphasia after stroke. Stroke 2001; 32:1621-1626.\n\nMeinzer M, Djundja D, Barthel G, Elbert T, Rockstroh B. Long-term stability of improved language functions in chronic aphasia after constraint-induced aphasia therapy. Stroke 2005; 36: 1462-6.\n\nBerthier ML, Green C, Lara JP, Higueras C, Barbancho MA, Davila G. et al. Memantine and constraint-induced aphasia therapy in chronic poststroke aphasia. Ann Neurol 2009; 65: 577-585.\n\nSickert, A., Anders, L.C., Münte, T.F., Sailer, M. 2014. Constraint-induced aphasia therapy following sub-acute stroke: a single-blind, randomised clinical trial of a modified therapy schedule. J Neurol Neurosurg Psychiatry, 85 (1), 51-55, 10.1136/jnnp-2012-304297";
  return (
    <Container maxW={"container.lg"}>
      <Flex>
        <Box w='100%' mt='20'>
          <TherapyInfo
            therapyName={data.therapyname}
            alternativeNames={data.alternativeNames}
            relatedTherapies={data.relatedTherapies}
            summaryStatement={data.summaryStatement}
            levelOfEvidence={data.levelOfEvidence}
            therapyTargets={data.therapyTargets}
          />
        </Box>
      </Flex>
    </Container>
  );
};

export async function getServerSideProps() {
  const { data } = await client.query({ query: getTherapyDetailsById(1) });
  return {
    props: {
      data: data.therapyProfile
    }
  };
}

export default TherapyProfile;
