import axios from "axios";
import { ASSET_URL } from "../utils/constants";
import { getToken } from "./AuthUser";


const instance = axios.create({
  baseURL: ASSET_URL,
  headers: {
    "Content-type": "application/json",
  },
});

export const getAssetApi = async () => {
  const response = await instance.get("/assets", {
    headers: { Authorization: getToken() },
  });
  return response;
};

export const getAssetByIdApi = async (assetId) => {
  const response = await instance.get(`/assets/${assetId}`);
  return response;
};


export const createAssetApi = async (asset) => {
  const response = await instance.post("/assets", asset,{headers:{Authorization:getToken()}});
  return response;
};


export const updateAssetByIdApi = async (asset, assetId) => {
  return await instance.put(`/assets/${assetId}`, asset, {
    headers: { Authorization: getToken() },
  });
};


export const deleteAssetByIdApi = async (assetId) => {
  return await instance.delete(`/assets/${assetId}`, {
    headers: { Authorization: getToken() },
  });
};
