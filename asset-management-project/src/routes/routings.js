import React, { ReactElement } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ROUTES } from "./constants";

import Hero from "../pages/Home/Hero/component/index";
import About from "../pages/Home/About/component/index";
import Contact from "../pages/Home/Contact/component/index";
import Login from "../pages/Home/Login/component/index";
import DashBoard from "../pages/Home/Dashboard.js/component";

export const routes = [
  {
    path: ROUTES.HOME,
    component: Hero,
  },
  {
    path: ROUTES.ABOUT,
    component: About,
  },
  {
    path: ROUTES.CONTACT,
    component: Contact,
  },
  {
    path: ROUTES.SERVICES,
    component: About,
  },
  {
    path: ROUTES.LOGIN,
    component: Login,
  },
  {
    path:ROUTES.DASHBOARD,
    component: DashBoard
  },
  {
    path:ROUTES.SIGNUP,
    // componen
  }
];

const RoutesComponent = () => {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map((route, index) => (
          <Route path={route.path} key={index} element={<route.component />} />
        ))}
        <Route path="*" element={<Navigate to={ROUTES.HOME} replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesComponent;
