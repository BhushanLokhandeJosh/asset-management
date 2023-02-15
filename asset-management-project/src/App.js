import React from "react";

import "./App.css";

import Footer from "./pages/Shared/Footer/component/index";
import Header from "./pages/Shared/Header/component/index";

import RoutesComponent from "./routes/routings";
import { ToastContainer } from "react-toastify";

function App() {

  return (
    <div className="App">
      <ToastContainer/>
      <Header />
      <RoutesComponent />
      <Footer />
    </div>
  );
}

export default App;
