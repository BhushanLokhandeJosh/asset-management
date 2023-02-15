import React from "react";
import * as types from "../actions/actionTypes";
import { initialState } from "./initialState";

const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOAD_USER_LOGIN:
    case types.LOAD_USER_REGISTER:
    case types.LOAD_USER_SIGNOUT:
      return { ...state, loading: true };

    case types.SUCCESS_USER_LOGIN:
      return {
        ...state,
        loading: false,
        loggedInUser: action.payload.user,
        loggedInUserToken: action.payload.token,
      };

    case types.SUCCESS_USER_REGISTER:
      return {
        ...state,
        loading: false,
        users: [...state.users, action.payload],
      };

    case types.SUCCESS_USER_SIGNOUT:
      return {
        ...state,
        loading: false,
        loggedInUser: {},
        loggedInUserToken: {},
      };

    default:
      return state;
  }
};

export default AuthReducer;
