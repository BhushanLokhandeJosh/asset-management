import * as types from "../actions/actionTypes";
import { initialState } from "./initialState";

const ErrorReducer = (state = initialState,action) => {
    switch(action.type){
    case types.ERROR_CREATE_ASSET:
    case types.ERROR_DELETE_ASSET:
    case types.ERROR_GETALL_ASSET:
    case types.ERROR_SINGLE_ASSET:
    case types.ERROR_UPDATE_ASSET:
    case types.ERROR_USER_LOGIN:
    case types.ERROR_USER_REGISTER:
    case types.ERROR_USER_SIGNOUT:
    case types.ERROR_CREATE_REQUEST:
    case types.ERROR_DELETE_REQUEST:
    case types.ERROR_GETALL_REQUEST:
    case types.ERROR_SINGLE_REQUEST:
    case types.ERROR_UPDATE_REQUEST:
    case types.ERROR_ALLOCATE_ASSET:
    case types.ERROR_GETASSIGNED_ASSETS:
    case types.ERROR_UPDATEUSER_ASSET:
    case types.ERROR_GETUSER_ASSET:
    case types.ERROR_GETALL_USER:
    case types.ERROR_SINGLE_USER:
    case types.ERROR_CREATE_USER:
    case types.ERROR_DELETE_USER:
    case types.ERROR_UPDATE_USER:
    case types.ERROR_CREATE_VENDOR:
    case types.ERROR_DELETE_VENDOR:
    case types.ERROR_GETALL_VENDOR:
    case types.ERROR_SINGLE_VENDOR:
    case types.ERROR_UPDATE_VENDOR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
        return state;
    

    }
}

export default ErrorReducer;