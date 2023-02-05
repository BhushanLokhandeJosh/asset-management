import React from "react";

import "./App.css";

import Footer from "./pages/Shared/Footer/component/index";

import Login from "./pages/Home/Login/component";
import Header from "./pages/Shared/Header/component/index";

import NavbarComponent from "./pages/Shared/Navbar/NavbarComponent";
import RoutesComponent from "./routes/routings";
import { useSelector } from "react-redux";
import { getToken } from "./services/AuthUser";
import DashBoard from "./pages/Home/Dashboard.js/component";

function App() {

  return (
    <div className="App">
      <Header />
      <NavbarComponent />
      <RoutesComponent />
      <Footer />
    </div>
  );
}

export default App;
