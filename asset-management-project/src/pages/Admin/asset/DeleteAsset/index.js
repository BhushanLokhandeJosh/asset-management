import React,{useEffect} from 'react';
import DashBoardContainer from "../../../Home/Dashboard";
import DeleteAsset from './component';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deleteAssetStart } from '../../../../utils/actions/assetActions';

const DeleteAssetContainer = () => {
    const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    console.log("In Delete")
    dispatch(deleteAssetStart(id,navigate));
  }, []);
  return (
    <div>
        <DashBoardContainer />
        <DeleteAsset/>
    </div>
  )
}

export default DeleteAssetContainer