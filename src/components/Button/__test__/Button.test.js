import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Button from "../Button";

it("should render the same thing in the children", async () => {
  render(<Button>Button</Button>);
  const textInButton = screen.getByText(/button/i);
  expect(textInButton).toBeInTheDocument();
});

it("should render button", async () => {
  render(<Button>Button</Button>);
  const buttonEl = screen.getByRole("button");
  expect(buttonEl).toBeInTheDocument();
});
