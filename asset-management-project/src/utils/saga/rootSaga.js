

import { fork,all } from "redux-saga/effects";
import { onLoginUsers, onLogoutUsers } from "./helper/AuthSaga";
import { onCreateUser, onDeleteUser, onGetAllUsers, onGetSingleUser, onUpdateUser, onUpdateUserProfile } from "./helper/UserSaga";
import { onCreateAsset, onDeleteAsset, onGetAllAssets, onGetSingleAsset, onUpdateAsset } from "./helper/AssetSaga";
import { onCreateRequest, onDeleteRequest, onGetAllRequests, onGetSingleRequest, onUpdateRequest } from "./helper/RequestSaga";
import { onAllocateAsset, onAssignedAssets, onGetUserAsset, onUpdateUserAsset } from "./helper/UserAssetSaga";
import { onCreateVendor, onDeleteVendor, onGetAllVendors, onGetSingleVendor, onUpdateVendor } from "./helper/VendorSaga";


const rootSagas = [
  fork(onLoginUsers),
  fork(onLogoutUsers),
  fork(onGetAllUsers),
  fork(onGetSingleUser),
  fork(onUpdateUser),
  fork(onUpdateUserProfile),
  fork(onCreateUser),
  fork(onDeleteUser),
  fork(onGetAllAssets),
  fork(onGetSingleAsset),
  fork(onCreateAsset),
  fork(onUpdateAsset),
  fork(onDeleteAsset),
  fork(onGetAllRequests),
  fork(onGetSingleRequest),
  fork(onCreateRequest),
  fork(onUpdateRequest),
  fork(onDeleteRequest),
  fork(onAllocateAsset),
  fork(onAssignedAssets),
  fork(onUpdateUserAsset),
  fork(onGetUserAsset),
  fork(onGetAllVendors),
  fork(onGetSingleVendor),
  fork(onCreateVendor),
  fork(onUpdateVendor),
  fork(onDeleteVendor)
];

export default function* rootSaga() {
  yield all([...rootSagas]);
}