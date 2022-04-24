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
           evidenceDropdown
          evidenceStatement
          additionalText
          evidenceLink
        }
    		therapyTargets{
          icfDomains
          therapeuticTargets
          clientSelection{
          	aphasiaText
            aphasiaSeverity
            aphasiaAetiology
            aphasiaTypeList
            aphasiaSeverityList
            aphasiaAetiologyList
            clientSelection
            timeSinceOnset
          }
        }
    	therapyIngredients{
        therapyProtocol
        keyTherapeuticPrincipals
      	therapyMode{
        	setting
          doseAndSchedule
          delivery
          deliveryText
      	}
        therapyMethod
        resources
        frequentClinicalQuestions
      }
    	mechainismOfAction{
        theoreticalUnderPinnings
        supportingEmpiricalEvidence
      }
    therapyResources{
      videoFile{
        name
        url
      }
      literature
      other
    }
    alternativeNames
    keywords
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
      therapyProfiles(where: {therapyname_contains: ${text}}){
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

export { authenticateUser, getTherapyDetailsById, getTherapySearch };
