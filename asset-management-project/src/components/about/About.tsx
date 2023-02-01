import React, { ReactElement } from "react";
import "./about.css";
import Back from "../shared/back/Back";
import AboutCard from "./AboutCard";
import Awrapper from "./Awrapper";

const About = (): JSX.Element => {
  return (
    <>
      <Back title="About Us" />
      <AboutCard />
      <Awrapper />
    </>
  );
};

export default About;
