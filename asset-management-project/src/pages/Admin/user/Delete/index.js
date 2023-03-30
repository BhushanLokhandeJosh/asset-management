import React,{useEffect} from "react";
import { deleteUserStart } from "../../../../utils/actions/userAction";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import DashBoardContainer from "../../../Home/Dashboard"

const ChangeStatus = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    console.log("In Delete")
    dispatch(deleteUserStart(id,navigate));
  }, []);

  
  return (
    <div>
      <DashBoardContainer />
    </div>
  );
};

export default ChangeStatus;
