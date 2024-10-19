import { render, screen, waitFor, fireEvent } from "@testing-library/react";
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

test("adds a new item to the shopping list", async () => {
  // Mock initial API response (empty list)
  axios.get.mockResolvedValueOnce({ data: [] });

  // Mock POST response when adding a new item
  const newItem = { id: 1, item: "Bread", amount: 1, bought: false };
  axios.post.mockResolvedValueOnce({ data: newItem });

  render(<App />);

  // Fill out the form and submit
  const input = screen.getByPlaceholderText("New item");
  const amountInput = screen.getByPlaceholderText("Enter amount");
  const addButton = screen.getByText(/add item/i);

  fireEvent.change(input, { target: { value: "Bread" } });
  fireEvent.change(amountInput, { target: { value: "1" } });
  fireEvent.click(addButton);

  // Check if the new item is added to the list
  await waitFor(() => {
    expect(screen.getByText(/Bread/i)).toBeInTheDocument();
  });
});

test("displays error message when fetching items fails", async () => {
  // Mock API error
  axios.get.mockRejectedValueOnce(new Error("Failed to fetch items"));

  render(<App />);

  // Wait for the error message to appear
  await waitFor(() => {
    expect(screen.getByText("Failed to fetch items")).toBeInTheDocument();
  });
});
