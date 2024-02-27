import { useState } from "react";

export function ShoppingListForm({ onSubmit }) {
  const [newItem, setNewItem] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (newItem === "") return;
    onSubmit(newItem);
    setNewItem("");
  }

  return (
    <form onSubmit={handleSubmit} className="shopping-list-form">
      <div className="shoping-list-row">
        <label htmlFor="add-item-label">New item</label>
        <input
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          type="text"
          id="item"
          className="add-item-form"
        ></input>
        <label htmlFor="add-amount-label">Amount</label>
        <input type="text" id="amount" className="add-amount-form"></input>
      </div>
      <button className="add-item-button">Add</button>
    </form>
  );
}
