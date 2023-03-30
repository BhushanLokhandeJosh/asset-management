import { axiosOtherInstance } from "./instance";

export const getAssetApi = async () => {
  const response = await axiosOtherInstance.get("/assets");
  return response;
};

export const getAssetByIdApi = async (assetId) => {
  const response = await axiosOtherInstance.get(`/assets/${assetId}`);
  return response;
};


export const createAssetApi = async (asset) => {
  const response = await axiosOtherInstance.post("/assets", asset);
  return response;
};


export const updateAssetByIdApi = async (asset, assetId) => {
  return await axiosOtherInstance.put(`/assets/${assetId}`, asset);
};


export const deleteAssetByIdApi = async (assetId) => {
  return await axiosOtherInstance.delete(`/assets/${assetId}`);
};
