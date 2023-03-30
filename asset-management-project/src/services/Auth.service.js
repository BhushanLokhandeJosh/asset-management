import { axiosAuthInstance } from "./instance";


export const loginUserApi = async (user) => {
  const response = await axiosAuthInstance.post("/login", user); 
  return response;
};


export const signoutUserApi = async () => {
  const response = await axiosAuthInstance.delete("/logout").then(res => res.data);
  return response;
};
