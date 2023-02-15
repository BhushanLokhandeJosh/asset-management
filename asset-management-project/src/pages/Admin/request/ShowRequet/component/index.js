import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import { ROUTES } from "../../../../../routes/constants";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const ViewRequest = ({ request }) => {
  return (
    <div className="view-container">
      <div className="view-info">
        <ListGroup>

          <ListGroup.Item className="d-flex justify-content-between align-items-start">
            <div className="ms-2 me-auto">
              <div className="fw-bold">Category</div>
              {request.user.name}
            </div>
          </ListGroup.Item>

          <ListGroup.Item className="d-flex justify-content-between align-items-start">
            <div className="ms-2 me-auto">
              <div className="fw-bold">Category</div>
              {request.category}
            </div>
          </ListGroup.Item>

          {request.category === "Laptop" && (
            <>
              <ListGroup.Item className="d-flex justify-content-between align-items-start">
                <div className="ms-2 me-auto">
                  <div className="fw-bold">Ram</div>
                  {request.ram}
                </div>
              </ListGroup.Item>
              <ListGroup.Item className="d-flex justify-content-between align-items-start">
                <div className="ms-2 me-auto">
                  <div className="fw-bold">Operating System</div>
                  {request.os}
                </div>
              </ListGroup.Item>
              <ListGroup.Item className="d-flex justify-content-between align-items-start">
                <div className="ms-2 me-auto">
                  <div className="fw-bold">Storage</div>
                  {request.storage}
                </div>
              </ListGroup.Item>
              <ListGroup.Item className="d-flex justify-content-between align-items-start">
                <div className="ms-2 me-auto">
                  <div className="fw-bold">Processor</div>
                  {request.processor}
                </div>
              </ListGroup.Item>
            </>
          )}

          <ListGroup.Item className="d-flex justify-content-between align-items-start">
            <div className="ms-2 me-auto">
              <div className="fw-bold">Description</div>
              {request.description}
            </div>
          </ListGroup.Item>

          <ListGroup.Item className="d-flex justify-content-between align-items-start">
            <div className="ms-2 me-auto">
              <div className="fw-bold">Request status</div>
              {request.request_status}
            </div>
          </ListGroup.Item>

        </ListGroup>
        <Link to={ROUTES.GETALLREQUEST}>
          <Button variant="primary">Back</Button>
        </Link>
      </div>
    </div>
  );
};

export default ViewRequest;
