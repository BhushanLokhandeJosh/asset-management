import React from "react";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";

import "../assetList.css";
import { ROUTES } from "../../../../../routes/constants";

import { FaRegEye, FaRegTrashAlt, FaRegEdit } from "react-icons/fa";
import { HiOutlineLockClosed } from "react-icons/hi";
import { Button, Spinner } from "react-bootstrap";

const AssetList = ({ assets, loading }) => {
  return (
    <div className="table-style">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Id</th>
            <th>Brand</th>
            <th>Cateogary</th>
            <th>Price</th>
            <th>Status</th>
            <th>Supplier Name</th>
            <th>Update</th>
            <th>Delete</th>
            <th>View</th>
          </tr>
        </thead>
        {loading ? (
          <div className="loader-parent">
            <div className="loader-child">
              <Spinner animation="border" />
            </div>
          </div>
        ) : (
          <tbody>
            {assets.map((item, id) => (
              <tr key={id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.category}</td>
                <td>{item.price}</td>
                <td>{item.status === "available" ? <Button variant="Light">Available</Button> : <Button variant="danger">UnAvailable</Button>}</td>
                <td>{item.supplier_name}</td>
                <td>
                  <Link to={`${ROUTES.UPDATEASSET}/${item.id}`}>
                    <FaRegEdit className="edit-icon"></FaRegEdit>
                  </Link>
                </td>
                <td>
                  {item.status === "available" ? (
                    <Link to={`${ROUTES.DELETEASSET}/${item.id}`}>
                      <FaRegTrashAlt className="delete-icons"></FaRegTrashAlt>
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
                  <Link to={`${ROUTES.VIEWASSET}/${item.id}`}>
                    <FaRegEye className="view-icons"></FaRegEye>
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

export default AssetList;
