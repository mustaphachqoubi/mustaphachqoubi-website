import React, { useState, useEffect } from "react";
import { MustaphaSVG, RichaSVG, HorseSVG, StoryIntro } from "../components";
import { useSelector } from "react-redux";

const Home = () => {
  const { isStoryLinesDone } = useSelector((state) => state.isStoryLinesDone);

  const [isMustaphaSvgDone, setIsMustaphaSvgDone] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsMustaphaSvgDone(true);
    }, 3100);
  }, [isStoryLinesDone]);

  return (
      <>
        <div className="relative h-screen flex justify-center items-center">
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

        <div className="flex justify-center items-center h-screen ">
          <StoryIntro />
        </div>

      </>
  );
};

export default Home;
