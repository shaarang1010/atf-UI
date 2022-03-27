import React, { useEffect, useState } from "react";
import { Container, Grid, GridItem, Box, CheckboxGroup, Checkbox, Stack, SimpleGrid, Image } from "@chakra-ui/react";
import SearchProfile from "../components/forms/searchProfile/SearchProfile";
import Speaking from "../assets/speaking.svg";
import Writing from "../assets/writing.svg";
import TherapyCard from "../components/card/TherapyCard";

const filterValues = [
  {
    name: "Therapy Resources",
    value: "therapyResources"
  },
  {
    name: "Therapy Targets",
    value: "therapyTargets"
  },
  {
    name: "Mechanism of Action",
    value: "mechanismOfAction"
  }
];

const TherapySearch = () => {
  const [searchText, setSearchText] = useState("");
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };

  const filters = (
    <CheckboxGroup colorScheme='blue' defaultValue={[]}>
      <Stack spacing={[1, 5]} direction={["row", "column"]}>
        {filterValues.map((option, index) => {
          return (
            <Checkbox value={option.value} key={index}>
              {option.name}
            </Checkbox>
          );
        })}
      </Stack>
    </CheckboxGroup>
  );

  useEffect(() => {
    console.log(Speaking);
  }, []);

  return (
    <Container maxW={"container.lg"}>
      <SimpleGrid columns={{ sm: 2, md: 2 }} gap={5}>
        <Box maxW={"lg"} mt='20'>
          <SearchProfile
            searchText={searchText}
            onTextChangeHandler={onChangeHandler}
            filters={filters}
            onSearch={() => console.log("Text")}
          />
        </Box>
        <Box maxW={"lg"} mt='20'>
          <TherapyCard
            cardTitle='Test Therapy'
            summaryStatement='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae nibh mauris. Proin at ante tortor. Donec lacus diam, convallis et laoreet ac, varius sed ante. Donec condimentum tempor aliquam. Vestibulum vitae efficitur velit, nec convallis nibh. Etiam nec ipsum nibh. Vestibulum ac blandit ligula, auctor molestie ipsum. Sed porttitor ullamcorper lacus nec imperdiet. Donec nisl urna, efficitur in felis non, mollis mollis erat. Nam ligula odio, aliquet varius lectus eget, faucibus lacinia erat. Nulla enim justo, placerat non mauris quis, pretium eleifend magna. Vivamus at velit mi. Curabitur tincidunt sed justo sit amet varius.
          # Nunc ullamcorper, leo a consectetur vestibulum,'
            therapyTargets={
              <>
                <Image src={Speaking.src} alt='Speaking' />
              </>
            }
            levelOfEvidence='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae nibh mauris. Proin at ante tortor. Donec lacus diam, convallis et laoreet ac, varius sed ante. Donec condimentum tempor aliquam. Vestibulum vitae efficitur velit, nec convallis nibh. Etiam nec ipsum nibh. Vestibulum ac blandit ligula, auctor molestie ipsum. Sed porttitor ullamcorper lacus nec imperdiet. Donec nisl urna, efficitur in felis non, mollis mollis erat. Nam ligula odio, aliquet varius lectus eget, faucibus lacinia erat. Nulla enim justo, placerat non mauris quis, pretium eleifend magna. Vivamus at velit mi. Curabitur tincidunt sed justo sit amet varius.
          # Nunc ullamcorper, leo a consectetur vestibulum,'
            videoSource='abcd'
          />
        </Box>
      </SimpleGrid>
    </Container>
  );
};

export default TherapySearch;
