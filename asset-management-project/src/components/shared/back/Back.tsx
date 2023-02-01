import React from "react";
import { useLocation } from "react-router-dom";

type Title = {
  title:string
}

const Back = ({ title}:Title) => {
  const location = useLocation();

  return (
    <>
      <section className="back">
        <h2>Home / {location.pathname.split("/")[1]}</h2>
        <h1>{title}</h1>
      </section>
    </>
  );
};

export default Back;
