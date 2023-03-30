import React from "react";
import AdminNavbar from "../../../Shared/Navbar/AdminNavbar";
import UserNavbar from "../../../Shared/Navbar/UserNavbar";
import { getUser } from "../../../../services/AuthUser";

const DashBoard = ({
  role,
  UserRoutes,
  AssetRoutes,
  BasicRoutes,
  AdminRequestRoutes,
  EmployeeRequestRoutes,
  UserAssetRoutes,
  vendorRoutes,
  EmployeeUpdateProfileRoutes
}) => {
  return (
    <div>
      {role === "admin" ? (
        <AdminNavbar
          
        />
      ) : (
        <UserNavbar
          
        />
      )}
    </div>
  );
};

export default React.memo(DashBoard);
