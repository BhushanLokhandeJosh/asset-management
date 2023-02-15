import axios from "axios";
import { ASSET_URL } from "../utils/constants";
import { getToken } from "./AuthUser";


const instance = axios.create({
  baseURL: ASSET_URL,
  headers: {
    "Content-type": "application/json",
  },
});


export const allocateAssetToUserApi = async (assetdetails) => {
  const response = await instance.post("/user_assets", assetdetails,{headers:{Authorization:getToken()}});
  console.log(response);
  return response;
};


export const assignedAssetApi = async () => {
  const response = await instance.get("/user_assets",{headers:{Authorization:getToken()}});
  console.log(response);
  return response;
}

export const updateUserAsset = async (userasset,userId) => {
  const response = await instance.put(`/user_assets/${userId}`,userasset,{headers:{Authorization:getToken()}});
  return response;
}

export const getUserAsset = async (userId) => {
  console.log("In service",userId)
  const response = await instance.get("user_assets/show_user_assets",{headers:
    {Authorization:getToken()},
  params:{user_id : userId}});
  return response;

}