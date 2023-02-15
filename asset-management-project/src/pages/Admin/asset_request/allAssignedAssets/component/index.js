import React, { useEffect } from "react";
import { Button, Spinner, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { assignedAssetsStart } from "../../../../../utils/actions/userAssetAction";
import "../list.css";
import { FaRegEdit } from "react-icons/fa";
import { ROUTES } from "../../../../../routes/constants";
import { Link } from "react-router-dom";

const GetAssignedAssets = ({userAsset,loading}) => {

  return (
    <div className="table-style">
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Employee Name/email</th>
          <th>Category</th>
          <th>Model_no</th>
          <th>Brand</th>
          <th>Supplier Name</th>
          <th>Asset Alloted</th>
          <th>Update</th>
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
          {userAsset.map((item, id) => (
            <tr key={id}>
              <td>{item.user.name || item.user.email}</td>
              <td>{item.asset.category}</td>
              <td>{item.asset.model_no}</td>
              <td>{item.asset.name}</td>
              <td>{item.asset.supplier_name}</td>
              <td>{item.is_active === "active" ? 
              (<Button variant="light">With User</Button>) : <Button variant="secondary">With Mgmt</Button>}</td>
              <td>
                <Link to={`${ROUTES.UPDATEUSERASSET}/${item.id}`}>
                  <FaRegEdit/>
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

export default GetAssignedAssets;
