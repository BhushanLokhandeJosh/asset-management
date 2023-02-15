import React from "react";
import { Button, Table } from "react-bootstrap";

const CheckAssetStatus = ({ requests, loading }) => {
  return (
    <div className="table-style">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Category</th>
            <th>Description</th>
            <th>Subject</th>
            <th>Current Status</th>
          </tr>
        </thead>
        {requests ? (
          <tbody>
            {requests.map((item, id) => (
              <tr key={id}>
                <td>
                  <b>{item?.category}</b>
                </td>
                <td>{item?.description}</td>
                <td>{item?.subject}</td>
                <td>
                  {item?.request_status === "pending" ? (
                    <Button variant="warning">Pending</Button>
                  ) : item?.request_status === "approve" ? (
                    <Button variant="success">Approved</Button>
                  ) : (
                    <Button variant="danger">Rejected</Button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        ) : (
          <h3>No Requests To Show</h3>
        )}
      </Table>
    </div>
  );
};

export default CheckAssetStatus;
