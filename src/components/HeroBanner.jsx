import { React, useState, useEffect} from "react";
import { RichaSVG, MustaphaSVG, HorseSVG } from "../components";

const HeroBanner = () => {
  const [isMustaphaSvgDone, setIsMustaphaSvgDone] = useState(false);
  const [count, setCount] = useState(0)

  useEffect(() => {
    setTimeout(() => {
      setIsMustaphaSvgDone(true);
    }, 3100);
 }, []);

  return (
    <>
      <div
        className="relative h-screen flex justify-center items-center"
      >
        {isMustaphaSvgDone === true && (
          <div className="absolute top-20 left-0 hidden md:block ">
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
    </>
  );
};

export default HeroBanner;
