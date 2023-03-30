import React,{useEffect} from 'react';
import DashBoardContainer from "../../../Home/Dashboard";
import ViewAssignedAsset from './component';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getUserAssetStart } from '../../../../utils/actions/userAssetAction';

const ViewAssignedAssetContainer = () => {
  const {id} = useParams();
  const dispatch = useDispatch();
  const {loggedInUser } = useSelector((state) => state.UserReducer);
  const { assignedAsset, loading } = useSelector((state) => state.UserAssetReducer);

  useEffect(() => {
    if(loggedInUser){
      dispatch(getUserAssetStart(id))
    }
  }, [])

  const activeAsset = assignedAsset[0]?.active_assets;
  const inActiveAsset = assignedAsset[0]?.inactive_assets;

  console.log(assignedAsset[0]?.active_assets);
  console.log(assignedAsset[0]?.inactive_assets)

  return (
    <div>
        <DashBoardContainer/>
        <ViewAssignedAsset activeAsset={activeAsset} inActiveAsset={inActiveAsset} loading={loading}/>
    </div>
  )
}

export default ViewAssignedAssetContainer;