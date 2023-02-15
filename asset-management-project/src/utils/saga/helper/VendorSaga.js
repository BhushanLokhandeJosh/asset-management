import { call, delay, put, takeEvery } from "redux-saga/effects";
import * as types from "../../actions/actionTypes";
import {
  createVendorApi,
  deleteVendorByIdApi,
  getVendorByIdApi,
  getVendorsApi,
  updateVendorByIdApi,
} from "../../../services/Vendor.service";
import {
  createVendorError,
  createVendorSuccess,
  deleteVendorError,
  deleteVendorSuccess,
  getAllVendorError,
  getAllVendorSuccess,
  getVendorByIdError,
  getVendorByIdSuccess,
  updateVendorError,
  updateVendorSuccess,
} from "../../actions/vendorActions";
import { ROUTES } from "../../../routes/constants";
import { toast } from "react-toastify";

function* onGetAllVendorStartAsync() {
  try {
    const response = yield call(getVendorsApi);
    if (response.status === 200) {
      yield delay(500);
      console.log(response.data.data.vendors);
      yield put(getAllVendorSuccess(response.data.data.vendors));
    }
  } catch (error) {
    yield put(getAllVendorError(error.message));
  }
}

function* onGetVendorStartAsync(vendorId) {
  try {
    const response = yield call(getVendorByIdApi, vendorId.payload);
    console.log("Response ===> ", response);
    if (response) {
      yield delay(500);
      yield put(getVendorByIdSuccess());
    }
  } catch (error) {
    yield put(getVendorByIdError(error.message));
  }
}

function* onCreateVendorStartAsync(vendor) {
  try {
    const response = yield call(createVendorApi, vendor.payload.vendor);
    console.log("Response ===> ", response);
    if (response.status === 201) {
      yield delay(500);
      yield put(createVendorSuccess(vendor.payload.vendor));
      yield toast.success("Asset Created Successfully...");
      yield vendor.payload.navigate(ROUTES.GETALLVENDORS);
    }
  } catch (error) {
    yield put(createVendorError(error.message));
  }
}

function* onUpdateVendorStartAsync(vendorInfo) {
  try {
    const response = yield call(
      updateVendorByIdApi,
      vendorInfo.payload.vendor,
      vendorInfo.payload.vendorId
    );
    console.log("Response ===> ", response);
    if (response.status === 200) {
      yield delay(500);
      yield put(
        updateVendorSuccess(
          vendorInfo.payload.vendor,
          vendorInfo.payload.vendorId
        )
      );
      yield toast.success("Asset Updated Successfully...");
      yield vendorInfo.payload.navigate(ROUTES.GETALLVENDORS);
    }
  } catch (error) {
    yield put(updateVendorError(error.message));
  }
}

function* onDeleteVendorStartAsync(vendor) {
    try {
      const response = yield call(deleteVendorByIdApi, vendor.payload);
      console.log("Response ===> ", response);
      if (response.status === 200) {
        yield delay(500);
        yield put(deleteVendorSuccess(vendor.payload));
        yield toast.success("Asset is Deleted Successfully...");
        yield vendor.navigate(ROUTES.GETALLVENDORS);
      }
  } catch (error) {
    yield put(deleteVendorError(error.message));
  }
}

export function* onGetAllVendors() {
  yield takeEvery(types.LOAD_GETALL_VENDOR, onGetAllVendorStartAsync);
}

export function* onGetSingleVendor() {
  yield takeEvery(types.LOAD_SINGLE_VENDOR, onGetVendorStartAsync);
}

export function* onCreateVendor() {
  yield takeEvery(types.LOAD_CREATE_VENDOR, onCreateVendorStartAsync);
}

export function* onUpdateVendor() {
  yield takeEvery(types.LOAD_UPDATE_VENDOR, onUpdateVendorStartAsync);
}

export function* onDeleteVendor() {
  yield takeEvery(types.LOAD_DELETE_VENDOR, onDeleteVendorStartAsync);
}
