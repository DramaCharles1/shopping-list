import { useState, useEffect } from "react";
import axios from "axios";
import { ItemForm } from "../components/ItemForm";
import { ItemList } from "../components/ItemList";
import { PantryItem } from "../components/PantryItem";
import { VerticalMenu } from "../components/VerticalMenu";
import { Container, Row, Col } from "react-bootstrap";

export function Pantry() {
  const [pantryList, setPantryList] = useState([]);
  const [error, setError] = useState(null);

  // Fetch pantry list items from the backend when the component loads
  useEffect(() => {
    async function fetchPantryListItems() {
      try {
        const response = await axios.get(
          "http://localhost/shopping_list/api/pantry/items/"
        );
        setPantryList(response.data);
      } catch (error) {
        console.error("Error fetching items:", error);
        setError("Failed to fetch items");
      }
    }

    fetchPantryListItems();
  }, []);

  // Function to add a new item to the backend and update state
  async function addPantryListItem(title, amount) {
    try {
      const currentDate = new Date();
      const formattedDate = currentDate.toISOString();
      const response = await axios.post(
        "http://localhost/shopping_list/api/pantry/add-item/",
        {
          item: title,
          amount: amount,
          date_added: formattedDate,
        }
      );

      // Add new item to state based on response from backend
      setPantryList((currentPantryList) => [
        ...currentPantryList,
        response.data,
      ]);
    } catch (error) {
      console.error("Error adding item:", error);
      setError("Error adding item");
    }
  }

  // Function to delete an item from the pantry list
  async function deletePantryListItem(id) {
    try {
      await axios.delete(
        `http://localhost/shopping_list/api/pantry/delete-item/${id}/`
      );

      setPantryList((prevList) => prevList.filter((item) => item.id !== id));
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
          <ItemForm onSubmit={addPantryListItem} />
          <ItemList
            ItemList={pantryList}
            ItemComponent={PantryItem}
            deleteListItem={deletePantryListItem}
          />
        </Col>
      </Row>
    </Container>
  );
}
