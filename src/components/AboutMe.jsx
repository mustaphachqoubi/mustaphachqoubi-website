import { $CombinedState } from "@reduxjs/toolkit";
import { React, useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { storyIntroLines } from "../assets/storyIntroLines";
import gsap from "gsap";

const AboutMe = () => {
  const { heroBannerHeight } = useSelector((state) => state.heroBannerHeight);

  const [positionOfIntro, setPositionOfIntro] = useState("sticky top-0");
  const [isTheIntroOfTheStoryDone, setIsTheIntroOfTheStoryDone] =
    useState(false);
  const [progress, setProgress] = useState(0);
  const [index, setIndex] = useState(0);
  const [fade, setfade] = useState("fade_4s_ease-in-out");
  const [newLine, setnewLine] = useState(false);

  const introRef = useRef();

  useEffect(() => {
    isTheIntroOfTheStoryDone
      ? setPositionOfIntro("")
      : setPositionOfIntro("sticky top-0");
  }, [isTheIntroOfTheStoryDone]);

  gsap.to(".container", {
    autoAlpha: 1,
    ease: "power1.in",
    scrollTrigger: {
      trigger: ".container",
      pin: true,
      scrub: true,
    },
  });

  useEffect(() => {
    //   window.addEventListener("scroll", () => {
    //     if(newLine === true){
    //         setfade("fade_4s_ease-in-out")
    //     }else{
    //         setfade("fadeout_4s_ease-in-out")
    //     }
    //   if (window.pageYOffset >= 750) {
    //     // setfade("fade_4s_ease-in-out");
    //     if (index < storyIntroLines.length - 1) {
    //       if (fade === "fadeout_4s_ease-in-out") {
    //         setIndex(index + 1);
    //       }
    //     }
    //   }
    //   //    else {
    //   //     setfade("fadeout_4s_ease-in-out");
    //   //   }
    // });
  }, [fade, index]);

  return (
    <>
      <div
        ref={introRef}
        className={`${positionOfIntro} container animate-[${fade}] flex justify-center items-center h-screen text-center px-10`}
      >
        <h1 className="text-2xl font-bold tracking-wide">
          {storyIntroLines[index].line}
        </h1>
      </div>{" "}
      */}
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
