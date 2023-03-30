import React,{useEffect} from 'react';
import DashBoardContainer from "../../Home/Dashboard/index.js"
import CheckAssetStatus from './component/index.js';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import {requestStatusStart} from "../../../utils/actions/requestActions.js"

const CheckAssetStatusContainer = () => {
  const {id} = useParams();
  const dispatch = useDispatch();
  const { loggedInUser } = useSelector((state) => state.AuthReducer);
  const { requests, loading } = useSelector(
    (state) => state.RequestReducer
  );
  console.log(requests);

  useEffect(()=>{
    if(loggedInUser)
    dispatch(requestStatusStart(id))
  },[])

  return (
    <div>
        <DashBoardContainer/>
        <CheckAssetStatus requests={requests} loading={loading}/>
    </div>
  )
}

export default CheckAssetStatusContainer;