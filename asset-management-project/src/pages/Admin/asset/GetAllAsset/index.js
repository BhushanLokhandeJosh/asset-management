import React, { useEffect } from "react";
import DashBoardContainer from "../../../Home/Dashboard";
import { useDispatch, useSelector } from "react-redux";
import { getAllAssetStart } from "../../../../utils/actions/assetActions";
import AssetList from "./component";
import { useNavigate } from "react-router-dom";

const GetAllAssetContainer = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loggedInUser } = useSelector((state) => state.AuthReducer);
  const {assets,loading} = useSelector(state=>state.AssetReducer);

  useEffect(() => {
    if (loggedInUser) {
      dispatch(getAllAssetStart(navigate));
    }
  }, []);

  return (
    <div>
      <DashBoardContainer />
      <AssetList assets={assets} loading={loading}/>
    </div>
  );
};

export default GetAllAssetContainer;
