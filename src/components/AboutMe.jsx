import React, { useRef, useState, useEffect } from "react";
import { storyIntroLines } from "../assets/storyIntroLines";
import { YearWindowrovider } from "./YearWindowProvider.jsx";
import { Window } from "./Window";
import { Arrow } from "../assets/Arrow.jsx";

const AboutMe = () => {
  const [stickyPosition, setStickyPosition] = useState("sticky top");
  const [progress, setProgress] = useState(0);
  const [maxProgress, setMaxProgress] = useState(0);
  const LinesRef = useRef(storyIntroLines.map(() => React.createRef()));

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const currentPosition = window.pageYOffset;
      const maxProgress = windowHeight * storyIntroLines.length;
      setProgress(Math.min(currentPosition, maxProgress));
      setMaxProgress(maxProgress);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (progress === maxProgress) {
      setStickyPosition(" ");
    } else {
      setStickyPosition("sticky top");
    }
  }, [progress, maxProgress]);

  const calculateOpacity = (index) => {
    const windowHeight = window.innerHeight;
    const linePosition = index * windowHeight;
    const distanceFromTop = Math.max(
      progress - linePosition - windowHeight / 1.2,
      0
    );
    const nextLinePosition = (index + 1) * windowHeight - windowHeight / 2;
    const distanceToNextLine = Math.max(
      progress - nextLinePosition - windowHeight / 1.3,
      0
    );
    const adjustedOpacity = Math.min(
      distanceToNextLine / (windowHeight / 1.5),
      1
    );
    const opacity = Math.max(
      (distanceFromTop - distanceToNextLine) / (windowHeight / 2),
      0
    );
    return opacity * (1 - adjustedOpacity);
  };

  return (
    <>
      {storyIntroLines.map((line, index) => (
        <div
          ref={LinesRef.current[index]}
          key={line.id}
          className={`px-8 h-screen text-center ${stickyPosition}-0 flex justify-center items-center`}
        >
          <h1
            style={{
              opacity: calculateOpacity(index),
            }}
            className={`font-bold text-2xl xl:text-4xl 2xl:text-7xl tracking-wide `}
          >
            {line.line}
          </h1>
        </div>
      ))}
      <YearWindowrovider>
        <div className="relative flex flex-col justify-center items-center text-center">
          <h1 className="font-bold text-sm">
            You can switch between years of experience.
          </h1>
          <Arrow />
        </div>
        <Window />
      </YearWindowrovider>
    </>
  );
};

export default AboutMe;
