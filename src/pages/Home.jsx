import React, { useState, useEffect } from "react";
import { MustaphaSVG, RichaSVG, HorseSVG } from "../components";

const Home = () => {
  const [isRichaSvgTime, setIsRichaSvgTime] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setIsRichaSvgTime(true);
    }, 3100);
  }, []);
  return (
    <>
      <div className="absolute top-20 w-full flex justify-center md:justify-start">
        {isRichaSvgTime === true && <RichaSVG />}
      </div>
      <MustaphaSVG />
      <div className="absolute md:top-[25rem] top-[30rem] w-full flex justify-center md:justify-end">
        {isRichaSvgTime === true && <HorseSVG />}
      </div>
    </>
  );
};

export default Home;
