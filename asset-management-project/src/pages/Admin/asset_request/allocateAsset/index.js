import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getAllAssetStart } from "../../../../utils/actions/assetActions";
import DashBoardContainer from "../../../Home/Dashboard";
import AllocateAsset from "./component";

const AllocateAssetContainer = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getAllAssetStart());
  }, []);

  const { requests } = useSelector((state) => state.RequestReducer);

  const { assets, loading } = useSelector((state) => state.AssetReducer);

  //from requestid finding out userId & userName
  const currentRequest = requests.find((item) => item.id === parseInt(id));


  return (
    <div>
       <DashBoardContainer />
      {loading ? (
        <h2>Loading...</h2>
      ) : (
          <AllocateAsset
            userId={currentRequest.user_id}
            userName={currentRequest.user.name}
            userEmail={currentRequest.user.email}
            assets={assets}
            dispatch={dispatch}
            navigate={navigate}
          />
      )}
    </div>
  );
};

export default AllocateAssetContainer;
