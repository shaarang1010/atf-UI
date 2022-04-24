import React from "react";
import Select from "react-select";

interface FilterOptionProps {
  label: string;
  value: string;
}
interface FilterGroupProps {
  filterOptions: FilterOptionProps[];
  name: string;
  isClearable: boolean;
  isSearchable: boolean;
  id: string;
  handleChangeListener(e: any): void; //TODO: find appropriate Select onChange type
}
const FilterGroup: React.FC<FilterGroupProps> = ({ filterOptions, name, isClearable, id, handleChangeListener }) => {
  return (
    <Select
      onChange={handleChangeListener}
      name={name}
      isClearable={isClearable}
      isSearchable={true}
      id={id}
      options={filterOptions}
    />
  );
};

export default FilterGroup;
