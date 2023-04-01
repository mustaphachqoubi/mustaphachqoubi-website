import React, { useRef, useState, useEffect } from "react";
import { storyIntroLines } from "../assets/storyIntroLines";
import {YearGraphProvider, Year, Graph} from './YearGraphProvider.jsx'
import { HeWas, HeFound } from "./Window";

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
    const distanceFromTop = Math.max(progress - linePosition, 0);
    const nextLinePosition = (index + 1) * windowHeight;
    const distanceToNextLine = Math.max(progress - nextLinePosition, 0);
    const adjustedOpacity = Math.min(distanceToNextLine / windowHeight, 1);
    const opacity = Math.max(
      (distanceFromTop - distanceToNextLine) / windowHeight,
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
              transition: "opacity 0.5s ease-in-out",
            }}
            className={`font-bold text-2xl tracking-wide`}
          >
            {line.line}
          </h1>
        </div>
      ))}
      <YearGraphProvider>
        <Year>
          <h1 className="text-3xl font-bold tracking-wide bg-gradient-to-r from-green-700 to-green-500 bg-clip-text text-transparent">2017</h1>
        </Year>
        <Graph>
          <HeWas>
            - A Cyber Security guy;
            <br />
            - He was doing some web buy bounty;
            <br />
            - and it was fun for a while;
          </HeWas>
        </Graph>
      </YearGraphProvider>
    </>
  );
};

export default AboutMe;

