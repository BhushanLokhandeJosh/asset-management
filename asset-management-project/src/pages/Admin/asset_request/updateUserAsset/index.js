import React from "react";
import DashBoardContainer from "../../../Home/Dashboard";
import UpdateUserAsset from "./component";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

const UpdateUserAssetContainer = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { userAsset, loading } = useSelector((state) => state.UserAssetReducer);

  const updateUserAsset = userAsset.find((item) => item.id === parseInt(id));


  const UpdateObjectValues = (updateUserAsset, values) => {
    updateUserAsset.delivered_date = values.delivered_date;
    updateUserAsset.return_date = values.return_date;
    updateUserAsset.user.status = values.status;
    updateUserAsset.is_active = values.status;

    return updateUserAsset;
  };


  return (
    <div>
      <DashBoardContainer />
      <UpdateUserAsset
      UpdateObjectValues= {UpdateObjectValues}
        updateUserAsset={updateUserAsset}
        loading={loading}
        navigate={navigate}
        dispatch={dispatch}
      />
    </div>
  );
};

export default UpdateUserAssetContainer;
