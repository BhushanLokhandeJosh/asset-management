import React, { useEffect } from "react";
import DashBoardContainer from "../../../Home/Dashboard";
import { useDispatch, useSelector } from "react-redux";
import UserList from "./component/UserList";
import { getAllUserStart } from "../../../../utils/actions/userAction";
import { Popover } from "react-bootstrap";

const GetAllUser = () => {
  const dispatch = useDispatch();
  const { users, loading } = useSelector((state) => state.UserReducer);
  const { loggedInUser } = useSelector((state) => state.AuthReducer);

  useEffect(() => {
    if (loggedInUser) dispatch(getAllUserStart());
  }, []);

  return (
    <div>
      <DashBoardContainer />
      <UserList users={users} loading={loading} />
    </div>
  );
};

export default GetAllUser;
