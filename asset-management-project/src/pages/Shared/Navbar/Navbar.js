import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../../../App.css";
import { ROUTES } from "../../../routes/constants";
import { Link, useNavigate } from "react-router-dom";

import { Button, NavDropdown } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { logoutStart } from "../../../utils/actions/authActions";
import { ArrayNavbarElements, NavbarElements } from "./Wrapper";

const homeRoute = {
  Path: ROUTES.HOME,
  Name: "Home",
};

const homePageRoutes = [
  {
    Path: ROUTES.ABOUT,
    Name: "About Us",
  },
  {
    Path: ROUTES.CONTACT,
    Name: "Contact Us",
  },
];

const loginRoute = {
  Path: ROUTES.LOGIN,
  Name: "Log In",
};

const logoutRoute = {
  Path: ROUTES.LOGOUT,
  Name: "Log Out",
};

const CommonNavbar = () => {
  
  const { loggedInUser } = useSelector((state) => state.AuthReducer);

  return (
    <div>
      <Navbar collapseOnSelect expand="lg" className="navbar-style">
        <Container>
          <NavbarElements routes={homeRoute} />

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <ArrayNavbarElements routeArray={homePageRoutes} />
            <Nav>{loggedInUser && <NavbarElements routes={loginRoute} />}</Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default CommonNavbar;
