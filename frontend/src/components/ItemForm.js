import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from "react";

export function ItemForm({ onSubmit }) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (title === "" || amount === "") return;

    // Call the onSubmit function passed from App.js
    onSubmit(title, amount);

    // Clear input fields
    setTitle("");
    setAmount("");
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
