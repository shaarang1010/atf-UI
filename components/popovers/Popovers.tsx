import React from "react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
  IconButton
} from "@chakra-ui/react";
import { InfoOutlineIcon } from "@chakra-ui/icons";

type PopoverProps = {
  header: string;
  content: React.ReactNode;
};
const PopOverComponent: React.FC<PopoverProps> = ({ header, content }) => {
  return (
    <Popover placement='top-start'>
      <PopoverTrigger>
        <IconButton aria-label='info' icon={<InfoOutlineIcon />}></IconButton>
      </PopoverTrigger>
      <PopoverContent>
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverHeader>{header}</PopoverHeader>
        <PopoverBody>{content}</PopoverBody>
      </PopoverContent>
    </Popover>
  );
};

export default PopOverComponent;
