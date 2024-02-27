export function ShoppingListItem({
  title,
  bought,
  id,
  toggleShoppingListItem,
  deleteShoppingListItem,
}) {
  return (
    <li>
      <label>
        {title}
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
