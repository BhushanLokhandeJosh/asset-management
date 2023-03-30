import React from 'react'
import { useDispatch } from 'react-redux';
import DashBoardContainer from "../../../Home/Dashboard";
import { useNavigate } from 'react-router-dom';
import CreateVendor from './component';

const CreateVendorContainer = () => {
  const dispatch = useDispatch();
  const navigate= useNavigate()
  return (
    <div>
    <DashBoardContainer/>
    <CreateVendor dispatch={dispatch} navigate={navigate}/>
    </div>
  )
}

export default CreateVendorContainer