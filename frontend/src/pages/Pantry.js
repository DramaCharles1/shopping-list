import { VerticalMenu } from "../components/VerticalMenu";
import { Container, Row, Col } from "react-bootstrap";

export function Pantry() {
  return (
    <Container fluid className="h-100">
      <Row className="h-100">
        <Col md={3} className="nav-column vh-100">
          <VerticalMenu />
        </Col>
        <Col md={9}></Col>
      </Row>
    </Container>
  );
}
