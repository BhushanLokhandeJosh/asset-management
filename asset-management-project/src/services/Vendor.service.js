import { axiosOtherInstance } from "./instance";

export const getVendorsApi = async () => {
  const response = await axiosOtherInstance.get("/vendors");
  return response;
};

export const getVendorByIdApi = async (vendorId) => {
  const response = await axiosOtherInstance.get(`/vendors/${vendorId}`);
  return response;
};


export const createVendorApi = async (vendor) => {
  const response = await axiosOtherInstance.post("/vendors", vendor);
  return response;
};

export const updateVendorByIdApi = async (vendor, vendorId) => {
  const response = await axiosOtherInstance.put(`/vendors/${vendorId}`, vendor);
  console.log(response);
};

export const deleteVendorByIdApi = async (vendorId) => {
  const response = await axiosOtherInstance.delete(`/vendors/${vendorId}`);
  console.log(response);
};