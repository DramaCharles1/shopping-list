import { render, screen } from "@testing-library/react";
import { ShoppingListVerticalNavBar } from "./ShoppingListVerticalNavBar";

test("Display nav bar with pages", () => {
  render(<ShoppingListVerticalNavBar />);

  expect(screen.getByText("Current shopping list")).toBeInTheDocument();
  expect(screen.getByText("Pantry")).toBeInTheDocument();
  expect(screen.getByText("Recipe")).toBeInTheDocument();
});
