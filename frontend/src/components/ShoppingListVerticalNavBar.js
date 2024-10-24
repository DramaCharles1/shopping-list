import Nav from "react-bootstrap/Nav";

export function ShoppingListVerticalNavBar() {
  return (
    <div className="navbar-container">
      <h2 className="navbar-title">Shopping List</h2>
      {/* Title above the nav */}
      <Nav defaultActiveKey="/home" className="flex-column">
        <Nav.Link href="/home" className="text-primary fw-bold p-2">
          Current shopping list
        </Nav.Link>
        <Nav.Link eventKey="link-pantry" className="text-primary fw-bold p-2">
          Pantry
        </Nav.Link>
        <Nav.Link eventKey="link-recipe" className="text-primary fw-bold p-2">
          Recipe
        </Nav.Link>
      </Nav>
    </div>
  );
}
