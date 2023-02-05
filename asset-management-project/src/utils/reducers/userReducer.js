import React from 'react';
import * as types from "../actions/actionTypes";

const initialState = {
    loading:false,
    error:null
}

const userReducer = (state = initialState,action) => {
    
    switch(action.type){
        case types.LOAD_USER_LOGIN:
        case types.LOAD_USER_REGISTER:
        case types.LOAD_USER_SIGNOUT:
           return {...state,loading:true}

        case types.ERROR_USER_LOGIN:
        case types.ERROR_USER_REGISTER:
        case types.ERROR_USER_SIGNOUT:
            return {...state,error:action.payload,loading:false}

        case types.SUCCESS_USER_LOGIN:
            return {...state,loading:false}

        case types.SUCCESS_USER_REGISTER:
            return {...state,loading:false}

        case types.ERROR_USER_SIGNOUT:
            return {...state,loading:false}

        default:
            return state;
    }
}

export default userReducer;