import * as types from "./actionTypes";


//Registration actions.
export const registrationStart = () => ({
  type: types.LOAD_USER_REGISTER
});

export const registrationSuccess = (user) => ({
  type: types.SUCCESS_USER_REGISTER,
  payload: user,
});

export const registrationError = (error) => ({
  type: types.ERROR_USER_REGISTER,
  payload: error,
});


//Login actions.
export const loginStart = (user) => ({
    type:types.LOAD_USER_LOGIN,
    payload:user
})

export const loginSuccess = () => ({
  type: types.SUCCESS_USER_LOGIN,
});

export const loginError = (error) => ({
  type: types.ERROR_USER_LOGIN,
  payload: error,
});


//Logout actions.
export const logoutStart = () => ({
    type:types.LOAD_USER_SIGNOUT
})

export const logoutSuccess = (user) => ({
  type: types.SUCCESS_USER_SIGNOUT,
  payload: user,
});

export const logoutError = (error) => ({
  type: types.ERROR_USER_SIGNOUT,
  payload: error,
});