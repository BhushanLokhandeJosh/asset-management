import React from "react";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import "./navbar.css";
import ImageContainer from "../Footer/BackgroundImg.js/component";
import { ROUTES } from "../../../routes/constants";
import { logoutStart } from "../../../utils/actions/authActions";
import { DropdownNavbarElements } from "./Wrapper";

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
    dispatch(logoutStart());
    navigate(ROUTES.HOME);
  };

  return (
    <div>
      <div>
        <Navbar collapseOnSelect expand="lg" className="navbar-style">
          <Container>
            <Navbar.Brand href="#">Admin</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
             
              <Nav className="me-auto">
                <DropdownNavbarElements
                  routeTitle={"User"}
                  routes={UserRoutes}
                />
                <DropdownNavbarElements
                  routeTitle={"Asset"}
                  routes={AssetRoutes}
                />
                <DropdownNavbarElements
                  routeTitle={"Request"}
                  routes={RequestRoutes}
                />
                <DropdownNavbarElements
                  routeTitle={"User Assets"}
                  routes={UserAssetRoutes}
                />
                <DropdownNavbarElements
                  routeTitle={"Vendors"}
                  routes={vendorRoutes}
                />
              </Nav>
        
              <Nav>
                <Nav.Item>
                  <Nav.Link>
                    {BasicRoutes.map((item, key) => ( 
                      <Button onClick={navigationHandler} variant="Light" className="navbar-dropdown">
                        {item.Name}
                      </Button>
                    ))}
                  </Nav.Link>
                </Nav.Item>
              </Nav>
  
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <ImageContainer/>
      </div>
    </div>
  );
};

export default React.memo(AdminNavbar);
