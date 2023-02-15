import React from "react";

import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";

import { ROUTES } from "../../../../../routes/constants";

import { FaRegEye, FaRegTrashAlt, FaRegEdit } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { GoCheck } from "react-icons/go";
import "../list.css";
import Button from "react-bootstrap/Button";
import { Spinner } from "react-bootstrap";
import { toast } from "react-toastify";

const GetAllRequest = ({ requests, loading, error }) => {
  return (
    <div className="table-style">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name/Email</th>
            <th>Cateogary</th>
            <th>Description</th>
            <th>Subject</th>
            <th>Current Status</th>
            <th>View</th>
            <th>Update</th>
            <th>Allocate Assets</th>
          </tr>
        </thead>
        {loading ? (
          <div className="loader-parent">
            <div className="loader-child">
              <Spinner animation="border" />
            </div>
          </div>
        ) : error ? (
          <h3>Error </h3>
        ) : (
          <tbody>
            {requests.map((item, id) => (
              <tr key={id}>
                <td>
                  <b>{item?.user.name || item?.user.email}</b>
                </td>
                <td>{item?.category}</td>
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
                <td>
                  <Link to={`${ROUTES.VIEWREQUEST}/${item?.id}`}>
                    <FaRegEye className="view-icons" />
                  </Link>
                </td>
                <td>
                  <Link to={`${ROUTES.UPDATEREQUEST}/${item?.id}`}>
                    <FaRegEdit className="edit-icon" />
                  </Link>
                </td>
                <td>
                  <Link to={`${ROUTES.ALLOCATEASSET}/${item?.id}`}>
                    <Button variant="info">Allocate</Button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        )}
      </Table>
    </div>
  );
};

export default GetAllRequest;
