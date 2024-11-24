import ListGroup from "react-bootstrap/ListGroup";

export function PantryItem({ item, amount, id, deleteListItem }) {
  return (
    <ListGroup>
      <ListGroup.Item>
        <label>
          {item} amount: {amount}
        </label>
        <button className="delete-item" onClick={() => deleteListItem(id)}>
          delete
        </button>
      </ListGroup.Item>
    </ListGroup>
  );
}
