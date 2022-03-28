import { gql } from "@apollo/client";

const authenticateUser = (email, password) => {
  const loginQuery = gql`
    mutation {
        login(input: { identifier: "${email}", password: "${password}" }) {
          jwt
        }
      }
    `;
  return loginQuery;
};

const getTherapyDetailsById = (id) => {
  const therapyQuery = gql`
  query {
    therapyProfile(id: ${id}){
        created_at
        updated_at
        therapyname
        summaryStatement
        relatedTherapies
        levelOfEvidence{
            evidenceStatement
            additionalText
        }
        therapyTargets{
            icfDomains
            therapeuticTargets
            clientSelection{
                aphasiaText
                aphasiaSeverity
                aphasiaAetiology
                timeSinceOnsetOfAphasia
            }
        }
        therapyIngredients{
            therapyProtocol
            keyTherapeuticPrincipals
            therapyMode{
                setting
                groupSize
                doseAndSchedule
                teleHealth
            }
            therapyMethod
            resources
        }
        mechainismOfAction{
            theoreticalUnderPinnings
            supportingEmpiricalEvidence
        }
        therapyResources{
            videoFile{
            name
            alternativeText
            previewUrl
            url
            caption
            }
            literature
            other
        }
        alternativeNames
        published_at
    }
  }
`;
  return therapyQuery;
};

//TODO: Add search query
const getTherapySearch = (text, { ...params }) => {
  const therapySearch = gql`
    query {
      therapyProfiles(filters: {therapy: {contains: ${text}}}){
        id
        summaryStatement
        levelOfEvidence
        therapyname
        therapyResources{
            videoFile{
            name
            alternativeText
            previewUrl
            url
            caption
            }
            literature
            other
        }
      }
    }
  `;
};

export { authenticateUser, getTherapyDetailsById };
