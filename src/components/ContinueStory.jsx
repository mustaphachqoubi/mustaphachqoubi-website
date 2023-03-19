import { React, useState, useEffect } from "react";
import { continueStoryLines } from "../assets/continueStoryLines";
import { useSelector, useDispatch } from "react-redux";
import mustapha from "../assets/mustapha_adobe_express.svg";

const ContinueStory = () => {
  const { currentScrollingLevel } = useSelector(
    (state) => state.currentScrollingLevel
  );

  const [index, setIndex] = useState(0)
  const [fade, setfade] = useState("fade_4s_ease-in-out");
  const [startStory, setStartStory] = useState(false);


  useEffect(() => {
    if (currentScrollingLevel === window.innerHeight) {
        setfade("fadeout_4s_ease-in-out");
      } else {
        setfade("fade_4s_ease-in-out");
      }

    if (currentScrollingLevel > window.innerHeight-300) {
        setStartStory(true)
      }

      if (index === 0) {
        if (fade === "fadeout_4s_ease-in-out") {
          setIndex(index + 1);
        }
      }
  }, [currentScrollingLevel, index, fade]);

  return (
    <div className={`flex flex-col items-center w-full px-10`}>
        {startStory && (
      <div className="flex flex-col md:flex-row text-center md:text-left justify-center gap-20 items-center h-screen w-full">
        <p className="w-96 text-2xl font-bold">{continueStoryLines[index].line}</p>
        <img
          className="w-80"
          src={mustapha}
          alt="this is me"
          title="this is me"
        />
      </div>
        )}
    </div>
  );
};

export default ContinueStory;
