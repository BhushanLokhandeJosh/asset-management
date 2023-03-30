import React from "react";

import "./App.css";

import RoutesComponent from "./routes/routings";
import { ToastContainer } from "react-toastify";
import { BrowserRouter,Routes,Route } from "react-router-dom";


function App() {

  return (
    <div className="App">
      <ToastContainer/>
      <BrowserRouter>
      <Routes>
        <Route path="/*" element={<RoutesComponent/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
