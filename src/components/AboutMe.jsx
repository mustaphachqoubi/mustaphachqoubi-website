import React, { useRef, useState, useEffect } from "react";
import { storyIntroLines } from "../assets/storyIntroLines";

const AboutMe = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [opacity, setOpacity] = useState(0);

  const LinesRef = useRef(storyIntroLines.map(() => React.createRef()));

  useEffect(() => {
    const handleScroll = () => {
      LinesRef.current.forEach((line, index) => {
        const rect = line.current.getBoundingClientRect();
        if (rect.top === 0) {
          setCurrentPage(index + 1);
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {storyIntroLines.map((line, index) => (
        <div
          ref={LinesRef.current[index]}
          key={line.id}
          className="px-8 h-screen text-center sticky top-0 flex justify-center items-center"
        >
          <h1 className={`opacity-[${opacity}] font-bold text-2xl tracking-wide`}>{line.line}</h1>
        </div>
      ))}
    </>
  );
};

export default AboutMe;
