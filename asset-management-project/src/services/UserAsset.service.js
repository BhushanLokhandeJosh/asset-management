import { axiosOtherInstance } from "./instance";

export const allocateAssetToUserApi = async (assetdetails) => {
  const response = await axiosOtherInstance.post("/user_assets", assetdetails);
  return response;
};

export const assignedAssetApi = async () => {
  const response = await axiosOtherInstance.get("/user_assets");
  return response;
};

export const updateUserAsset = async (userasset, userId) => {
  const response = await axiosOtherInstance.put(
    `/user_assets/${userId}`,
    userasset
  );
  return response;
};

export const getUserAsset = async (userId) => {
  console.log("In service", userId);
  const response = await axiosOtherInstance.get(
    "user_assets/show_user_assets",
    {
      params: { user_id: userId },
    },
  );
  return response;
};
