import axios from "axios";
import { ASSET_URL } from "../utils/constants";
import { getToken } from "./AuthUser";

const instance = axios.create({
  baseURL: ASSET_URL,
  headers: {
    "Content-type": "application/json",
  },
});


export const getAllRequestsApi = async () => {
  
  const response = await instance.get("/requests", {
    headers: { Authorization: getToken() },
  });
  return response;
};

export const getRequestById = async (userId) => {
  console.log("IN API");
  const response = await instance.get("/requests/user_requests_status",{headers:
    {Authorization:getToken()},
  params:{user_id : userId}})
  // console.log(response);
  return response;
}


export const createRequestApi = async (request,userId) => {
  console.log("Api Called");
  const response = await instance.post("/requests", request,
  {headers:
    {Authorization:getToken()},
  params:{user_id : userId}});
  return response;
  }

export const updateRequestByIdApi = async (request, requestId) => {
  const response = await instance.put(`/requests/${requestId}`, request, {
    headers: { Authorization: getToken() },
  });
  return response;
};


export const deleteRequestByIdApi = async (requestId) => {
  return await instance.delete(`/requests/${requestId}`, {
    headers: { Authorization: getToken() },
  });
};
