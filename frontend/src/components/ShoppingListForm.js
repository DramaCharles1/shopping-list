import { useState } from "react";

export function ShoppingListForm({ onSubmit }) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (title === "" || amount === "") return;

    onSubmit(title, amount);
    setTitle("");
    setAmount("");
  }

  function handleAmountChange(e) {
    const value = e.target.value;
    // Allow only numeric input
    if (/^\d*\.?\d*$/.test(value)) {
      setAmount(value);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="shopping-list-form">
      <div className="shoping-list-row">
        <label htmlFor="add-item-label">New item</label>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          id="title"
          className="set-title-field"
        ></input>
        <label htmlFor="add-amount-label">Amount</label>
        <input
          value={amount}
          onChange={handleAmountChange}
          type="text"
          id="amount"
          className="set-amount-field"
        ></input>
      </div>
      <button className="add-item-button">Add</button>
    </form>
  );
}
