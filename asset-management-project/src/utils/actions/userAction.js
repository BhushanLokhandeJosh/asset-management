import * as types from "./actionTypes";


//getAllUserAction
export const getAllUserStart = (navigate) => ({
  type: types.LOAD_GETALL_USER,
  payload:navigate
});

export const getAllUserSuccess = (users) => ({
  type: types.SUCCESS_GETALL_USER,
  payload: users,
});

export const getAllUserError = (error) => ({
  type: types.ERROR_GETALL_USER,
  payload: error,
});




//getUserById
export const getUserByIdStart = (id) => ({
  type: types.LOAD_SINGLE_USER,
  payload:id
});

export const getUserByIdSuccess = (user) => ({
  type: types.SUCCESS_SINGLE_USER,
  payload:user

});

export const getUserByIdError = (error) => ({
  type: types.ERROR_SINGLE_USER,
  payload: error,
});




//createUser
export const createUserStart = (user,navigate) => ({
  type: types.LOAD_CREATE_USER,
  payload:{user,navigate}
  
});

export const createUserSuccess = (user) => ({
  type: types.SUCCESS_CREATE_USER,
  payload: user,
});

export const createUserError = (error) => ({
  type: types.ERROR_CREATE_USER,
  payload: error,
});




//updateUser
export const updateUserStart = (user,userId,navigate) => ({
  type: types.LOAD_UPDATE_USER,
  payload:{user,userId,navigate}
});

export const updateUserSuccess = (user,userId) => ({
  type: types.SUCCESS_UPDATE_USER,
  payload: {user,userId},
});

export const updateUserError = (error) => ({
  type: types.ERROR_UPDATE_USER,
  payload: error,
});


export const updateUserProfileStart = (user,userId,navigate) => ({
  type: types.LOAD_UPDATE_USERPROFILE,
  payload:{user,userId,navigate}
});

export const updateUserProfileSuccess = (user) => ({
  type: types.SUCCESS_UPDATE_USERPROFILE,
  payload: {user},
});

export const updateUserProfileError = (error) => ({
  type: types.ERROR_UPDATE_USERPROFILE,
  payload: error,
});





//deleteUser
export const deleteUserStart = (userId,navigate) => ({
  type: types.LOAD_DELETE_USER,
  payload:{userId,navigate}
  
});

export const deleteUserSuccess = (userId) => ({
  type: types.SUCCESS_DELETE_USER,
  payload: userId,
});

export const deleteUserError = (error) => ({
  type: types.ERROR_DELETE_USER,
  payload: error,
});