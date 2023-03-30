import React,{useEffect} from 'react';
import DashBoardContainer from "../../../Home/Dashboard";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import GetAllVendors from './component';
import { getAllVendorStart } from '../../../../utils/actions/vendorActions';
import { ROUTES } from '../../../../routes/constants';

const GetAllVendorsContainer = () => {
   const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loggedInUser } = useSelector((state) => state.AuthReducer);
  const {vendors,loading} = useSelector((state)=>state.VendorReducer);

  useEffect(() => {
    if(loggedInUser){
      dispatch(getAllVendorStart())
    }else{
      navigate(ROUTES.LOGIN)
    }
  }, [])
  
  return (
    <div>
      <DashBoardContainer/>
      <GetAllVendors vendors={vendors} loading={loading}/>
    </div>
  )
}

export default GetAllVendorsContainer