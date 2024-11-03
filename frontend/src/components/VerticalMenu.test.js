import { render, screen } from "@testing-library/react";
import { VerticalMenu } from "./VerticalMenu";

test("Display nav bar with pages", () => {
  render(<VerticalMenu />);

  expect(screen.getByText("Current shopping list")).toBeInTheDocument();
  expect(screen.getByText("Pantry")).toBeInTheDocument();
  expect(screen.getByText("Recipe")).toBeInTheDocument();
});
