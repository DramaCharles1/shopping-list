import Container from "react-bootstrap/Container";
import { Item } from "./Item";

export function ItemList({ ItemList, toggleListItem, deleteListItem }) {
  return (
    <Container>
      <ul className="item-list">
        {ItemList.length === 0 && (
          <p className="empty-list">Shopping list is empty</p>
        )}
        {ItemList.map((item) => (
          <Item
            {...item}
            key={item.id}
            toggleListItem={toggleListItem}
            deleteListItem={deleteListItem}
          />
        ))}
      </ul>
    </Container>
  );
}
