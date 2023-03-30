import * as types from "../../actions/actionTypes";

import {
  takeEvery,
  takeLatest,
  put,
  delay,
  call,
  take,
} from "redux-saga/effects";

import { ROUTES } from "../../../routes/constants";
import { toast } from "react-toastify";
import {
  allocateAssetToUserApi,
  assignedAssetApi,
  getUserAsset,
  updateUserAsset,
} from "../../../services/UserAsset.service";
import {
  allocateAssetError,
  allocateAssetSuccess,
  assignedAssetsError,
  assignedAssetsSuccess,
  getUserAssetError,
  getUserAssetSuccess,
  updateUserAssetError,
  updateUserAssetSuccess,
} from "../../actions/userAssetAction";

function* onAllocateAssetStartAsync(asset) {
  try {
    const response = yield call(
      allocateAssetToUserApi,
      asset.payload.assetObject
    );
    console.log("Response ===> ", response);
    if (response.status === 201) {
      yield delay(500);
      yield put(allocateAssetSuccess(asset.payload.assetObject.user_asset));
      yield toast.success("Asset Allocated Successfully...");
      yield asset.payload.navigate(ROUTES.GETALLREQUEST);
    }
  } catch (error) {
    yield put(allocateAssetError(error.message));
  }
}

function* onGetAllAssignedAssetStartAsync() {
  try {
    const response = yield call(assignedAssetApi);
    if (response.status === 200) {
      yield delay(500);
      console.log(response.data.data.user_assets[0]);
      yield put(assignedAssetsSuccess(response.data.data.user_assets));
    }
  } catch (error) {
    yield put(assignedAssetsError(error.message));
  }
}

function* onUpdateUserAssetStartAsync(userAssetInfo) {
  try {
    const response = yield call(
      updateUserAsset,
      userAssetInfo.payload.userasset,
      userAssetInfo.payload.userId
    );
    if (response.status === 200) {
      yield delay(500);
      console.log(userAssetInfo.payload.userasset.user_asset);
      yield put(
        updateUserAssetSuccess(
          userAssetInfo.payload.userasset.user_asset,
          userAssetInfo.payload.userId
        )
      );
      yield userAssetInfo.payload.navigate(ROUTES.GETASSIGNEDASSETS)
    }
  } catch (error) {
    yield put(updateUserAssetError(error.message));
  }
}

function* onGetUserAssetStartAsync(userAsset) {
  try {
    const response = yield call(getUserAsset, userAsset.payload);
    if (response.status === 200) {
      yield delay(500);
      console.log("checking test 1",[response.data.data]);
      yield put(getUserAssetSuccess([response.data.data]));
    }
  } catch (error) {
    yield put(getUserAssetError(error.message));
  }
}

export function* onAllocateAsset() {
  yield takeEvery(types.LOAD_ALLOCATE_ASSET, onAllocateAssetStartAsync);
}

export function* onAssignedAssets() {
  yield takeEvery(
    types.LOAD_GETASSIGNED_ASSETS,
    onGetAllAssignedAssetStartAsync
  );
}

export function* onUpdateUserAsset() {
  yield takeEvery(types.LOAD_UPDATEUSER_ASSET, onUpdateUserAssetStartAsync);
}

export function* onGetUserAsset() {
  yield takeEvery(types.LOAD_GETUSER_ASSET, onGetUserAssetStartAsync);
}
