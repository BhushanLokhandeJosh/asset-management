import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


export const getToken = () => {
  const tokenString = sessionStorage.getItem("token");
  const userToken = JSON.parse(tokenString);
  return userToken;
};

export const getUser = () => {
  const userString = sessionStorage.getItem("user");
  const user_detail = JSON.parse(userString);
  return user_detail;
};

export const saveToken = (user, token) => {
  sessionStorage.setItem("token", JSON.stringify(token));
  sessionStorage.setItem("user", JSON.stringify(user));
};

