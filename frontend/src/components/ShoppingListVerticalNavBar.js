import Nav from "react-bootstrap/Nav";

export function ShoppingListVerticalNavBar() {
  return (
    <div className="navbar-container">
      <h2 className="navbar-title">Shopping List</h2>
      {/* Title above the nav */}
      <Nav defaultActiveKey="/home" className="custom-nav flex-column">
        <Nav.Link href="/home" className="custom-link">
          Current shopping list
        </Nav.Link>
        <Nav.Link eventKey="link-pantry" className="custom-link">
          Pantry
        </Nav.Link>
        <Nav.Link eventKey="link-recipe" className="custom-link">
          Recipe
        </Nav.Link>
      </Nav>
    </div>
  );
}
