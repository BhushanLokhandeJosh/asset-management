import axios from "axios";
import { ASSET_URL } from "../utils/constants";
import AuthUser from "./AuthUser";
import { saveToken } from "./AuthUser";

const instance = axios.create({
  baseURL:ASSET_URL,
  headers:{
  "Content-type":"application/json"
}})


export const loginUserApi = async (user) => {
  const response = await instance.post("/login", user);
  console.log(response.headers.authorization);
  saveToken(response.data.status.data,response.headers.authorization);
  return response;
}
  
export const signUpUserApi = async (user) =>
  await instance.post("/signup", user);

export const signoutUserApi = async (user) =>
  await instance.delete("/signout", user);
