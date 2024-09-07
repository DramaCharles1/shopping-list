import Container from "react-bootstrap/Container";
import { ShoppingListItem } from "./ShoppingListItem";

export function ShoppingList({
  shoppingList,
  toggleShoppingListItem,
  deleteShoppingListItem,
}) {
  return (
    <Container>
      <ul className="shopping-list">
        {shoppingList.length === 0 && (
          <p className="empty-list">Shopping list is empty</p>
        )}
        {shoppingList.map((item) => {
          return (
            <ShoppingListItem
              {...item}
              key={item.id}
              toggleShoppingListItem={toggleShoppingListItem}
              deleteShoppingListItem={deleteShoppingListItem}
            />
          );
        })}
      </ul>
    </Container>
  );
}
