import React from "react";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useDispatch} from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import "./navbar.css";
import ImageContainer from "../Footer/BackgroundImg.js/component";
import { ROUTES } from "../../../routes/constants";
import { logoutStart } from "../../../utils/actions/authActions";

const AdminNavbar = (props) => {
  const {
    UserRoutes,
    AssetRoutes,
    BasicRoutes,
    RequestRoutes,
    UserAssetRoutes,
    vendorRoutes,
  } = props;

  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const navigationHandler = () => {
    dispatch(logoutStart())
    navigate(ROUTES.HOME);
  }

  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#">Admin</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavDropdown
                className="navbar-element"
                title="User"
                id="basic-nav-dropdown"
              >
                {UserRoutes.map((item, id) => (
                  <NavDropdown.Item key={id}>
                    <Link to={item.Path}>
                      <Button variant="Light">{item.Name}</Button>
                    </Link>
                  </NavDropdown.Item>
                ))}
              </NavDropdown>

              <NavDropdown title="Asset" id="basic-nav-dropdown">
                {AssetRoutes.map((item, id) => (
                  <NavDropdown.Item key={id}>
                    <Link to={item.Path}>
                      <Button variant="Light">{item.Name}</Button>
                    </Link>
                  </NavDropdown.Item>
                ))}
              </NavDropdown>

              <NavDropdown title="Requests" id="basic-nav-dropdown">
                {RequestRoutes.map((item, id) => (
                  <NavDropdown.Item key={id}>
                    <Link to={item.Path}>
                      <Button variant="Light">{item.Name}</Button>
                    </Link>
                  </NavDropdown.Item>
                ))}
              </NavDropdown>

              <NavDropdown title="User Assets" id="basic-nav-dropdown">
                {UserAssetRoutes.map((item, id) => (
                  <NavDropdown.Item key={id}>
                    <Link to={item.Path}>
                      <Button variant="Light">{item.Name}</Button>
                    </Link>
                  </NavDropdown.Item>
                ))}
              </NavDropdown>

              <NavDropdown title="Vendors" id="basic-nav-dropdown">
                {vendorRoutes.map((item, id) => (
                  <NavDropdown.Item key={id}>
                    <Link to={item.Path}>
                      <Button variant="Light">{item.Name}</Button>
                    </Link>
                  </NavDropdown.Item>
                ))}
              </NavDropdown>
            </Nav>

            {BasicRoutes.map((item, id) => (
              <Nav.Link key={id}>
                {/* <Link to={item.Path}> */}
                  <Button  onClick={navigationHandler} variant="Light">{item.Name}</Button>
                {/* </Link> */}
              </Nav.Link>
            ))}
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <ImageContainer/>
    </div>
  );
};

export default React.memo(AdminNavbar);
