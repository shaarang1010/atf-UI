import React, { useState } from "react";
import { Container, Grid, GridItem, Box, CheckboxGroup, Checkbox, Stack, SimpleGrid } from "@chakra-ui/react";
import SearchProfile from "../components/forms/searchProfile/searchProfile";

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
          <h1>Text</h1>
        </Box>
      </SimpleGrid>
    </Container>
  );
};

export default TherapySearch;
