import * as types from "./actionTypes";


export const getAllVendorStart = () => ({
  type: types.LOAD_GETALL_VENDOR
});
export const getAllVendorSuccess = (vendors) => ({
  type: types.SUCCESS_GETALL_VENDOR,
  payload: vendors,
});
export const getAllVendorError = (error) => ({
  type: types.ERROR_GETALL_VENDOR,
  payload: error,
});



export const getVendorByIdStart = (vendorid) => ({
  type: types.LOAD_SINGLE_VENDOR,
  payload:vendorid
});
export const getVendorByIdSuccess = () => ({
  type: types.SUCCESS_SINGLE_VENDOR,
});
export const getVendorByIdError = (error) => ({
  type: types.ERROR_SINGLE_VENDOR,
  payload: error,
});


export const createVendorStart = (vendor,navigate) => ({
  type: types.LOAD_CREATE_VENDOR,
  payload:{vendor,navigate}
});
export const createVendorSuccess = (vendor) => ({
  type: types.SUCCESS_CREATE_VENDOR,
  payload: vendor,
});
export const createVendorError = (error) => ({
  type: types.ERROR_CREATE_VENDOR,
  payload: error,
});


export const updateVendorStart = (vendor,vendorId,navigate) => ({
  type: types.LOAD_UPDATE_VENDOR,
  payload:{vendor,vendorId,navigate}
});
export const updateVendorSuccess = (vendor,vendorId) => ({
  type: types.SUCCESS_UPDATE_VENDOR,
  payload: {vendor,vendorId},
});
export const updateVendorError = (error) => ({
  type: types.ERROR_UPDATE_VENDOR,
  payload: error,
});


export const deleteVendorStart = (vendorId,navigate) => ({
  type: types.LOAD_DELETE_VENDOR,
  payload:{vendorId,navigate},
});
export const deleteVendorSuccess = (vendorId) => ({
  type: types.SUCCESS_DELETE_VENDOR,
  payload: vendorId,
});
export const deleteVendorError = (error) => ({
  type: types.ERROR_DELETE_VENDOR,
  payload: error,
});