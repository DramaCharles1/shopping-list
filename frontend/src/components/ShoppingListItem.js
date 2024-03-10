import ListGroup from "react-bootstrap/ListGroup";

export function ShoppingListItem({
  title,
  amount,
  bought,
  id,
  toggleShoppingListItem,
  deleteShoppingListItem,
}) {
  return (
    <ListGroup>
      <ListGroup.Item>
        <label>
          {title} amount: {amount}
        </label>
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
      </ListGroup.Item>
    </ListGroup>
  );
}
