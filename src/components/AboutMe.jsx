import { React, useState, useEffect, useRef } from "react";
import { storyIntroLines } from "../assets/storyIntroLines";

const AboutMe = () => {
  const [positionOfIntro, setPositionOfIntro] = useState("sticky top-0");
  const [isTheIntroOfTheStoryDone, setIsTheIntroOfTheStoryDone] =
    useState(false);
  const [index, setIndex] = useState(0);
  const [fade, setfade] = useState("fade_4s_ease-in-out");
  const introRef = useRef();

  useEffect(() => {
    isTheIntroOfTheStoryDone
      ? setPositionOfIntro("")
      : setPositionOfIntro("sticky top-0");
  }, [isTheIntroOfTheStoryDone]);

  function debounce(func, delay) {
    let timeoutId;
    return function() {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      timeoutId = setTimeout(func, delay);
    };
  }

  useEffect(() => {
    const intro = document.getElementById("intro");
    window.addEventListener("scroll", () => {
      const introTop = intro.getBoundingClientRect();
      if (introTop.top <= 0) {
        if (index < storyIntroLines.length - 1) {
            debounce(() => {
                setIndex(index + 1)
            }, 500)
        }
      }else{
        if(index !== 0){
            setIndex(index - 1);
        }
      }
    });
  });

  return (
    <>
      <div
        id="intro"
        ref={introRef}
        className={`${positionOfIntro} animate-[${fade}] flex justify-center items-center h-screen text-center px-10`}
      >
        <h1 className="text-2xl font-bold tracking-wide">
          {storyIntroLines[index].line}
        </h1>
      </div>

      <div className="flex justify-center items-center h-screen">
        <div className="flex-1 sticky top-0 flex justify-center items-center">
          left
        </div>
        <div className="flex-1 flex justify-center items-center">right</div>
      </div>
      <div className="flex justify-center items-center h-screen">
        <div className="flex-1 flex justify-center items-center">left</div>
        <div className="flex-1 sticky top-0 flex justify-center items-center">
          right
        </div>
      </div>
    </>
  );
};

export default AboutMe;
