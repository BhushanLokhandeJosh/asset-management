import * as types from "../actions/actionTypes";
import { initialState } from "./initialState";


const VendorReducer = (state=initialState,action)=>{
    switch(action.type){
    
    case types.LOAD_CREATE_VENDOR:
    case types.LOAD_DELETE_VENDOR:
    case types.LOAD_GETALL_VENDOR:
    case types.LOAD_SINGLE_VENDOR:
    case types.LOAD_UPDATE_VENDOR:
      return { ...state, loading: true };
    

    case types.SUCCESS_CREATE_VENDOR:
      return {
        ...state,loading:false,vendors:[...state.vendors,action.payload]
      }
    case types.SUCCESS_DELETE_VENDOR:
    case types.SUCCESS_GETALL_VENDOR:
      return {
        ...state,loading:false,vendors:[...action.payload]
      }
    case types.SUCCESS_SINGLE_VENDOR:
    case types.SUCCESS_UPDATE_VENDOR:
      
    default:
        return state;
}
}

export default VendorReducer;