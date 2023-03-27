import { React, useState, useEffect, useRef } from "react";
import { storyIntroLines } from "../assets/storyIntroLines";
import useIntersectionObserver from "../hooks/useIntersectionObsorver";

const AboutMe = () => {
  const [positionOfIntro, setPositionOfIntro] = useState("sticky top-0");
  const [isTheIntroOfTheStoryDone, setIsTheIntroOfTheStoryDone] =
    useState(false);
  const [index, setIndex] = useState(0);
  const [fade, setfade] = useState("fade_4s_ease-in-out");
  const introRef = useRef(null);

const intersecting = useIntersectionObserver(introRef, { threshold: 0.5 })


  // useEffect(() => {
  //   isTheIntroOfTheStoryDone
  //     ? setPositionOfIntro("")
  //     : setPositionOfIntro("sticky top-0");
  // }, [isTheIntroOfTheStoryDone]);

  return (
    <>
      <div
        id="intro"
        ref={introRef}
        className={`bg-red-500 animate-[${fade}] flex justify-center items-center h-screen text-center px-10`}
      >
        <h1 className=" text-2xl font-bold tracking-wide">
          {storyIntroLines[index].line}
        </h1>
      </div>

      <div className="flex bg-green-500 justify-center items-center h-screen">
        <div className="flex-1 sticky top-0 flex justify-center items-center">
          left
        </div>
        <div className="flex-1 flex justify-center items-center">right</div>
      </div>

      <div className="flex bg-yellow-500 justify-center items-center h-screen">
        <div className="flex-1 flex justify-center items-center">left</div>
        <div className="flex-1 sticky top-0 flex justify-center items-center">
          right
        </div>
      </div>
    </>
  );
};

export default AboutMe;
