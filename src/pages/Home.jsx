import React, { useState, useEffect } from "react";
import { MustaphaSVG, RichaSVG, HorseSVG } from "../components";
import gsap from "gsap";

const Home = () => {
  const [isRichaSvgTime, setIsRichaSvgTime] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsRichaSvgTime(true);
    }, 3100);
  }, []);

  const changeRichaOpacity = () => {
    const timeline = gsap.timeline()
    timeline.fromTo(".richa", {duration: 4, opacity: 0}, {duration: 4, opacity: 1});
  };

  useEffect(() => {
    changeRichaOpacity();
  }, []);

  return (
    <>
      <div className="richa hidden absolute top-20 w-full md:flex justify-center md:justify-start">
        {isRichaSvgTime === true && <RichaSVG />}
      </div>
      <MustaphaSVG />
      <div className="horse hidden absolute bottom-[2rem] w-full md:flex justify-center md:justify-end">
        {isRichaSvgTime === true && <HorseSVG />}
      </div>
    </>
  );
};

export default Home;
