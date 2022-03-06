import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Heading
} from "@chakra-ui/react";

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
    <Accordion defaultIndex={[currentKey]} allowToggle allowMultiple>
      {accordianItems.map((item, index) => {
        return (
          <AccordionItem key={index}>
            <h2>
              <AccordionButton _expanded={{ bg: "darkBlue", color: "white" }}>
                <Box flex='1' textAlign='left'>
                  <Heading as='h5' size='md'>
                    {item.accordianTitle}
                  </Heading>
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>{item.accordianChildNode}</AccordionPanel>
          </AccordionItem>
        );
      })}
    </Accordion>
  );
};

export default AccordianComponent;
