import React from "react";
import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { ROUTES } from "../../../routes/constants";
import ImageContainer from "../Footer/BackgroundImg.js/component";
import { logoutStart } from "../../../utils/actions/authActions";

const UserNavbar = ({ RequestRoutes, BasicRoutes, EmployeeUpdate }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loggedInUser } = useSelector((state) => state.AuthReducer);
  const id = loggedInUser.id;
  
  const navigationHandler = () => {
    dispatch(logoutStart())
    navigate(ROUTES.HOME);
  }

  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
              <Nav.Item>
                <Nav.Link>
                  {RequestRoutes.map((item, key) => (
                    <Link to={item.Path}>
                      <Button variant="Light">{item.Name}</Button>
                    </Link>
                  ))}
                </Nav.Link>
              </Nav.Item>
            </Nav>

            <Nav>
              <Nav.Item>
                <Nav.Link>
                  <Link
                    to={`${ROUTES.UPDATEUSERPROFILE}/${id}`}
                  >
                    <Button variant="Light">Update User</Button>
                  </Link>
                </Nav.Link>
              </Nav.Item>
            </Nav>
            <Nav>
              <Nav.Item>
                <Nav.Link>
                  <Link to={`${ROUTES.VIEWUSERASSETS}/${id}`}>
                    <Button variant="Light">Asset Details</Button>
                  </Link>
                </Nav.Link>
              </Nav.Item>
            </Nav>
            <Nav>
              <Nav.Item>
                <Nav.Link>
                  <Link to={`${ROUTES.CHECKUSERASSETSTATUS}/${id}`}>
                    <Button variant="Light">Asset Status</Button>
                  </Link>
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
          <Nav>
            <Nav.Item>
              <Nav.Link>
                {BasicRoutes.map((item, key) => (
                  // <Link to={item.Path}>
                    <Button  onClick={navigationHandler} variant="Light">{item.Name}</Button>
                  // </Link>
                ))}
              </Nav.Link>
            </Nav.Item>
          </Nav>
          <Navbar.Brand
            style={{ color: "green", marginLeft: "5%", marginTop: "10px" }}
          >
            {"Hello  " + loggedInUser.name}
          </Navbar.Brand>
        </Container>
      </Navbar>
      <ImageContainer/>
    </div>
  );
};

export default UserNavbar;
