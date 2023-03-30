import React, { useEffect } from "react";
import DashBoardContainer from "../../../Home/Dashboard";
import GetAssignedAssets from "./component";
import { useDispatch, useSelector } from "react-redux";
import { assignedAssetsStart } from "../../../../utils/actions/userAssetAction";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../../../routes/constants";

const GetAssignedAssetsContainer = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loggedInUser } = useSelector((state) => state.AuthReducer);
  const { userAsset, loading } = useSelector((state) => state.UserAssetReducer);

  useEffect(() => {
    if (loggedInUser) {
      dispatch(assignedAssetsStart());
    }else{
      navigate(ROUTES.LOGIN)
    }
  }, []);



  return (
    <div>
      <DashBoardContainer />
      <GetAssignedAssets userAsset={userAsset} loading={loading}/>
    </div>
  );
};

export default GetAssignedAssetsContainer;
