import * as types from "./actionTypes";

//get all requests
export const getAllRequestStart = () => ({
  type: types.LOAD_GETALL_REQUEST,
});

export const getAllRequestSuccess = (requests) => ({
  type: types.SUCCESS_GETALL_REQUEST,
  payload: requests,
});

export const getAllRequestError = (error) => ({
  type: types.ERROR_GETALL_REQUEST,
  payload: error,
});

//create request
export const createRequestStart = (request, loginId, navigate) => ({
  type: types.LOAD_CREATE_REQUEST,
  payload: { request, loginId, navigate },
});

export const createRequestSuccess = (request, userId) => ({
  type: types.SUCCESS_CREATE_REQUEST,
  payload: { request, userId },
});

export const createRequestError = (error) => ({
  type: types.ERROR_CREATE_REQUEST,
  payload: error,
});

//update request
export const updateRequestStart = (request, requestId, navigate) => ({
  type: types.LOAD_UPDATE_REQUEST,
  payload: { request, requestId, navigate },
});

export const updateRequestSuccess = (request, requestId) => ({
  type: types.SUCCESS_UPDATE_REQUEST,
  payload: { request, requestId },
});

export const updateRequestError = (error) => ({
  type: types.ERROR_UPDATE_REQUEST,
  payload: error,
});

//delete request ==> change status only...
export const deleteRequestStart = (requestId, navigate) => ({
  type: types.LOAD_DELETE_REQUEST,
  payload: requestId,
  navigate,
});

export const deleteRequestSuccess = (requestId) => ({
  type: types.SUCCESS_DELETE_REQUEST,
  payload: requestId,
});

export const deleteRequestError = (error) => ({
  type: types.ERROR_DELETE_REQUEST,
  payload: error,
});

//request status
export const requestStatusStart = (userId) => ({
  type: types.LOAD_REQUEST_STATUS,
  payload: userId,
});

export const requestStatusSuccess = (requests) => ({
  type: types.SUCCESS_REQUEST_STATUS,
  payload: requests,
});

export const requestStatusError = (error) => ({
  type: types.ERROR_REQUEST_STATUS,
  payload: error,
});
