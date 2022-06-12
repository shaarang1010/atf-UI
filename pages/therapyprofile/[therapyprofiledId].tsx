import React, { useContext } from "react";
import { NextPage, GetStaticProps, GetStaticPaths } from "next";
import TherapyInfo from "../../components/therapyinfo/TherapyInfo";
import { TherapyInfoProps } from "../../components/therapyinfo/TherapyProps";
import RenderMarkdownToHTML from "../../components/markdown/RenderMarkdown";
import { getAllTherapiesProfileIds, getTherapyDetailsById } from "../../util/graphql-queries";
import client from "../../util/apollo-client";
import { Container, Box, Flex } from "@chakra-ui/react";
import UserContext from "../../context/UserContext";
import { NotAuthenticated } from "../../components/error-message/NotAuthenticated";
import { TherapyProfileSearch } from "../../models/ComponentModel";

const TherapyProfile: NextPage = ({ data }: any) => {
  const { isAuthenticated } = useContext(UserContext);
  // const isAuthenticated = true;
  console.log(data);
  return (
    <Container maxW={"container.lg"}>
      {isAuthenticated ? (
        <Box w='98%' mt='20'>
          <TherapyInfo
            id={data.id}
            therapyname={data.therapyname}
            alternativeNames={data.alternativeNames}
            relatedTherapies={data.relatedTherapies}
            summaryStatement={data.summaryStatement}
            levelOfEvidence={data.levelOfEvidence}
            therapyTargets={data.therapyTargets}
            therapyIngredients={data.therapyIngredients}
            therapyResources={data.therapyResources}
            mechainismOfAction={data.mechainismOfAction}
            keywords={data.keywords}
          />
        </Box>
      ) : (
        <NotAuthenticated />
      )}
    </Container>
  );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { data } = await client.query({ query: getTherapyDetailsById(params && params.therapyprofiledId) });
  return {
    props: {
      data: data.therapyProfile
    },
    revalidate: 1
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await client.query({ query: getAllTherapiesProfileIds() });
  return {
    paths: data.therapyProfiles.map((therapy: TherapyProfileSearch) => {
      return {
        params: {
          therapyprofiledId: therapy.id.toString()
        }
      };
    }),
    fallback: false
  };
};

export default TherapyProfile;
