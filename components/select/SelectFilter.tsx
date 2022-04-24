import React from "react";
import Select from "react-select";
import { FormLabel } from "@chakra-ui/react";
import { FilterOptionProps } from "../../models/ComponentModel";

interface FilterGroupProps {
  filterOptions: FilterOptionProps[];
  name: string;
  isClearable: boolean;
  isSearchable: boolean;
  id: string;
  isMulti?: boolean;
  handleChangeListener(e: any): void; //TODO: find appropriate Select onChange type
}
const FilterGroup: React.FC<FilterGroupProps> = ({
  filterOptions,
  name,
  isMulti = true,
  isClearable,
  id,
  handleChangeListener
}) => {
  return (
    <>
      <Select
        onChange={handleChangeListener}
        name={name}
        isClearable={isClearable}
        isMulti={isMulti}
        isSearchable={true}
        id={id}
        options={filterOptions}
      />
    </>
  );
};

export default FilterGroup;
