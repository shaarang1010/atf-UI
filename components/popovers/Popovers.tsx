import React from "react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  Box,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
  IconButton
} from "@chakra-ui/react";
import { InfoOutlineIcon } from "@chakra-ui/icons";

type PopoverProps = {
  header: string;
  content: React.ReactNode;
  size: "xs" | "sm" | "md";
};
const PopOverComponent: React.FC<PopoverProps> = ({ header, content, size }) => {
  return (
    <Popover placement='top-start'>
      <PopoverTrigger>
        <IconButton aria-label='info' size={size} icon={<InfoOutlineIcon />}></IconButton>
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
