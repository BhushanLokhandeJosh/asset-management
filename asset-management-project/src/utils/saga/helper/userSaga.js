import { loginUserApi } from "../../../services/Auth.service";
import * as types from "../../actions/actionTypes";

import {
  take,
  takeEvery,
  takeLatest,
  put,
  all,
  delay,
  fork,
  call,
} from "redux-saga/effects";
import { loginError, loginSuccess } from "../../actions/authActions";
import AuthUser from "../../../services/AuthUser";

function* onLoginUserStartAsync(user) {
  try {
    const response = yield call(loginUserApi, user.payload);
    if (response.status === 200) {
      yield delay(500);
      yield put(loginSuccess());
    }
  } catch (error) {
    yield put(loginError(error.message));
  }
}

function* onLogoutUserStartAsync() {}

function* onSignUpUserStartAsync() {}

export function* onLoginUsers() {
  yield takeEvery(types.LOAD_USER_LOGIN, onLoginUserStartAsync);
}

export function* onLogoutUsers() {
  yield takeEvery(types.LOAD_USER_SIGNOUT, onLogoutUserStartAsync);
}

export function* onSignUpUsers() {
  yield takeEvery(types.LOAD_USER_REGISTER, onSignUpUserStartAsync);
}
