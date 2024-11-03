// App.test.js
import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import { ShoppingList } from "./pages/ShoppingList";
import { Pantry } from "./pages/Pantry";

// Mock the components if necessary, e.g. with minimal content
jest.mock("./pages/ShoppingList", () => ({
  ShoppingList: () => <div>Shopping List Page</div>,
}));

jest.mock("./pages/Pantry", () => ({
  Pantry: () => <div>Pantry Page</div>,
}));

describe("App Routing", () => {
  test("renders ShoppingList component when visiting /shopping-list", () => {
    render(
      <MemoryRouter initialEntries={["/shopping-list"]}>
        <Routes>
          <Route path="/*" element={<App />} />
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByText("Shopping List Page")).toBeInTheDocument();
  });

  test("renders Pantry component when visiting /pantry", () => {
    render(
      <MemoryRouter initialEntries={["/pantry"]}>
        <Routes>
          <Route path="/*" element={<App />} />
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByText("Pantry Page")).toBeInTheDocument();
  });

  test("renders 404 message for unknown routes", () => {
    render(
      <MemoryRouter initialEntries={["/unknown-route"]}>
        <Routes>
          <Route path="/*" element={<App />} />
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByText("404 - Page Not Found")).toBeInTheDocument();
  });
});
