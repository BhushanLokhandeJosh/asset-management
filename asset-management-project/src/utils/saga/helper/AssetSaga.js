import {
  getAssetApi,
  getAssetByIdApi,
  createAssetApi,
  updateAssetByIdApi,
  deleteAssetByIdApi,
} from "../../../services/Asset.service";

import * as types from "../../actions/actionTypes";

import { takeEvery, takeLatest, put, delay, call } from "redux-saga/effects";

import {
  createAssetError,
  createAssetSuccess,
  deleteAssetError,
  deleteAssetSuccess,
  getAllAssetError,
  getAllAssetSuccess,
  getAssetByIdError,
  getAssetByIdSuccess,
  updateAssetError,
  updateAssetSuccess,
} from "../../actions/assetActions";

import { ROUTES } from "../../../routes/constants";
import { toast } from "react-toastify";
import ErrorPage from "../../../pages/Home/Error/component";

function* onGetAllAssetStartAsync(asset) {
  try {
    const response = yield call(getAssetApi);
    if (response.status === 200) {
      yield delay(500);
      yield put(getAllAssetSuccess(response.data.data.assets));
    }
  } catch (error) {
    console.log(error);
    // Request failed with status code 401'
    // error.response.data ==> 'You need to sign in or sign up before continuing.
    yield put(getAllAssetError(error));
    yield asset.payload(ROUTES.ERROR)
  }
}

function* onGetAssetStartAsync(assetId) {
  try {
    const response = yield call(getAssetByIdApi, assetId.payload);
    console.log("Response ===> ", response);
    if (response) {
      yield delay(500);
      yield put(getAssetByIdSuccess());
    }
  } catch (error) {
    yield put(getAssetByIdError(error.message));
  }
}

function* onCreateAssetStartAsync(asset) {
  try {
    const response = yield call(createAssetApi, asset.payload.asset);
    if (response.status === 201) {
      yield delay(500);
      yield put(createAssetSuccess(asset.payload.asset));
      yield toast.success("Asset Created Successfully...");
      yield asset.payload.navigate(ROUTES.GETALLASSET);
    }
  } catch (error) {
    yield put(createAssetError(error.message));
  }
}

function* onUpdateAssetStartAsync(assetInfo) {
  try {
    const response = yield call(
      updateAssetByIdApi,
      assetInfo.payload.asset.asset,
      assetInfo.payload.assetId
    );
    console.log("Response ===> ", response);
    if (response.status === 200) {
      yield delay(500);
      yield put(
        updateAssetSuccess(
          assetInfo.payload.asset.asset,
          assetInfo.payload.assetId
        )
      );
      yield toast.success("Asset Updated Successfully...");
      yield assetInfo.payload.navigate(ROUTES.GETALLASSET);
    }
  } catch (error) {
    yield put(updateAssetError(error.message));
    yield assetInfo.navigate(ROUTES.ERROR)
  }
}

function* onDeleteAssetStartAsync(asset) {
  try {
    if (window.confirm("Are you sure you want to delete Asset?")) {
      const response = yield call(deleteAssetByIdApi, asset.payload);
      console.log("Response ===> ", response);
      if (response.status === 200) {
        yield delay(500);
        yield put(deleteAssetSuccess(asset.payload));
        yield toast.success("Asset is Deleted Successfully...");
        yield asset.navigate(ROUTES.GETALLASSET);
      }
    }else{
      asset.navigate(ROUTES.GETALLASSET);
    }
  } catch (error) {
    yield put(deleteAssetError(error.message));
  }
}

export function* onGetAllAssets() {
  yield takeEvery(types.LOAD_GETALL_ASSET, onGetAllAssetStartAsync);
}

export function* onGetSingleAsset() {
  yield takeEvery(types.LOAD_SINGLE_ASSET, onGetAssetStartAsync);
}

export function* onCreateAsset() {
  yield takeEvery(types.LOAD_CREATE_ASSET, onCreateAssetStartAsync);
}

export function* onUpdateAsset() {
  yield takeEvery(types.LOAD_UPDATE_ASSET, onUpdateAssetStartAsync);
}

export function* onDeleteAsset() {
  yield takeEvery(types.LOAD_DELETE_ASSET, onDeleteAssetStartAsync);
}
