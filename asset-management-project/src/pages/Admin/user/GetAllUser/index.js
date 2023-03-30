import React, { useEffect } from "react";
import DashBoardContainer from "../../../Home/Dashboard";
import { useDispatch, useSelector } from "react-redux";
import UserList from "./component/UserList";
import { getAllUserStart } from "../../../../utils/actions/userAction";
import { Popover } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import CommonLayout from "../../../Shared/commonLayout";

const GetAllUser = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { users, loading } = useSelector((state) => state.UserReducer);
  const { loggedInUser } = useSelector((state) => state.AuthReducer);

  useEffect(() => {
     dispatch(getAllUserStart(navigate));
  }, []);
  
  const AppComponent = CommonLayout(UserList);

  return (
    <div>
      <CommonLayout children={<UserList users={users} loading={loading} />}/>
      {/* <AppComponent users={users} loading={loading} /> */}
        
    </div>
  );
};

export default GetAllUser;
