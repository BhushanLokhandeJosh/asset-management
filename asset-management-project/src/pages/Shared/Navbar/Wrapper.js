import { Button, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./navbar.css";

export const ArrayNavbarElements = ({ routeArray }) => {
  return (
    <Nav className="me-auto">
      {routeArray.map((route, key) => (
        <Nav.Link>
          <Link to={route?.Path}>
            <Button variant="light">{route?.Name}</Button>
          </Link>
        </Nav.Link>
      ))}
    </Nav>
  );
};

export const DropdownNavbarElements = ({ routeTitle, routes }) => {
  return (
    <div className="navbar-dropdown">
      <NavDropdown title={routeTitle} id="basic-nav-dropdown" className="navbar-select" >
        {routes.map((item, id) => (
          <NavDropdown.Item key={id} >
            <Link to={item?.Path}>
              <div>
              <Button variant="Light" >{item?.Name}</Button>
              </div>
            </Link>
          </NavDropdown.Item>
        ))}
      </NavDropdown>
    </div>
  );
};

export const NavbarElements = ({ routes }) => {
  return (
    <>
      <Nav.Link>
        <Link to={routes?.Path}>
          <Button variant="light">{routes?.Name}</Button>
        </Link>
      </Nav.Link>
    </>
  );
};
