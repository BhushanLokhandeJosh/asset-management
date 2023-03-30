import React, { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Hero from "../../Home/Hero/component";
import Footer from "../Footer/component";
import Header from "../Header/component";
import { useSelector } from "react-redux";
import NavbarComponent from "../Navbar/NavbarComponent";
import DashBoardContainer from "../../Home/Dashboard/index.js";
import CommonNavbar from "../Navbar/Navbar";
import { ROUTES } from "../../../routes/constants";
import Dashboard from "../../Home/Dashboard/index.js";

const Layout = () => {
  const { loggedInUser } = useSelector((state) => state.AuthReducer);
  const location = useLocation();

  return (
    <>
      <Header />
      {!loggedInUser?.role && <CommonNavbar />}
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
