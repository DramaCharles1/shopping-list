import { useState, useEffect } from "react";
import axios from "axios";
import { ShoppingListForm } from "./components/ShoppingListForm";
import { ShoppingList } from "./components/ShoppingList";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

export default function App() {
  const [shoppingList, setShoppingList] = useState([]);

  // Fetch shopping list items from the backend when the component loads
  useEffect(() => {
    async function fetchItems() {
      try {
        const response = await axios.get(
          "http://127.0.0.1:8000/shopping_list/api/items/"
        );
        setShoppingList(response.data);
      } catch (error) {
        console.error("Error fetching items:", error);
      }
    }

    fetchItems();
  }, []);

  // Function to add a new item to the backend and update state
  async function addItem(title, amount) {
    try {
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

      // Add new item to state based on response from backend
      setShoppingList((currentShoppingList) => [
        ...currentShoppingList,
        response.data,
      ]);
    } catch (error) {
      console.error("Error adding item:", error);
    }
  }

  // Function to toggle the bought status of an item
  async function toggleShoppingListItem(id, boughtStatus) {
    try {
      await axios.patch(
        `http://127.0.0.1:8000/shopping_list/api/update-item/${id}/`,
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
    }
  }

  // Function to delete an item from the shopping list
  async function deleteShoppingListItem(id) {
    try {
      await axios.delete(
        `http://127.0.0.1:8000/shopping_list/api/delete-item/${id}/`
      );

      setShoppingList((prevList) => prevList.filter((item) => item.id !== id));
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  }

  return (
    <>
      <h1 className="list-header">Shopping list</h1>
      <ShoppingListForm onSubmit={addItem} />
      <ShoppingList
        shoppingList={shoppingList}
        toggleShoppingListItem={toggleShoppingListItem}
        deleteShoppingListItem={deleteShoppingListItem}
      />
    </>
  );
}
