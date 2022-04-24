import React, { useEffect, useState } from "react";
import {
  Container,
  Skeleton,
  Text,
  Box,
  CheckboxGroup,
  Checkbox,
  Stack,
  SimpleGrid,
  Image,
  HStack
} from "@chakra-ui/react";
import SearchProfile from "../components/forms/searchProfile/SearchProfile";
import Speaking from "../assets/speaking.svg";
import Writing from "../assets/writing.svg";
import TherapyCard from "../components/card/TherapyCard";

import dropdownlist from "../assets/lists.json";
import CheckboxComponent from "../components/checkbox/CheckboxGroup";

const filterValues = [
  {
    parentName: "Level of Evidence",
    childOptions: ["Level I", "Level II", "Level III-1", "Level III-2", "Level III-3", "Level IV"]
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
  const [hasSearchResults, setHasSearchResults] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [levelCheckedItems, setLevelCheckedItems] = React.useState([false, false]);
  const allChecked = levelCheckedItems.every(Boolean);
  const isIndeterminate = levelCheckedItems.some(Boolean) && !allChecked;
  const selectedFilters: string[] = [];

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  const showSkeleton = () => {
    setIsLoading(false);
    setTimeout(() => {
      setHasSearchResults(true);
    }, 3000);
  };

  const onTherapySearch = () => {
    showSkeleton();
  };

  const levelFilters = (
    // <CheckboxGroup colorScheme='blue' defaultValue={[]}>
    //   <Stack spacing={[1, 5]} direction={["row", "column"]}>
    //     {filterValues.map((option, index) => {
    //       return (
    //         <Checkbox value={option.value} key={index}>
    //           {option.name}
    //         </Checkbox>
    //       );
    //     })}
    //   </Stack>
    // </CheckboxGroup>
    <CheckboxComponent
      checkedItems={levelCheckedItems}
      allChecked={allChecked}
      isIndeterminate={isIndeterminate}
      setCheckedItems={setLevelCheckedItems}
      parentName={"Level of Evidence"}
      childOptions={dropdownlist.levels}
      selectedFilters={selectedFilters}
    />
  );

  return (
    <Container maxW={"container.xl"}>
      <SimpleGrid columns={{ sm: 2, md: 2 }} gap={5}>
        <Box maxW={"lg"} mt='20'>
          <SearchProfile
            searchText={searchText}
            onTextChangeHandler={onChangeHandler}
            filters={levelFilters}
            onSearch={onTherapySearch}
          />
        </Box>
        <Box maxW={"lg"} mt='20'>
          {hasSearchResults ? (
            <TherapyCard
              cardTitle='test_CIAT'
              summaryStatement='Constraint-Induced Aphasia Therapy (CIAT, also known as Intensive Language Action Therapy) provides structured and repeated practice using everyday speech acts (e.g., making and responding to requests for information) while playing language games with cards depicting objects or actions.'
              therapyTargets={
                <HStack>
                  <Image src={Speaking.src} alt='Speaking' />
                  <Image src={Writing.src} alt='Writing' />
                </HStack>
              }
              levelOfEvidence='Effectiveness: The following refers only to evidence from randomized-controlled trial (RCT) studies 
              A number of RCTs have investigated the effectiveness of CIAT/ILAT in post-stroke aphasia. Different outcome measures have been used to assess treatment effectiveness ranging from standardised impairment-focussed aphasia batteries ('
              videoSource='abcd'
            />
          ) : !isLoading ? (
            <Stack>
              {Array(5)
                .fill(0)
                .map((val, index) => (
                  <Skeleton height='20px' key={index} />
                ))}
            </Stack>
          ) : (
            <Text size='lg' color='gray' mt='10'>
              No Search Results ....{" "}
            </Text>
          )}
        </Box>
      </SimpleGrid>
    </Container>
  );
};

export default TherapySearch;
