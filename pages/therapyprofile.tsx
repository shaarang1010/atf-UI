import React, { useContext } from "react";
import type { NextPage, GetServerSideProps } from "next";
import TherapyInfo from "../components/therapyinfo/TherapyInfo";
import { TherapyInfoProps } from "../components/therapyinfo/TherapyProps";
import RenderMarkdownToHTML from "../components/markdown/RenderMarkdown";
import { getTherapyDetailsById } from "../util/graphql-queries";
import client from "../util/apollo-client";
import { Box, Flex } from "@chakra-ui/react";
import { Container, Grid } from "@mantine/core";
import { useQuery } from "@apollo/client";
import UserContext from "../context/UserContext";
import { Accordion } from "@mantine/core";

const TherapyProfile: NextPage = ({ data }: any) => {
  //const { isAuthenticated } = useContext(UserContext);
  const isAuthenticated = true;

  return (
    <Container fluid>
      {isAuthenticated && (
        <Grid>
          <Grid.Col sm={12} md={12}>
            <TherapyInfo
              therapyName={data.therapyname}
              alternativeNames={data.alternativeNames}
              relatedTherapies={data.relatedTherapies}
              summaryStatement={data.summaryStatement}
              levelOfEvidence={data.levelOfEvidence}
              therapyTargets={data.therapyTargets}
              therapyIngredients={data.therapyIngredients}
              therapyResources={data.therapyResources}
            />
          </Grid.Col>
        </Grid>
      )}
    </Container>
  );
};

export async function getServerSideProps() {
  const { data } = await client.query({ query: getTherapyDetailsById(1) });
  console.log(data);
  return {
    props: {
      data: data.therapyProfile
    }
  };
}

export default TherapyProfile;
