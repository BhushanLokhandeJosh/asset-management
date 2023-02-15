import React from 'react';
import DashBoardContainer from "../../../Home/Dashboard";
import ViewInfo from "./component/ViewInfo";
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

const ViewUser = () => {
    const {id} = useParams();
    const {users} = useSelector(state => state.UserReducer);
    const currentUser = users.find((item)=>item.id === parseInt(id));
    console.log(currentUser);

  return (
    <div>
        <DashBoardContainer/>
        <ViewInfo user={currentUser}/>
    </div>
  )
}

export default ViewUser