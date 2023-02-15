import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import "../../../App.css";
import { ROUTES } from "../../../routes/constants";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Hero from "../../Home/Hero/component";
import { Button } from "react-bootstrap";

const NavbarComponent = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" className="navbar-style">
        <Container>
          <Navbar.Brand href={ROUTES.HOME}>
            <Button variant="light">Home</Button>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link>
                <Link to={ROUTES.ABOUT}>
                  <Button variant="light">About Us</Button>
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link to={ROUTES.CONTACT}>
                  <Button variant="light">Contact Us</Button>
                </Link>
              </Nav.Link>
            </Nav>

            <Nav>
              <Nav.Link>
                <Link to={ROUTES.LOGIN}>
                  <Button variant="light">Log In</Button></Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarComponent;
