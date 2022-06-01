import React, { useContext, useState } from "react";
import { Container, Skeleton, Text, Box, Stack, SimpleGrid } from "@chakra-ui/react";
import SearchProfile from "../components/forms/SearchProfile";
import TherapyCard from "../components/card/TherapyCard";
import uniqBy from "lodash/uniqBy";
import dropdownlist from "../assets/lists.json";
import { FilterOptionProps, SelectedFilters } from "../models/ComponentModel";
import FilterGroup from "../components/select/SelectFilter";
import client from "../util/apollo-client";
import { getTherapiesForDashboard } from "../util/graphql-queries";
import UserContext from "../context/UserContext";
import { TherapyInfoProps } from "../components/therapyinfo/TherapyProps";
import { NotAuthenticated } from "../components/error-message/NotAuthenticated";

const TherapySearch = ({ data }: any) => {
  const { therapyProfiles } = data;
  const [searchText, setSearchText] = useState("");
  const [hasSearchResults, setHasSearchResults] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedFilter, setSelectedFilters] = useState<SelectedFilters[]>([]);
  const { isAuthenticated } = useContext(UserContext);

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

  const filterHandler = (item: string, arr: FilterOptionProps[]) => {
    setSelectedFilters([...selectedFilter, { filterName: item, filterValues: arr.map((i) => i.value) }]);
    console.log(uniqBy(selectedFilter.reverse(), "filterName"));
  };

  const filters = [
    <FilterGroup
      id='levelSelect'
      name='Level of Evidence'
      isSearchable={true}
      filterOptions={dropdownlist.levels}
      isClearable={true}
      handleChangeListener={(e) => filterHandler("levelOfEvidence", e)}
    />,
    <FilterGroup
      id='icfDomains'
      name='ICF Domains'
      isSearchable={true}
      filterOptions={dropdownlist.icfDomains}
      isClearable={true}
      handleChangeListener={(e) => filterHandler("icfDomains", e)}
    />,
    <FilterGroup
      id='aphasiaType'
      name='Aphasia type'
      isSearchable={true}
      filterOptions={dropdownlist.aphasiaType}
      isClearable={true}
      handleChangeListener={(e) => filterHandler("aphasiaType", e)}
    />,
    <FilterGroup
      id='aphasiaSeverity'
      name='Aphasia Severity'
      isSearchable={true}
      filterOptions={dropdownlist.aphasiaSeverity}
      isClearable={true}
      handleChangeListener={(e) => filterHandler("aphasiaSeverity", e)}
    />
  ];

  const additionalFilter = [
    <FilterGroup
      id='aphasiaAetiology'
      name='Aphasia Aetiology'
      isSearchable={true}
      filterOptions={dropdownlist.aphasiaAetiology}
      isClearable={true}
      handleChangeListener={(e) => filterHandler("aphasiaAetiology", e)}
    />,
    <FilterGroup
      id='timeSinceOnset'
      name='Time Since Onset'
      isSearchable={true}
      filterOptions={dropdownlist.timeSinceOnset}
      isClearable={true}
      handleChangeListener={(e) => filterHandler("timeSinceOnset", e)}
    />,
    <FilterGroup
      id='setting'
      name='Settings'
      isSearchable={true}
      filterOptions={dropdownlist.setting}
      isClearable={true}
      handleChangeListener={(e) => filterHandler("settings", e)}
    />,
    <FilterGroup
      id='delivery'
      name='Delivery'
      isSearchable={true}
      filterOptions={dropdownlist.delivery}
      isClearable={true}
      handleChangeListener={(e) => filterHandler("delivery", e)}
    />
  ];

  return (
    <Container maxW={"container.xl"}>
      {isAuthenticated ? (
        <SimpleGrid columns={{ sm: 2, md: 2 }} gap={5}>
          <Box maxW={"lg"} mt='20'>
            <SearchProfile
              searchText={searchText}
              tabNames={dropdownlist.tabs}
              onTextChangeHandler={onChangeHandler}
              filters={filters}
              hiddenTabs={dropdownlist.additionalTabs}
              hiddenFilters={additionalFilter}
              onSearch={onTherapySearch}
            />
          </Box>
          <Box maxW={"lg"} mt='20'>
            {hasSearchResults && therapyProfiles ? (
              therapyProfiles.map((therapyProfile: TherapyInfoProps) => {
                return (
                  <TherapyCard
                    id={1}
                    cardTitle={therapyProfile.therapyname ? therapyProfile.therapyname : ""}
                    summaryStatement={therapyProfile.summaryStatement ? therapyProfile.summaryStatement : ""}
                    levelOfEvidence={
                      therapyProfile.levelOfEvidence?.evidenceDropdown
                        ? therapyProfile.levelOfEvidence.evidenceDropdown
                        : ""
                    }
                  />
                );
              })
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
      ) : (
        <NotAuthenticated />
      )}
    </Container>
  );
};

export async function getStaticProps() {
  const { data } = await client.query({ query: getTherapiesForDashboard() });
  return {
    props: {
      data: data
    },
    revalidate: 5
  };
}

export default TherapySearch;
