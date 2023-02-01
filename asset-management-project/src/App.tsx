import React from "react";

import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";

import "./App.css";
import About from "./components/about/About";
import CardComponent from "./components/hero/Card";
import Contact from "./components/contact/Contact";
import Footer from "./components/shared/footer/Footer";

import Login from "./components/Login";
import Header from "./components/shared/header/Header";

import Hero from "./components/hero/Hero";
import NavbarComponent from "./components/shared/navbar/NavbarComponent";

function App() {
  return (
    <div className="App">
      <Header />
      <NavbarComponent />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/home" element={<Hero />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/aboutus" element={<About />} />
        </Routes>
      </BrowserRouter>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
