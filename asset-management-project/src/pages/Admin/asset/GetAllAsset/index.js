import React, { useEffect } from "react";
import DashBoardContainer from "../../../Home/Dashboard";
import { useDispatch, useSelector } from "react-redux";
import { getAllAssetStart } from "../../../../utils/actions/assetActions";
import AssetList from "./component";

const GetAllAssetContainer = () => {
  const dispatch = useDispatch();
  const { loggedInUser } = useSelector((state) => state.AuthReducer);
  const {assets,loading} = useSelector(state=>state.AssetReducer);

  useEffect(() => {
    if (loggedInUser) {
      dispatch(getAllAssetStart());
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
