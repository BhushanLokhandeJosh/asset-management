import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import "../../ViewUser/viewUser.css";
import { Link } from "react-router-dom";
import { ROUTES } from "../../../../../routes/constants";
import { Button } from "react-bootstrap";

const ViewInfo = ({ user }) => {
  return (
    <div className="view-container">
      <div className="view-info">
        <ListGroup>
          <ListGroup.Item className="d-flex justify-content-between align-items-start">
            <div className="ms-2 me-auto">
              <div className="fw-bold">Email</div>
              {user.email}
            </div>
          </ListGroup.Item>

          <ListGroup.Item className="d-flex justify-content-between align-items-start">
            <div className="ms-2 me-auto">
              <div className="fw-bold">Name</div>
              {user.name}
            </div>
          </ListGroup.Item>

          <ListGroup.Item className="d-flex justify-content-between align-items-start">
            <div className="ms-2 me-auto">
              <div className="fw-bold">Mobile No</div>
              {user.mobile_no}
            </div>
          </ListGroup.Item>

          <ListGroup.Item className="d-flex justify-content-between align-items-start">
            <div className="ms-2 me-auto">
              <div className="fw-bold">Pin Code</div>
              {user.pincode}
            </div>
          </ListGroup.Item>
          <Link to={ROUTES.GETALLUSER}>
            <Button>Go Back</Button>
          </Link>
        </ListGroup>
      </div>
    </div>
  );
};

export default ViewInfo;
