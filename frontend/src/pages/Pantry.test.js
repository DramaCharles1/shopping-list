import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import axios from "axios";
import { Pantry } from "./Pantry";

// Mock the axios module
jest.mock("axios");

test("fetches and displays pantry list items on mount", async () => {
  // Mock API response
  const items = [
    { id: 1, item: "Juice", amount: 2 },
    { id: 2, item: "Ketchup", amount: 12 },
  ];
  axios.get.mockResolvedValueOnce({ data: items });

  render(<Pantry />);

  // Wait for the list items to be displayed
  await waitFor(() => {
    // Match text containing "Milk" in a more flexible way
    expect(screen.getByText(/Juice/i)).toBeInTheDocument();
    expect(screen.getByText(/Ketchup/i)).toBeInTheDocument();
  });
});

test("adds a new item to the pantry list", async () => {
  // Mock initial API response (empty list)
  axios.get.mockResolvedValueOnce({ data: [] });

  // Mock POST response when adding a new item
  const newItem = { id: 1, item: "Bread", amount: 1, bought: false };
  axios.post.mockResolvedValueOnce({ data: newItem });

  render(<Pantry />);

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

test("delete an item from the pantry list", async () => {
  // Mock API response
  const items = [{ id: 1, item: "Juice", amount: 2 }];
  axios.get.mockResolvedValueOnce({ data: items });

  render(<Pantry />);

  await waitFor(() => {
    expect(screen.getByText(/delete/i)).toBeInTheDocument();
  });

  // Click delete button
  const deleteButton = screen.getByText(/delete/i);
  fireEvent.click(deleteButton);

  // Check if the item has been deleted from the list
  await waitFor(() => {
    expect(screen.getByText(/List is empty/i)).toBeInTheDocument();
  });
});

test("displays error message when fetching items fails", async () => {
  // Mock API error
  axios.get.mockRejectedValueOnce(new Error("Failed to fetch items"));

  render(<Pantry />);

  // Wait for the error message to appear
  await waitFor(() => {
    expect(screen.getByText("Failed to fetch items")).toBeInTheDocument();
  });
});
