import Nav from "react-bootstrap/Nav";

export function VerticalMenu() {
  return (
    <div className="navbar-container">
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
