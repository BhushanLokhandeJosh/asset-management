import React from 'react';
import DashBoardContainer from "../../../Home/Dashboard";
import ViewAsset from './component';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ViewAssetContainer = () => {
    const {id} =useParams();
    const {assets} = useSelector((state)=>state.AssetReducer);
    const currentAsset = assets.find((item) => item.id === parseInt(id));

  return (
    <div>
        <DashBoardContainer/>
        <ViewAsset asset={currentAsset}/>
    </div>
  )
}

export default ViewAssetContainer