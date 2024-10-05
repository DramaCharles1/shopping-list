import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import axios from "axios";

export function ShoppingListForm({ onSubmit }) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    if (title === "" || amount === "") return;

    try {
      // Make a POST request to add the item to the backend
      const currentDate = new Date();
      const formattedDate = currentDate.toISOString();
      const response = await axios.post(
        "http://127.0.0.1:8000/shopping_list/api/add-item/",
        {
          item: title,
          amount: amount,
          date_added: formattedDate,
          bought: false,
        }
      );

      // Optionally call onSubmit to update the list in the parent component
      if (onSubmit) {
        onSubmit(response.data);
      }

      // Clear input fields
      setTitle("");
      setAmount("");
    } catch (error) {
      console.error("Error adding item:", error);
    }
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="add-new-item">
          <Form.Control
            type="text"
            placeholder="New item"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <Form.Control
            type="number"
            placeholder="Enter amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          <Button variant="primary" type="submit">
            Add item
          </Button>
        </Form.Group>
      </Form>
    </Container>
  );
}
