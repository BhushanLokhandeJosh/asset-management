import axios from "axios";
import { ASSET_URL } from "../utils/constants";
import { getToken } from "./AuthUser";

const instance = axios.create({
  baseURL: ASSET_URL,
  headers: {
    "Content-type": "application/json",
  },
});

export const getUserApi = async () => {
  const response = await instance.get("/users", {
    headers: { Authorization: getToken() },
  });
  return response;
};

export const getUserByIdApi = async (userId) => {
  const response = await instance.get(`/users/${userId}`, {
    headers: { Authorization: getToken() },
  });
  return response;
};

export const createUserApi = async (user) => {
  console.log(user);
  const response = await instance.post("/users", user, {
    headers: { Authorization: getToken() },
  });
  return response;
};

export const updateUserByIdApi = async (user, userId) => {
  return await instance.put(`/users/${userId}`, user, {
    headers: { Authorization: getToken() },
  });
};

export const deleteUserByIdApi = async (userId) => {
  return await instance.delete(`/users/${userId}`, {
    headers: { Authorization: getToken() },
  });
};
