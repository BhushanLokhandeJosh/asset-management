import React, { useEffect } from "react";
import UnAuthorize from "./component";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logoutStart } from "../../../utils/actions/authActions";

const UnAuthorizeContainer = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const goBack = () => navigate(-1);

  useEffect(() => {
    dispatch(logoutStart());
  }, []);

  return (
    <div>
      <UnAuthorize goBack={goBack} />
    </div>
  );
};

export default UnAuthorizeContainer;
