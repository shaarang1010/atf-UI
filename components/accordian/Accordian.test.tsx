import React from "react";
import { render, screen, within } from '@testing-library/react';

import  Accordian from "./Accordian";
import RenderMarkdownToHTML from "../markdown/RenderMarkdown";
import { Heading, Box } from "@chakra-ui/react";

describe("renders accordion", () => {
    const currentKey = 0;
    const accordianItems = [
        {
          accordianTitle: "Summary Statement",
          accordianChildNode: <RenderMarkdownToHTML markdownText="Markdown Testing summary" />
        },
        {
          accordianTitle: "Level of Evidence",
          accordianChildNode: (
            <Box>
              <Heading as='h4' size='md' mb='4'>
                {" "}
                Evidence Statement
              </Heading>
              <RenderMarkdownToHTML
                markdownText="Testing Accordion"
              />
              <RenderMarkdownToHTML markdownText="Testing Evidence Statement" />
            </Box>
          )
        },
        {
            accordianTitle: "Summary Statement no 2",
            accordianChildNode: <RenderMarkdownToHTML markdownText="Markdown Testing summary no 2" />
          }
    ]

    beforeEach(() => {
        render(<Accordian currentKey={currentKey} accordianItems={accordianItems}/>);
    })

    test("Prints Accordion Title", () => {
        expect(screen.queryByText("Summary Statement")).toBeInTheDocument();
    })

    test("Show content of first item in the accordion", () => {
        expect(screen.queryByText("Markdown Testing summary")).toBeInTheDocument();
    })

    // test("Content of second item in the accordion should not show", () => {
    //   const buttonAccordion = within(screen.getByText("Evidence Statement"));
    //     expect(buttonAccordion).toHaveAttribute('aria-expanded','false');
    // })

    // test("Content doesn't exist", () => {
    //     expect(screen.queryByText("Markdown Testing summary no 3")).not.toBeInTheDocument();
    // })
    
})