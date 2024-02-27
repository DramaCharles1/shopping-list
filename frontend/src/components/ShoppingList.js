import { ShoppingListItem } from "./ShoppingListItem";

export function ShoppingList({
  shoppingList,
  toggleShoppingListItem,
  deleteShoppingListItem,
}) {
  return (
    <ul className="shopping-list">
      {shoppingList.length === 0 && "Shopping list is empty"}
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
  );
}
