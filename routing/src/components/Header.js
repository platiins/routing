import { NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import "bootstrap/dist/css/bootstrap.css";
import "../styles.css";

function Header() {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand as={NavLink} to="/">
          MAIN
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={NavLink} to="first">
            FIRST
          </Nav.Link>
          <Nav.Link as={NavLink} to="second">
            SECOND
          </Nav.Link>
          <Nav.Link as={NavLink} to="third">
            THIRD
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Header;
