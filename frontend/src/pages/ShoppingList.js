import { useState, useEffect } from "react";
import axios from "axios";
import { ItemForm } from "../components/ItemForm";
import { ItemList } from "../components/ItemList";
import { VerticalMenu } from "../components/VerticalMenu";
import { Container, Row, Col } from "react-bootstrap";

export function ShoppingList() {
  const [shoppingList, setShoppingList] = useState([]);
  const [error, setError] = useState(null); // New state for error

  // Fetch shopping list items from the backend when the component loads
  useEffect(() => {
    async function fetchShoppingListItems() {
      try {
        const response = await axios.get(
          "http://127.0.0.1:8000/shopping_list/api/shopping-list/items/"
        );
        setShoppingList(response.data);
      } catch (error) {
        console.error("Error fetching items:", error);
        setError("Failed to fetch items");
      }
    }

    fetchShoppingListItems();
  }, []);

  // Function to add a new item to the backend and update state
  async function addShoppingListItem(title, amount) {
    try {
      const currentDate = new Date();
      const formattedDate = currentDate.toISOString();
      const response = await axios.post(
        "http://127.0.0.1:8000/shopping_list/api/shopping-list/add-item/",
        {
          item: title,
          amount: amount,
          date_added: formattedDate,
          bought: false,
        }
      );

      // Add new item to state based on response from backend
      setShoppingList((currentShoppingList) => [
        ...currentShoppingList,
        response.data,
      ]);
    } catch (error) {
      console.error("Error adding item:", error);
      setError("Error adding item");
    }
  }

  // Function to toggle the bought status of an item
  async function toggleShoppingListItem(id, boughtStatus) {
    try {
      await axios.patch(
        `http://127.0.0.1:8000/shopping_list/api/shopping-list/add-item/${id}/`,
        {
          bought: boughtStatus,
        }
      );

      setShoppingList((prevList) =>
        prevList.map((item) =>
          item.id === id ? { ...item, bought: boughtStatus } : item
        )
      );
    } catch (error) {
      console.error("Error updating item:", error);
      setError("Error updating item");
    }
  }

  // Function to delete an item from the shopping list
  async function deleteShoppingListItem(id) {
    try {
      await axios.delete(
        `http://127.0.0.1:8000/shopping_list/api/shopping-list/delete-item/${id}/`
      );

      setShoppingList((prevList) => prevList.filter((item) => item.id !== id));
    } catch (error) {
      console.error("Error deleting item:", error);
      setError("Error deleting item");
    }
  }

  return (
    <Container fluid className="h-100">
      <Row className="h-100">
        <Col md={3} className="nav-column vh-100">
          <VerticalMenu />
        </Col>
        <Col md={9}>
          {error && <p className="error-message">{error}</p>}
          <ItemForm onSubmit={addShoppingListItem} />
          <ItemList
            ItemList={shoppingList}
            toggleListItem={toggleShoppingListItem}
            deleteListItem={deleteShoppingListItem}
          />
        </Col>
      </Row>
    </Container>
  );
}
