import * as types from "./actionTypes";

//getAllAssetAction
export const getAllAssetStart = () => ({
  type: types.LOAD_GETALL_ASSET
});

export const getAllAssetSuccess = (asset) => ({
  type: types.SUCCESS_GETALL_ASSET,
  payload: asset,
});

export const getAllAssetError = (error) => ({
  type: types.ERROR_GETALL_ASSET,
  payload: error,
});


//getAssetById
export const getAssetByIdStart = (id) => ({
  type: types.LOAD_SINGLE_ASSET,
  payload:id
});

export const getAssetByIdSuccess = () => ({
  type: types.SUCCESS_SINGLE_ASSET,

});

export const getAssetByIdError = (error) => ({
  type: types.ERROR_SINGLE_ASSET,
  payload: error,
});


//createUser
export const createAssetStart = (asset,navigate) => ({
  type: types.LOAD_CREATE_ASSET,
  payload:{asset,navigate}
});

export const createAssetSuccess = (asset) => ({
  type: types.SUCCESS_CREATE_ASSET,
  payload: asset,
});

export const createAssetError = (error) => ({
  type: types.ERROR_CREATE_ASSET,
  payload: error,
});

//updateAsset
export const updateAssetStart = (asset,assetId,navigate) => ({
  type: types.LOAD_UPDATE_ASSET,
  payload:{asset,assetId,navigate},
  
});

export const updateAssetSuccess = (asset,assetId) => ({
  type: types.SUCCESS_UPDATE_ASSET,
  payload: {asset,assetId},
});

export const updateAssetError = (error) => ({
  type: types.ERROR_UPDATE_ASSET,
  payload: error,
});

//deleteAsset
export const deleteAssetStart = (assetId,navigate) => ({
  type: types.LOAD_DELETE_ASSET,
  payload:assetId,
  navigate
});

export const deleteAssetSuccess = (assetId) => ({
  type: types.SUCCESS_DELETE_ASSET,
  payload: assetId,
});

export const deleteAssetError = (error) => ({
  type: types.ERROR_DELETE_ASSET,
  payload: error,
});