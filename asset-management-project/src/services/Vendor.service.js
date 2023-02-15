import axios from "axios";
import { ASSET_URL } from "../utils/constants";
import { getToken } from "./AuthUser";


const instance = axios.create({
  baseURL: ASSET_URL,
  headers: {
    "Content-type": "application/json",
  },
});


export const getVendorsApi = async () => {
  const response = await instance.get("/vendors", {
    headers: { Authorization: getToken() },
  });
  return response;
};

export const getVendorByIdApi = async (vendorId) => {
  const response = await instance.get(`/vendors/${vendorId}`);
  
  return response;
};


export const createVendorApi = async (vendor) => {
  const response = await instance.post("/vendors", vendor,{headers:{Authorization:getToken()}});
  return response;
};

export const updateVendorByIdApi = async (vendor, vendorId) => {
  const response = await instance.put(`/vendors/${vendorId}`, vendor, {
    headers: { Authorization: getToken() },
  });
  console.log(response);
};

export const deleteVendorByIdApi = async (vendorId) => {
  const response = await instance.delete(`/vendors/${vendorId}`, {
    headers: { Authorization: getToken() },
  });
  console.log(response);
};