import React from "react";
import { HeroBanner, AboutMe, PicturesAndWork } from "../components";
import { ClosedWorkFolder } from "../assets/ClosedWorkFolder";

const Home = () => {
  return (
    <>
      <HeroBanner />
      <AboutMe />
      <PicturesAndWork />
   </>
  );
};

export default Home;
