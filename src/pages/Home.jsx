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
      <div className="hidden absolute top-20 w-full md:flex justify-center md:justify-start">
        {isRichaSvgTime === true && <RichaSVG  />}
      </div>
      <MustaphaSVG />
      <div className="hidden absolute bottom-[2rem] w-full md:flex justify-center md:justify-end">
        {isRichaSvgTime === true && <HorseSVG  />}
      </div>
    </>
  );
};

export default Home;
