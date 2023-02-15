import React, { useEffect } from "react";
import DashBoardContainer from "../../../Home/Dashboard";
import GetAllRequest from "./component";
import { useDispatch, useSelector } from "react-redux";
import { getAllRequestStart } from "../../../../utils/actions/requestActions";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../../../routes/constants";

const GetAllRequestContainer = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loggedInUser } = useSelector((state) => state.AuthReducer);
  const { requests, loading, error } = useSelector(
    (state) => state.RequestReducer
  );

  useEffect(() => {
    if (loggedInUser) {
      dispatch(getAllRequestStart());
    } else {
      navigate(ROUTES.LOGIN);
    }
  }, []);

  return (
    <div>
      <DashBoardContainer />
      <GetAllRequest requests={requests} loading={loading} error={error} />
    </div>
  );
};

export default GetAllRequestContainer;
