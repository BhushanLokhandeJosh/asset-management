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
          UserRoutes={UserRoutes}
          AssetRoutes={AssetRoutes}
          BasicRoutes={BasicRoutes}
          RequestRoutes={AdminRequestRoutes}
          UserAssetRoutes={UserAssetRoutes}
          vendorRoutes={vendorRoutes}
        />
      ) : (
        <UserNavbar
          RequestRoutes={EmployeeRequestRoutes}
          BasicRoutes={BasicRoutes}
          EmployeeUpdate= {EmployeeUpdateProfileRoutes}
        />
      )}
    </div>
  );
};

export default React.memo(DashBoard);
