import React, { useEffect } from "react";
import DashBoardContainer from "../../../Home/Dashboard";
import UpdateRequest from "./component";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllRequestStart } from "../../../../utils/actions/requestActions";
import Spinner from "react-bootstrap/Spinner";

const UpdateRequestContainer = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  let { id } = useParams();
  const { requests, loading } = useSelector((state) => state.RequestReducer);

  const updateRequest = requests.find((item) => item.id === parseInt(id));

  return (
    <div>
          <DashBoardContainer />
          <UpdateRequest
            dispatch={dispatch}
            requestId = {id}
            updateRequest={updateRequest}
            navigate={navigate}
          />
    </div>
  );
};

export default UpdateRequestContainer;
