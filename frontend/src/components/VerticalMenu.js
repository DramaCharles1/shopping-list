import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";

export function VerticalMenu() {
  return (
    <div className="navbar-container">
      <Nav defaultActiveKey="/shopping-list" className="custom-nav flex-column">
        <Nav.Link as={Link} to="/" className="custom-link">
          Current shopping list
        </Nav.Link>
        <Nav.Link as={Link} to="/pantry" className="custom-link">
          Pantry
        </Nav.Link>
        <Nav.Link as={Link} to="/recipe" className="custom-link">
          Recipe
        </Nav.Link>
      </Nav>
    </div>
  );
}
