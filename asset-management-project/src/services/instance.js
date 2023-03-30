import { ASSET_URL } from "../utils/constants";
import axios from "axios";
import { getToken, removeToken, saveToken } from "./AuthUser";

export const axiosAuthInstance = axios.create({
  baseURL: ASSET_URL,
  headers: {
    "Content-type": "application/json",
  },
});


axiosAuthInstance.interceptors.request.use((config) => {
  const token = getToken();
    if(token){
        config.headers.Authorization = token;
    }else{
        config.headers.Authorization = "";
    }
    return config;
})

axiosAuthInstance.interceptors.response.use((response) => {
    if(!getToken()){
        saveToken(response.data.status.data, response.headers.authorization);
    }else{
        removeToken();
    }
    return response;
})


export const axiosOtherInstance = axios.create({
  baseURL: ASSET_URL,
  headers: {
    "Content-type": "application/json",
  },
});

axiosOtherInstance.interceptors.request.use((config) => {
    
    config.headers.Authorization = getToken();
    return config;
})

