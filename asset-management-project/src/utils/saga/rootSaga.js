

import { fork,all } from "redux-saga/effects";
import { onLoginUsers, onLogoutUsers, onSignUpUsers } from "./helper/userSaga";


const rootSagas = [
  fork(onLoginUsers),
  fork(onLogoutUsers),
  fork(onSignUpUsers),
];

export default function* rootSaga() {
  yield all([...rootSagas]);
}