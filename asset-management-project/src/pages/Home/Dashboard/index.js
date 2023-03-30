import React, { useEffect, useMemo } from "react";
import DashBoard from "./component";
import { ROUTES } from "../../../routes/constants";
import { useSelector } from "react-redux";
import Spinner from "react-bootstrap/Spinner";
import "../../../styles/__loaderStyle__.css";
import { toast } from "react-toastify";
import CommonNavbar from "../../Shared/Navbar/Navbar";
import AdminNavbar from "../../Shared/Navbar/AdminNavbar";
import UserNavbar from "../../Shared/Navbar/UserNavbar";
import { Navbar } from "react-bootstrap";

const DashBoardContainer = () => {
  const { loggedInUser } = useSelector((state) => state.AuthReducer);

  const UserRoutes = [
    {
      Path: ROUTES.GETALLUSER,
      Name: "Get All User",
    },
    {
      Path: ROUTES.CREATEUSER,
      Name: "Create User",
    },
  ];

  const AdminRequestRoutes = [
    {
      Path: ROUTES.GETALLREQUEST,
      Name: "Get All Request",
    },
    {
      Path: ROUTES.CREATEREQUEST,
      Name: "Create Request",
    },
  ];

  const UserAssetRoutes = [
    {
      Path: ROUTES.GETASSIGNEDASSETS,
      Name: "Get All Assigned Asset",
    },
  ];

  const EmployeeRequestRoutes = [
    {
      Path: ROUTES.CREATEREQUEST,
      Name: "Create Request",
    },
  ];

  const EmployeeUpdateProfileRoutes = [
    {
      Path: ROUTES.UPDATEUSER,
      Name: "Update Profile",
    },
  ];

  const AssetRoutes = [
    {
      Path: ROUTES.GETALLASSET,
      Name: "All Asset",
    },
    {
      Path: ROUTES.CREATEASSET,
      Name: "Create Asset",
    },
  ];
  const vendorRoutes = [
    {
      Path: ROUTES.GETALLVENDORS,
      Name: "All Vendors",
    },
    {
      Path: ROUTES.CREATEVENDOR,
      Name: "Create Vendor",
    },
  ];

  const BasicRoutes = [
    {
      Path: ROUTES.LOGOUT,
      Name: "LOG OUT",
    },
  ];

  console.log(loggedInUser.role);

  return (
    <>
      {!loggedInUser.role ? (
        
        <div className="loader-style">
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      ) :  
        loggedInUser.role === "admin" ? (
          <AdminNavbar
            UserRoutes={UserRoutes}
            AssetRoutes={AssetRoutes}
            BasicRoutes={BasicRoutes}
            RequestRoutes={AdminRequestRoutes}
            UserAssetRoutes={UserAssetRoutes}
            vendorRoutes={vendorRoutes}
          />
        ) : loggedInUser.role === "employee" && (
          <UserNavbar
            EmployeeRequestRoutes={EmployeeRequestRoutes}
            BasicRoutes={BasicRoutes}
            EmployeeUpdate={EmployeeUpdateProfileRoutes}
          />
        ) 
      }
    </>
  );
};

export default React.memo(DashBoardContainer);
