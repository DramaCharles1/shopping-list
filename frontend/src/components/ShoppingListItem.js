import ListGroup from "react-bootstrap/ListGroup";

export function ShoppingListItem({
  item,
  amount,
  bought,
  id,
  toggleListItem,
  deleteListItem,
}) {
  return (
    <ListGroup>
      <ListGroup.Item>
        <label>
          {item} amount: {amount}
        </label>
        <input
          type="checkbox"
          checked={bought}
          onChange={(e) => toggleListItem(id, e.target.checked)}
        ></input>
        <button className="delete-item" onClick={() => deleteListItem(id)}>
          delete
        </button>
      </ListGroup.Item>
    </ListGroup>
  );
}
