import { render, screen } from "@testing-library/react";
import LoginComponent from "./Login";
describe("Hello world", () => {
  beforeEach(() => {
    render(<p>Hello World</p>);
  });

  test("Prints hello world", () => {
    expect(screen.queryByText("Hello World")).toBeInTheDocument();
  });
});
