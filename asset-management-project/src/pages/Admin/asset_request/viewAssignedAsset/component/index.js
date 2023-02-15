import React from "react";
import { Button, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ROUTES } from "../../../../../routes/constants";

const ViewAssignedAsset = ({ activeAsset,inActiveAsset, loading }) => {
  
  return (
  
    <div className="view-container">
      <div className="view-info">
        <ListGroup>
          <h2 style={{color:"red"}}>Active Assets</h2>

          {activeAsset  ? activeAsset.map((item,key) => (
            <ListGroup.Item className="d-flex justify-content-between align-items-start" as="li">
            <div className="ms-2 me-auto">
              <div className="fw-bold">{"Brand Name : "+item.name}</div>
              <div className="fw-bold">{"Model_No : "+item.model_no}</div>
              <div className="fw-bold">{"Device : "+item.category}</div>
            </div>
          </ListGroup.Item>
          )) : (<h6>No Active Assets...</h6>)}

          <h3 style={{color:"red"}}>Inactive assets</h3>

          {inActiveAsset ? inActiveAsset.map((item,key) => (
            <ListGroup.Item className="d-flex justify-content-between align-items-start">
            <div className="ms-2 me-auto">
              <div className="fw-bold">{"Brand Name : "+item.name}</div>
              <div className="fw-bold">{"Model_No : "+item.model_no}</div>
              <div className="fw-bold">{"Device : "+item.category}</div>
              
            </div>
          </ListGroup.Item>
          )) : (<h6>No InActive Assets...</h6>)}
        </ListGroup>
        <Link to={ROUTES.DASHBOARD}>
          <Button variant="primary">Back</Button>
        </Link>
      </div>
    </div>
  );
};

export default ViewAssignedAsset;
