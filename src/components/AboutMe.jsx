import React, { useRef, useState, useEffect } from "react";
import { storyIntroLines } from "../assets/storyIntroLines";

const AboutMe = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [opacity, setOpacity] = useState(1);

  const LinesRef = useRef(storyIntroLines.map(() => React.createRef()));

  useEffect(() => {

    const handleScroll = () => {

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
          <h1
            style={{ opacity: `0.${opacity}` }}
            className={`font-bold text-2xl tracking-wide`}
          >
            {line.line}
          </h1>
        </div>
      ))}
    </>
  );
};

export default AboutMe;
