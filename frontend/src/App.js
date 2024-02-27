import { ShoppingListForm } from "./components/ShoppingListForm";
import { ShoppingList } from "./components/ShoppingList";
import { useState } from "react";
import "./App.css";

export default function App() {
  const [shoppingList, setShoppingList] = useState([]);

  function addItem(title, amount) {
    setShoppingList((currentShoppingList) => {
      return [
        ...currentShoppingList,
        { id: crypto.randomUUID(), title, bought: false, amount },
      ];
    });
  }

  function toggleShoppingListItem(id, bought) {
    setShoppingList((currentShoppingList) => {
      return currentShoppingList.map((shoppingListItem) => {
        if (shoppingListItem.id === id) {
          return { ...shoppingListItem, bought };
        }
        return shoppingListItem;
      });
    });
  }

  function deleteShoppingListItem(id) {
    setShoppingList((currentShoppingList) => {
      return currentShoppingList.filter(
        (shoppingListItem) => shoppingListItem.id !== id
      );
    });
  }

  return (
    <>
      <ShoppingListForm onSubmit={addItem} />
      <h1 className="list-hedar">Shopping list</h1>
      <ShoppingList
        shoppingList={shoppingList}
        toggleShoppingListItem={toggleShoppingListItem}
        deleteShoppingListItem={deleteShoppingListItem}
      />
    </>
  );
}
