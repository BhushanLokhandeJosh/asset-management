import { loginUserApi, signoutUserApi } from "../../../services/Auth.service";
import * as types from "../../actions/actionTypes";

import { takeEvery, put, delay, call } from "redux-saga/effects";
import {
  loginError,
  loginSuccess,
  logoutError,
  logoutSuccess,
  
} from "../../actions/authActions";
import { removeToken, saveToken } from "../../../services/AuthUser";
import { ROUTES } from "../../../routes/constants";
import { toast } from "react-toastify";

function* onLoginUserStartAsync(user) {
  try {
    const response = yield call(loginUserApi, user.payload);
    if (response.status === 200) {
      yield delay(500);
      yield saveToken(response.data.status.data, response.headers.authorization);
      yield put(loginSuccess(response.data.status.data,response.headers.authorization));
      yield user.navigate(ROUTES.DASHBOARD);
      yield toast.success("Logged In Successfully...");
    }
  } catch (error) {
    yield put(loginError(error.message));
  }
}

function* onLogoutUserStartAsync() {
  try {
    const response = yield call(signoutUserApi);
    if (response.status === 200) {
      yield delay(500);
      yield removeToken();
      yield put(logoutSuccess());
      yield toast.success("Logged Out Successfully...");
    }
  } catch (error) {
    yield put(logoutError(error.message));
  }
}



export function* onLoginUsers() {
  yield takeEvery(types.LOAD_USER_LOGIN, onLoginUserStartAsync);
}

export function* onLogoutUsers() {
  yield takeEvery(types.LOAD_USER_SIGNOUT, onLogoutUserStartAsync);
}


