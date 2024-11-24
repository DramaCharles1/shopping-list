import Container from "react-bootstrap/Container";

export function ItemList({
  ItemList,
  ItemComponent,
  toggleListItem,
  deleteListItem,
}) {
  return (
    <Container>
      <ul className="item-list">
        {ItemList.length === 0 && <p className="empty-list">List is empty</p>}
        {ItemList.map((item) => (
          <ItemComponent
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
