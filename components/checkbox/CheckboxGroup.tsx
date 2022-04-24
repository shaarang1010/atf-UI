import { Checkbox, Stack } from "@chakra-ui/react";

interface ChildOptions {
  label: string;
  name: string;
}

interface CheckboxGroupProps {
  checkedItems: boolean[];
  setCheckedItems([]): void;
  parentName: string;
  allChecked: boolean;
  isIndeterminate: boolean;
  selectedFilters: string[];
  childOptions: ChildOptions[];
}

const toggleSelectedItems = (optionValue: boolean, arr: string[], option: string) => {
  if (optionValue) {
    arr.push(option);
  } else {
    let index = arr.indexOf(option);
    if (index === -1) {
      return;
    } else {
      arr.splice(index, 1);
    }
  }
};

const CheckboxComponent: React.FC<CheckboxGroupProps> = ({
  checkedItems,
  setCheckedItems,
  parentName,
  allChecked,
  isIndeterminate,
  selectedFilters,
  childOptions
}) => {
  return (
    <>
      <Checkbox
        isChecked={allChecked}
        isIndeterminate={isIndeterminate}
        onChange={(e) => setCheckedItems([e.target.checked, e.target.checked])}
      >
        {parentName}
      </Checkbox>
      <Stack pl={6} mt={1} spacing={1}>
        {childOptions.map((option, index) => {
          return (
            <Checkbox
              isChecked={checkedItems[index]}
              onChange={(e) => {
                console.log(index);
                //toggleSelectedItems(e.target.checked, selectedFilters, option.label);
                setCheckedItems([e.target.checked, checkedItems[index]]);
              }}
            >
              {option.name}
            </Checkbox>
          );
        })}
      </Stack>
    </>
  );
};

export default CheckboxComponent;
