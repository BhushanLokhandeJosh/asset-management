import React, { useEffect } from "react";
import ErrorPage from "./component";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logoutStart } from "../../../utils/actions/authActions";

const ErrorContainer = () => {
  const dispatch = useDispatch();
  const { error } = useSelector((state) => state.ErrorReducer);

  useEffect(() => {
    dispatch(logoutStart());
  }, []);

  return <ErrorPage error={error} />;
};

export default ErrorContainer;
