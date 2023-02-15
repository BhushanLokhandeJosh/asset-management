import axios from "axios";
import { ASSET_URL } from "../utils/constants";
import AuthUser, { getToken } from "./AuthUser";
import { saveToken } from "./AuthUser";

const instance = axios.create({
  baseURL: ASSET_URL,
  headers: {
    "Content-type": "application/json",
  },
});


export const loginUserApi = async (user) => {
  const response = await instance.post("/login", user); 
  return response;
};

export const signUpUserApi = async (user) => {
  const response = await instance.post("/signup", user);
  return response;
}
  

export const signoutUserApi = async () => {
  const response = await instance.delete("/logout", { headers: { Authorization: getToken() }}).then(res => res.data);
  return response;
};
