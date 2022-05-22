import React from "react";
// import {
//   Accordion,
//   AccordionItem,
//   AccordionButton,
//   AccordionPanel,
//   AccordionIcon,
//   Box,
//   Heading
// } from "@chakra-ui/react";
import { Accordion } from "@mantine/core";

interface AccordianPanelProps {
  accordianTitle?: string;
  accordianChildNode: React.ReactNode;
}

interface AccordianItemProps {
  currentKey: number;
  accordianItems: AccordianPanelProps[];
}

const AccordianComponent: React.FC<AccordianItemProps> = ({ currentKey, accordianItems }) => {
  return (
    <Accordion initialItem={currentKey} iconPosition='right'>
      {accordianItems.map((item, index) => {
        return (
          <Accordion.Item key={index} label={item.accordianTitle} styles={{ itemOpened: { color: "darkBlue" } }}>
            {item.accordianChildNode}
          </Accordion.Item>
        );
      })}
    </Accordion>
  );
};

export default AccordianComponent;
