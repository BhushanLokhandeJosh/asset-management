import React from "react";
import { getToken, getUser } from "../../../../services/AuthUser";

const DashBoard = () => {

  const userDetails = getUser();
  const role = userDetails.role;
  const token = getToken();

  return <div>
    {token && role === "admin" ? <div>In admin Dashborad</div> : 
    <div>In Employee DashBoard</div> }
  </div>;
};

export default DashBoard;
