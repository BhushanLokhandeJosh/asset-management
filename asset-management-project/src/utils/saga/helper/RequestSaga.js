


import * as types from "../../actions/actionTypes";

import { takeEvery, put, delay, call } from "redux-saga/effects";

import { ROUTES } from "../../../routes/constants";
import { toast } from "react-toastify";
import { createRequestApi, deleteRequestByIdApi, getAllRequestsApi, getRequestById, updateRequestByIdApi } from "../../../services/Request.service";
import { createRequestError, createRequestSuccess, deleteRequestError, deleteRequestSuccess, getAllRequestError, getAllRequestSuccess, requestStatusError, requestStatusSuccess, updateRequestError, updateRequestSuccess } from "../../actions/requestActions";

function* onGetAllRequestStartAsync(){

    try {
    const response = yield call(getAllRequestsApi);
    if (response.status === 200) {
      yield delay(500);
      yield put(getAllRequestSuccess(response.data.data.requests));
    }
  } catch (error) {
    yield put(getAllRequestError(error.message));
  }
}

function* onGetRequestStartAsync(user){
  try {
    const response = yield call(getRequestById,user.payload);
    if (response.status === 200) {
      yield delay(500);
      yield put(requestStatusSuccess(response.data.data.user_requests));
    }
  } catch (error) {
    yield put(requestStatusError(error.message));
  }
}


function* onCreateRequestStartAsync(request){
    try {
    const response = yield call(createRequestApi, request.payload.request,request.payload.loginId);
    if (response.status === 201) {
      yield delay(500);
      yield put(createRequestSuccess(request.payload,request.loginId));
      yield toast.success("Request Created Successfully...");
      yield request.payload.navigate(ROUTES.DASHBOARD);
    }
  } catch (error) {
    yield put(createRequestError(error.message));
  }
}

function* onUpdateRequestStartAsync(action){
    try {
    const response = yield call(
      updateRequestByIdApi,
      action.payload.request,
      action.payload.requestId
    );
    if (response.status === 200) {
      yield delay(500);
      yield put(
        updateRequestSuccess(
          action.payload.request.request,
          action.payload.requestId
        )
      );
      yield toast.success("Request Updated Successfully...");
      yield action.payload.navigate(ROUTES.GETALLREQUEST);
    }
  } catch (error) {
    yield put(updateRequestError(error.message));
  }
}


function* onDeleteRequestStartAsync(request){
    try {
    if (window.confirm("Are you sure you want to delete Asset?")) {
      const response = yield call(deleteRequestByIdApi, request.payload);
      console.log("Response ===> ", response);
      if (response.status === 200) {
        yield delay(500);
        yield put(deleteRequestSuccess(request.payload));
        yield toast.success("Request is Deleted Successfully...");
        yield request.navigate(ROUTES.GETALLREQUEST);
      }
    }else{
      request.navigate(ROUTES.GETALLREQUEST);
    }
  } catch (error) {
    yield put(deleteRequestError(error.message));
  }
}






export function* onGetAllRequests() {
  yield takeEvery(types.LOAD_GETALL_REQUEST, onGetAllRequestStartAsync);
}

export function* onGetSingleRequest() {
  yield takeEvery(types.LOAD_REQUEST_STATUS, onGetRequestStartAsync);
}

export function* onCreateRequest() {
  yield takeEvery(types.LOAD_CREATE_REQUEST, onCreateRequestStartAsync);
}

export function* onUpdateRequest() {
  yield takeEvery(types.LOAD_UPDATE_REQUEST, onUpdateRequestStartAsync);
}

export function* onDeleteRequest() {
  yield takeEvery(types.LOAD_DELETE_REQUEST, onDeleteRequestStartAsync);
}
