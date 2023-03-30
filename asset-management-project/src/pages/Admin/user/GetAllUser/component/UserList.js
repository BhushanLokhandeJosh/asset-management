import React from "react";
import { useSelector } from "react-redux";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";
import { ROUTES } from "../../../../../routes/constants";
import { toast } from "react-toastify";
import "../list.css";

import { FaRegEye, FaRegEdit, FaTrashAlt } from "react-icons/fa";
import { CiViewTimeline } from "react-icons/ci";
import { HiOutlineLockClosed } from "react-icons/hi";
import { Spinner } from "react-bootstrap";

const UserList = ({ users, loading }) => {
  return (
    <div className="table-style">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Email</th>
            <th>User Status</th>
            <th>Update</th>
            <th>Delete</th>
            <th>View</th>
            <th>Allocated Assets</th>
          </tr>
        </thead>
        {loading ? (
          <div className="loader-parent">
            <div className="loader-child">
          <Spinner animation="border"/>
            </div>
          </div>
        ) : (
          <tbody>
            {users.map((item, id) => (
              <tr key={id}>
                <td>{item.email}</td>
                <td>{item.status === "active" ? <Button variant="Light">Active</Button> : <Button variant="danger">InActive</Button>}</td>
                <td>
                  <Link to={`${ROUTES.UPDATEUSER}/${item.id}/${item.status}`}>
                    <FaRegEdit className="edit-icon"></FaRegEdit>
                  </Link>
                </td>
                <td>
                  {item.status === "active" ? (
                    <Link to={`${ROUTES.DELETEUSER}/${item.id}`}>
                      <FaTrashAlt className="delete-icons"></FaTrashAlt>
                    </Link>
                  ) : (
                    <Link
                      to={`${ROUTES.DELETEUSER}/${item.id}`}
                      style={{ pointerEvents: "none" }}
                    >
                      <HiOutlineLockClosed className="delete-disabled-icons"></HiOutlineLockClosed>
                    </Link>
                  )}
                </td>
                <td>
                  <Link to={`${ROUTES.VIEWUSER}/${item.id}`}>
                    <FaRegEye className="view-icons">View</FaRegEye>
                  </Link>
                </td>

                <td>
                  <Link to={`${ROUTES.VIEWUSERASSETS}/${item.id}`}>
                    <CiViewTimeline className="asset-icons">
                      Assets
                    </CiViewTimeline>
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

export default React.memo(UserList);
