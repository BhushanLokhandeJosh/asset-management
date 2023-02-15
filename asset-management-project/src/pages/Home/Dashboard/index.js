import React, { useEffect, useMemo } from "react";
import DashBoard from "./component";
import { ROUTES } from "../../../routes/constants";
import { useSelector } from "react-redux";
import Spinner from "react-bootstrap/Spinner";
import "../../../styles/__loaderStyle__.css";
import { toast } from "react-toastify";

const DashBoardContainer = () => {
  const { loggedInUser } = useSelector((state) => state.AuthReducer);
  
  const UserRoutes = [
    {
      Path:ROUTES.GETALLUSER,
      Name:"Get All User",
    },
    {
      Path: ROUTES.CREATEUSER,
      Name: "Create User",
    },
  ];

  const AdminRequestRoutes = [
    {
      Path:ROUTES.GETALLREQUEST,
      Name: "Get All Request",
    },
    {
      Path:ROUTES.CREATEREQUEST,
      Name: "Create Request",
    }
  ]

  const UserAssetRoutes = [
    {
      Path:ROUTES.GETASSIGNEDASSETS,
      Name:"Get All Assigned Asset"
    }
  ]

  const EmployeeRequestRoutes = [
    {
      Path:ROUTES.CREATEREQUEST,
      Name: "Create Request",
    },
  ]

  const EmployeeUpdateProfileRoutes = [
    {
      Path: ROUTES.UPDATEUSER,
      Name: "Update Profile"
    }
  ]

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
      Path:ROUTES.GETALLVENDORS,
      Name:"All Vendors",
    },
    {
      Path:ROUTES.CREATEVENDOR,
      Name:"Create Vendor"
    },
  ]

  const BasicRoutes = [
    {
      Path: ROUTES.LOGOUT,
      Name: "LOG OUT",
    },
  ];

  return (
    <>
      {!loggedInUser.role ? (
        <div className="loader-style">
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      ) : (
        <DashBoard
          loggedInUser={loggedInUser}
          role={loggedInUser.role}
          UserRoutes={UserRoutes}
          AssetRoutes={AssetRoutes}
          BasicRoutes={BasicRoutes}
          AdminRequestRoutes={AdminRequestRoutes}
          EmployeeRequestRoutes={EmployeeRequestRoutes}
          UserAssetRoutes={UserAssetRoutes}
          vendorRoutes={vendorRoutes}
          EmployeeUpdateProfileRoutes={EmployeeUpdateProfileRoutes}
        />
      )}
    </>
  );
};

export default React.memo(DashBoardContainer);
