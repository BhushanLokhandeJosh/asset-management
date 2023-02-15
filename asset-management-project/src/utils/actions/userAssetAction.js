import * as types from "./actionTypes";

export const allocateAssetStart = (assetObject,navigate) => ({
    type:types.LOAD_ALLOCATE_ASSET,
    payload:{assetObject,navigate}
})


export const allocateAssetSuccess = (assetObject) => ({
    type:types.SUCCESS_ALLOCATE_ASSET,
    payload:assetObject
})

export const allocateAssetError = (error) => ({
    type:types.ERROR_ALLOCATE_ASSET,
    payload:error
})


export const assignedAssetsStart = () => ({
    type:types.LOAD_GETASSIGNED_ASSETS
})
export const assignedAssetsSuccess = (userAssets) => ({
    type:types.SUCCESS_GETASSIGNED_ASSETS,
    payload:userAssets
})
export const assignedAssetsError = (error) => ({
    type:types.ERROR_GETASSIGNED_ASSETS,
    payload:error
})



export const updateUserAssetStart = (userasset,userId,navigate) => ({
    type:types.LOAD_UPDATEUSER_ASSET,
    payload:{userasset,userId,navigate}
})
export const updateUserAssetSuccess = (userasset,userId) => ({
    type:types.SUCCESS_UPDATEUSER_ASSET,
    payload:{userasset,userId}
})
export const updateUserAssetError = (error) => ({
    type:types.ERROR_UPDATEUSER_ASSET,
    payload:error
})


export const getUserAssetStart = (userId) => ({
    type:types.LOAD_GETUSER_ASSET,
    payload:userId
})
export const getUserAssetSuccess = (userasset) => ({
    type:types.SUCCESS_GETUSER_ASSET,
    payload:userasset
})
export const getUserAssetError = (error) => ({
    type:types.ERROR_GETUSER_ASSET,
    payload:error
})