import { axiosOtherInstance } from "./instance";


export const getUserApi = async () => {
  const response = await axiosOtherInstance.get("/users");
  return response;
};

export const getUserByIdApi = async (userId) => {
  const response = await axiosOtherInstance.get(`/users/${userId}`);
  return response;
};

export const createUserApi = async (user) => {
  const response = await axiosOtherInstance.post("/users", user);
  return response;
};

export const updateUserByIdApi = async (user, userId) => {
  return await axiosOtherInstance.put(`/users/${userId}`, user);
};

export const deleteUserByIdApi = async (userId) => {
  return await axiosOtherInstance.delete(`/users/${userId}`);
};
