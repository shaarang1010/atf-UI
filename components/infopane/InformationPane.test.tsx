import React from "react";
import { render, screen } from "@testing-library/react";

import InformationPane from "./InformationPane";

describe("renders information Pane", () => {

  beforeEach(() => {
    render(<InformationPane backgroundColor='#C4C4C4' informationText='TEST123' informationHeading='TEST HEADING' />);
  });

  test("Shows Heading Props", () => {
    expect(screen.queryByText("TEST HEADING")).toBeInTheDocument();
  });

  test("Shows Information Text Props", () => {
    expect(screen.queryByText("TEST123")).toBeInTheDocument();
  });

  test("Background colour shows as bgColour props", () => {
    expect(screen.getByTestId('infoPane')).toHaveStyle('background:#C4C4C4');
  });

});
