import React, { useContext } from "react";
import type { NextPage, GetServerSideProps } from "next";
import TherapyInfo from "../components/therapyinfo/TherapyInfo";
import { TherapyInfoProps } from "../components/therapyinfo/TherapyProps";
import RenderMarkdownToHTML from "../components/markdown/RenderMarkdown";
import { getTherapyDetailsById } from "../util/graphql-queries";
import client from "../util/apollo-client";
import { Container, Box, Flex } from "@chakra-ui/react";
import { Context, useQuery } from "@apollo/client";
import UserContext from "../context/UserContext";
import { NotAuthenticated } from "../components/error-message/NotAuthenticated";

const TherapyProfile: NextPage = ({ data }: any) => {
  const { isAuthenticated } = useContext(UserContext);
  // const isAuthenticated = true;

  return (
    <Container maxW={"container.lg"}>
      {isAuthenticated ? (
        <Flex>
          <Box w='100%' mt='20'>
            <TherapyInfo
              therapyname={data.therapyname}
              alternativeNames={data.alternativeNames}
              relatedTherapies={data.relatedTherapies}
              summaryStatement={data.summaryStatement}
              levelOfEvidence={data.levelOfEvidence}
              therapyTargets={data.therapyTargets}
              therapyIngredients={data.therapyIngredients}
              therapyResources={data.therapyResources}
            />
          </Box>
        </Flex>
      ) : (
        <NotAuthenticated />
      )}
    </Container>
  );
};

export async function getStaticProps() {
  const { data } = await client.query({ query: getTherapyDetailsById(1) });
  return {
    props: {
      data: data.therapyProfile
    }
  };
}

export default TherapyProfile;
