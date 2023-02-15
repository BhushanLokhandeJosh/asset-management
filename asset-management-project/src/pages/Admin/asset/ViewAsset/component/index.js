import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import { ROUTES } from "../../../../../routes/constants";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const ViewAsset = ({ asset }) => {
  return (
    <div className="view-container">
      <div className="view-info">
        <ListGroup>
          <ListGroup.Item className="d-flex justify-content-between align-items-start">
            <div className="ms-2 me-auto">
              <div className="fw-bold">Brand Name</div>
              {asset.name}
            </div>
          </ListGroup.Item>

          <ListGroup.Item className="d-flex justify-content-between align-items-start">
            <div className="ms-2 me-auto">
              <div className="fw-bold">Cateagory</div>
              {asset.category}
            </div>
          </ListGroup.Item>

          <ListGroup.Item className="d-flex justify-content-between align-items-start">
            <div className="ms-2 me-auto">
              <div className="fw-bold">Model No</div>
              {asset.model_no}
            </div>
          </ListGroup.Item>

          <ListGroup.Item className="d-flex justify-content-between align-items-start">
            <div className="ms-2 me-auto">
              <div className="fw-bold">Supplier Name</div>
              {asset.supplier_name}
            </div>
          </ListGroup.Item>

          <ListGroup.Item className="d-flex justify-content-between align-items-start">
            <div className="ms-2 me-auto">
              <div className="fw-bold">Date Of Purchase</div>
              {asset.date_of_purchase}
            </div>
          </ListGroup.Item>

          <ListGroup.Item className="d-flex justify-content-between align-items-start">
            <div className="ms-2 me-auto">
              <div className="fw-bold">Status</div>
              {asset.status}
            </div>
          </ListGroup.Item>
        </ListGroup>
        <Link to={ROUTES.GETALLASSET}>
          <Button variant="primary">Back</Button>
        </Link>
      </div>
    </div>
  );
};

export default ViewAsset;
