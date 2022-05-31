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
  // const { isAuthenticated } = useContext(UserContext);
  const isAuthenticated = true;

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

// export async function getStaticPaths() {
//   return {
//     fallback: false,
//     paths: [
//       {
//         params: {
//           therapyProfile: 1
//         }
//       },
//       {
//         params: {
//           therapyProfile: 2
//         }
//       },
//       {
//         params: {
//           therapyProfile: 3
//         }
//       },
//       {
//         params: {
//           therapyProfile: 4
//         }
//       }
//     ]
//   };
// }

export async function getStaticProps(context: any) {
  // const therapyProfileId = context.params.therapyProfile;
  // console.log("IN context ////// ");
  // console.log(context.params);
  const { data } = await client.query({ query: getTherapyDetailsById(2) });
  return {
    props: {
      data: data.therapyProfile
    },
    revalidate: 1
  };
}

export default TherapyProfile;
