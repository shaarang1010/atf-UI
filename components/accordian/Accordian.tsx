import React from "react";
import { Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Box } from "@chakra-ui/react";

interface AccordianPanelProps {
  accordianTitle?: string;
  accordianChildNode: React.ReactNode;
}

interface AccordianItemProps {
  title: string;
  currentKey: number;
  accordianItems: AccordianPanelProps[];
}

const AccordianComponent: React.FC<AccordianItemProps> = ({ title, currentKey, accordianItems }) => {
  return (
    <Accordion defaultIndex={[currentKey]}>
      {accordianItems.map((item, index) => {
        <AccordionItem key={index}>
          <h2>
            <AccordionButton>
              <Box flex='1' textAlign='left'>
                {item.accordianTitle}
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>{item.accordianChildNode}</AccordionPanel>
        </AccordionItem>;
      })}
    </Accordion>
  );
};

export default AccordianComponent;
