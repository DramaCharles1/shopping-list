import { render, screen, waitFor } from "@testing-library/react";
import axios from "axios";
import App from "./App";

// Mock the axios module
jest.mock("axios");

test("fetches and displays shopping list items on mount", async () => {
  // Mock API response
  const items = [
    { id: 1, item: "Milk", amount: 2, bought: false },
    { id: 2, item: "Eggs", amount: 12, bought: false },
  ];
  axios.get.mockResolvedValueOnce({ data: items });

  render(<App />);

  // Wait for the list items to be displayed
  await waitFor(() => {
    // Match text containing "Milk" in a more flexible way
    expect(screen.getByText(/Milk/i)).toBeInTheDocument();
    expect(screen.getByText(/Eggs/i)).toBeInTheDocument();
  });
});
