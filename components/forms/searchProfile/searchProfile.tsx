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
  Link,
  Icon
} from "@chakra-ui/react";
import React from "react";
import { useRouter } from "next/router";
import { BsFilter, BsSearch } from "react-icons/bs";

interface SearchProfileProps {
  searchText: string;
  filters: React.ReactNode;
  onTextChangeHandler(e: React.ChangeEvent<HTMLInputElement>): void;
  onSearch(): void;
}

const SearchProfile: React.FC<SearchProfileProps> = ({ searchText, filters, onTextChangeHandler, onSearch }) => {
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
      <GridItem colSpan={6}></GridItem>

      <GridItem colSpan={6}>{filters}</GridItem>
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
