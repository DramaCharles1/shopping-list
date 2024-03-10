import { ShoppingListForm } from "./components/ShoppingListForm";
import { ShoppingList } from "./components/ShoppingList";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

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
