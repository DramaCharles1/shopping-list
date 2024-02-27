export function ShoppingListItem({
  title,
  amount,
  bought,
  id,
  toggleShoppingListItem,
  deleteShoppingListItem,
}) {
  return (
    <li>
      <label>
        {title} amount: {amount}
        <input
          type="checkbox"
          checked={bought}
          onChange={(e) => toggleShoppingListItem(id, e.target.checked)}
        ></input>
        <button
          className="delete-item"
          onClick={() => deleteShoppingListItem(id)}
        >
          delete
        </button>
      </label>
    </li>
  );
}
