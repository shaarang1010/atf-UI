import {
  Box,
  Grid,
  GridItem,
  Button,
  FormControl,
  Heading,
  FormLabel,
  Input,
  Text,
  Switch,
  Link,
  Icon
} from "@chakra-ui/react";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import React, { useState } from "react";
import { useRouter } from "next/router";
import { BsFilter, BsSearch } from "react-icons/bs";
import TabGroupList from "../tabs/TabListGroup";

interface SearchProfileProps {
  searchText: string;
  filters: React.ReactNode[];
  tabNames: string[];
  hiddenTabs: string[];
  hiddenFilters: React.ReactNode[];
  onTextChangeHandler(e: React.ChangeEvent<HTMLInputElement>): void;
  onSearch(): void;
}

const SearchProfile: React.FC<SearchProfileProps> = ({
  searchText,
  tabNames,
  hiddenTabs,
  hiddenFilters,
  filters,
  onTextChangeHandler,
  onSearch
}) => {
  const [expandOptions, setExpandOptions] = useState(false);
  return (
    <Grid templateColumns={"repeat(5,1fr)"} gap={5}>
      <GridItem colSpan={6}>
        <FormControl>
          <FormLabel htmlFor='search'>Search Query</FormLabel>
          <Input id='search' type='text' placeholder='Search Text ...' size='md' onChange={onTextChangeHandler} />
        </FormControl>
      </GridItem>
      <GridItem colSpan={6}>
        <Heading as='h3' size='md'>
          Filter
          <Icon as={BsFilter} ml='1' pt='1' />
        </Heading>
      </GridItem>

      <GridItem colSpan={6}>
        <TabGroupList tabGroupNames={tabNames} tabPanels={filters} />
      </GridItem>
      {expandOptions ? (
        <GridItem colSpan={6}>
          <TabGroupList tabGroupNames={hiddenTabs} tabPanels={hiddenFilters} />
        </GridItem>
      ) : null}
      <GridItem colSpan={4}>
        <FormControl display='flex' alignItems='center'>
          <FormLabel htmlFor='form-filters' mb='0'>
            {`${expandOptions ? "Hide" : "Show"} more filters`}
          </FormLabel>
          <Switch id='form-filters' onChange={() => setExpandOptions(!expandOptions)} />
        </FormControl>
      </GridItem>

      <GridItem colSpan={6}>
        <Button onClick={onSearch} colorScheme='blue' isFullWidth={true}>
          Search
          <Icon as={BsSearch} ml='5' />
        </Button>
      </GridItem>
    </Grid>
  );
};

export default SearchProfile;
