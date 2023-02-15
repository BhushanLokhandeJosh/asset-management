import * as types from "./actionTypes";


//Registration actions.
export const registrationStart = (user,navigate) => ({
  type: types.LOAD_USER_REGISTER,
  payload:user,
  navigate
});

export const registrationSuccess = (user) => ({
  type: types.SUCCESS_USER_REGISTER,
  payload:user
});

export const registrationError = (error) => ({
  type: types.ERROR_USER_REGISTER,
  payload: error,
});


//Login actions.
export const loginStart = (user,navigate) => ({
    type:types.LOAD_USER_LOGIN,
    payload:user,
    navigate
})

export const loginSuccess = (user,token) => ({
  type: types.SUCCESS_USER_LOGIN,
  payload:{user,token}
});

export const loginError = (error) => ({
  type: types.ERROR_USER_LOGIN,
  payload: error,
});


//Logout actions.
export const logoutStart = () => ({
    type:types.LOAD_USER_SIGNOUT,
})

export const logoutSuccess = () => ({
  type: types.SUCCESS_USER_SIGNOUT,
});

export const logoutError = (error) => ({
  type: types.ERROR_USER_SIGNOUT,
  payload: error,
});