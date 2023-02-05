import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import "../../../App.css";
import {ROUTES} from "../../../routes/constants"

const NavbarComponent = () => {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className="navbar-style"
    >
      <Container>
        <Navbar.Brand href={ROUTES.HOME}>Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href={ROUTES.ABOUT}>About Us</Nav.Link>
            <Nav.Link href={ROUTES.SERVICE}>Services</Nav.Link>
            <Nav.Link href={ROUTES.CONTACT}>Contact Us</Nav.Link>
          </Nav>

          <Nav>
            <Nav.Link
              href="/login"
            >
              Log In
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
