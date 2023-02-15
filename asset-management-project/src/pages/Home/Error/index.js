import React from "react";
import ErrorPage from "./component";
import { useSelector } from "react-redux";

const ErrorContainer = () => {

    const {error} = useSelector(state => state.ErrorReducer);
    
  return <ErrorPage error={error} />;
};

export default ErrorContainer;
