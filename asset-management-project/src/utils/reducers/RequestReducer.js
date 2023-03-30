import * as types from "../actions/actionTypes";
import { initialState } from "./initialState";


const RequestReducer = (state=initialState,action)=>{
    switch(action.type){
    
    
    case types.LOAD_CREATE_REQUEST:
    case types.LOAD_DELETE_REQUEST:
    case types.LOAD_GETALL_REQUEST:
    case types.LOAD_SINGLE_REQUEST:
    case types.LOAD_UPDATE_REQUEST:
      return { ...state, loading: true };
    

    case types.SUCCESS_CREATE_REQUEST:
      const user_id = action.payload.userId;
      const request = action.payload.request;
      request["user_id"] = user_id;

      return {
        ...state,loading:false,requests:[...state.requests,request]
      }
    case types.SUCCESS_DELETE_REQUEST:
    case types.SUCCESS_GETALL_REQUEST:
      return {
        ...state,
        loading:false,
        requests:[...action.payload]
      }
    case types.SUCCESS_REQUEST_STATUS:
      return {
        ...state,loading:false,
        requests:[...action.payload]
      }
    case types.SUCCESS_SINGLE_REQUEST:
    case types.SUCCESS_UPDATE_REQUEST:
      let filteredRequest = state.requests.filter((item) => item.id !== parseInt(action.payload.requestId));

      let inputrequest = action.payload.request.request;

      return {
        ...state,loading:false,requests:[...filteredRequest,inputrequest]
      }
    default:return state;
}
}

export default RequestReducer;