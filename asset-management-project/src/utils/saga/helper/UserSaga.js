import {
  createUserApi,
  deleteUserByIdApi,
  getUserApi,
  getUserByIdApi,
  updateUserByIdApi,
} from "../../../services/User.service";
import * as types from "../../actions/actionTypes";
import { takeEvery, put, delay, call } from "redux-saga/effects";
import {
  createUserError,
  createUserSuccess,
  deleteUserError,
  deleteUserSuccess,
  getAllUserError,
  getAllUserSuccess,
  getUserByIdError,
  getUserByIdSuccess,
  updateUserError,
  updateUserProfileError,
  updateUserProfileSuccess,
  updateUserSuccess,
} from "../../actions/userAction";
import { ROUTES } from "../../../routes/constants";
import { toast } from "react-toastify";

function* onGetAllUserStartAsync(action) {
  try {
    const response = yield call(getUserApi);
    
    if (response.status === 200) {
      yield delay(500);
      yield put(getAllUserSuccess(response.data.data.users));
    }
  } catch (error) {
    yield put(getAllUserError(error.message));
    yield action.payload(ROUTES.ERROR);
  }
}

function* onGetUserStartAsync(userId) {
  try {
    const response = yield call(getUserByIdApi,userId.payload);
    if (response.status === 200) {
      yield delay(500);
      console.log(response.data.data.user)
      yield put(getUserByIdSuccess(response.data.data.user));
    }
  } catch (error) {
    yield put(getUserByIdError(error.message));
  }
}

function* onCreateUserStartAsync(user) {
  try {
    const response = yield call(createUserApi,user.payload.user);
    console.log("Response ===> ", response);
    if (response) {
      yield delay(500);
      yield put(createUserSuccess(response));
      yield toast.success("User Created Successfully...")
      yield user.payload.navigate(ROUTES.GETALLUSER);
    }
  } catch (error) {
    console.log(error.payload)
    yield put(createUserError(error.message));
  }
}

function* onUpdateUserStartAsync(userInfo) {
    try {
    const response = yield call(updateUserByIdApi,userInfo.payload.user,userInfo.payload.userId);
    if (response.status === 200) {
      yield delay(500);
      yield put(updateUserSuccess(userInfo.payload.user,userInfo.payload.userId));
      yield toast.success("User Updated Successfully...");
      yield userInfo.payload.navigate(ROUTES.GETALLUSER);
    }
  } catch (error) {
    yield put(updateUserError(error.message));
  }
}

function* onUpdateUserProfileStartAsync(userInfo) {
    try {
    const response = yield call(updateUserByIdApi,userInfo.payload.user,userInfo.payload.userId);
    if (response.status === 200) {
      yield delay(500);
      yield put(updateUserProfileSuccess(userInfo.payload.user.user));
      yield toast.success("User Updated Successfully...");
      yield userInfo.payload.navigate(ROUTES.DASHBOARD);
    }
  } catch (error) {
    yield put(updateUserProfileError(error.message));
  }
}

function* onDeleteUserStartAsync(user) {
    try {
    const response = yield call(deleteUserByIdApi,user.payload.userId);
    if (response.status === 200) {
      yield delay(500);
      yield put(deleteUserSuccess(user.payload));
      yield toast.success("User is inactivated...");
      yield user.payload.navigate(ROUTES.GETALLUSER);
    }
  } catch (error) {
    yield put(deleteUserError(error.message));
  }
}





export function* onGetAllUsers() {
  yield takeEvery(types.LOAD_GETALL_USER, onGetAllUserStartAsync);
}

export function* onGetSingleUser() {
  yield takeEvery(types.LOAD_SINGLE_USER, onGetUserStartAsync);
}

export function* onCreateUser() {
  yield takeEvery(types.LOAD_CREATE_USER, onCreateUserStartAsync);
}

export function* onUpdateUser() {
  yield takeEvery(types.LOAD_UPDATE_USER, onUpdateUserStartAsync);
}

export function* onUpdateUserProfile() {
  yield takeEvery(types.LOAD_UPDATE_USERPROFILE, onUpdateUserProfileStartAsync);
}

export function* onDeleteUser() {
  yield takeEvery(types.LOAD_DELETE_USER, onDeleteUserStartAsync);
}
