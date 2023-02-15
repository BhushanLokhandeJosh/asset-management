import { loginSuccess, logoutStart } from "../utils/actions/authActions";


export const getToken = () => {
  const tokenString = sessionStorage.getItem("token");
  const userToken = JSON.parse(tokenString);
  return userToken;
};

export const getUser = () => {
  const userString = sessionStorage.getItem("user");
  const user_detail = JSON.parse(userString);
  return user_detail;
};

export const saveToken = (user, token) => {
  sessionStorage.setItem("token", JSON.stringify(token));
  sessionStorage.setItem("user", JSON.stringify(user));
};

export const removeToken = () => {
  sessionStorage.removeItem("token");
  sessionStorage.removeItem("user");
}

export const checkAutoLogin = (dispatch) => {
  const tokenDetails = getToken();
  const userDetails = getUser();

  if(!tokenDetails){
    dispatch(logoutStart())
    return;
  }else{
    dispatch(loginSuccess(userDetails,tokenDetails))
  }
}

