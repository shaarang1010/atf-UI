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
// import SearchProfile from "../components/forms/searchProfile/SearchProfile";
import Speaking from "../assets/speaking.svg";
import Writing from "../assets/writing.svg";
import TherapyCard from "../components/card/TherapyCard";

import dropdownlist from "../assets/lists.json";
import { FilterOptionProps } from "../models/ComponentModel";
import FilterGroup from "../components/select/SelectFilter";

const TherapySearch = () => {
  const [searchText, setSearchText] = useState("");
  const [hasSearchResults, setHasSearchResults] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
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

  const filterHandler = (arr: FilterOptionProps[]) => {
    const filters = arr.map((item) => {
      return item.value;
    });
    console.log(filters);
  };

  const filters = [
    <FilterGroup
      id='levelSelect'
      name='Level of Evidence'
      isSearchable={true}
      filterOptions={dropdownlist.levels}
      isClearable={true}
      handleChangeListener={(e) => filterHandler(e)}
    />,
    <FilterGroup
      id='icfDomains'
      name='ICF Domains'
      isSearchable={true}
      filterOptions={dropdownlist.icfDomains}
      isClearable={true}
      handleChangeListener={(e) => filterHandler(e)}
    />,
    <FilterGroup
      id='aphasiaType'
      name='Aphasia type'
      isSearchable={true}
      filterOptions={dropdownlist.aphasiaType}
      isClearable={true}
      handleChangeListener={(e) => filterHandler(e)}
    />,
    <FilterGroup
      id='aphasiaSeverity'
      name='Aphasia Severity'
      isSearchable={true}
      filterOptions={dropdownlist.aphasiaSeverity}
      isClearable={true}
      handleChangeListener={(e) => filterHandler(e)}
    />
  ];

  const additionalFilter = [
    <FilterGroup
      id='aphasiaAetiology'
      name='Aphasia Aetiology'
      isSearchable={true}
      filterOptions={dropdownlist.aphasiaAetiology}
      isClearable={true}
      handleChangeListener={(e) => filterHandler(e)}
    />,
    <FilterGroup
      id='aphasiaSeverity'
      name='Aphasia Severity'
      isSearchable={true}
      filterOptions={dropdownlist.aphasiaSeverity}
      isClearable={true}
      handleChangeListener={(e) => filterHandler(e)}
    />,
    <FilterGroup
      id='setting'
      name='Settings'
      isSearchable={true}
      filterOptions={dropdownlist.setting}
      isClearable={true}
      handleChangeListener={(e) => filterHandler(e)}
    />,
    <FilterGroup
      id='delivery'
      name='Delivery'
      isSearchable={true}
      filterOptions={dropdownlist.delivery}
      isClearable={true}
      handleChangeListener={(e) => filterHandler(e)}
    />
  ];

  return (
    <Container maxW={"container.xl"}>
      <SimpleGrid columns={{ sm: 2, md: 2 }} gap={5}>
        <Box maxW={"lg"} mt='20'>
          {/* <SearchProfile
            searchText={searchText}
            tabNames={dropdownlist.tabs}
            onTextChangeHandler={onChangeHandler}
            filters={filters}
            hiddenTabs={dropdownlist.additionalTabs}
            hiddenFilters={additionalFilter}
            onSearch={onTherapySearch}
          /> */}
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
