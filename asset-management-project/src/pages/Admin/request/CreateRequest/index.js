import React from 'react';
import DashBoardContainer from "../../../Home/Dashboard";
import CreateRequest from './component';
import { useSelector } from 'react-redux';

const CreateRequestContainer = () => {
  const {loggedInUser} = useSelector(state => state.AuthReducer);
  const loginId = loggedInUser.id;
  return (
    <div>
        <DashBoardContainer/>
        <CreateRequest loginId={loginId}/>
    </div>
  )
}

export default CreateRequestContainer