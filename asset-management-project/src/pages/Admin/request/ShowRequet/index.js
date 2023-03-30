import React from 'react';
import DashBoardContainer from "../../../Home/Dashboard";
import ViewRequest from './component';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ViewRequestContainer = () => {
    const {id} = useParams();

    const {requests} = useSelector(state => state.RequestReducer);

    const request = requests.find((item)=>item.id === parseInt(id));


  return (
    <div>
        <DashBoardContainer/>
        <ViewRequest request={request}/>
    </div>
  )
}

export default ViewRequestContainer