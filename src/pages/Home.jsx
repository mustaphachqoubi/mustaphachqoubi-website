import React, { useState, useEffect } from "react";
import { MustaphaSVG, RichaSVG, HorseSVG } from "../components";

const Home = () => {
  const [isMustaphaSvgDone, setIsMustaphaSvgDone] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsMustaphaSvgDone(true);
    }, 3100);
  }, []);

  return (
    <>
      <div className="relative">
      {isMustaphaSvgDone === true && (
        <div className="absolute top-20 left-0 hidden md:block">
          <RichaSVG />
        </div>
      )}
      <MustaphaSVG />
      {isMustaphaSvgDone === true && (
        <div className="absolute bottom-20 right-0 hidden md:block">
          <HorseSVG />
        </div>
      )}
      </div>

      <div className="h-screen mt-20 w-full">
      <MustaphaSVG />
      </div>
    </>
  );
};

export default Home;
