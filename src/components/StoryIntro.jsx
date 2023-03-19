import { React, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { storyIntroLines } from "../assets/storyIntroLines";
import { setIsStoryLinesDone } from "../Redux/reducers/isStoryLinesDone";

const StoryIntro = () => {
  const { currentScrollingLevel } = useSelector(
    (state) => state.currentScrollingLevel
  );

  const dispatch = useDispatch();

  const [storyLineIndex, setstoryLineIndex] = useState(0);
  const [fade, setfade] = useState("fade_4s_ease-in-out");
  const [startStory, setStartStory] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (currentScrollingLevel === window.innerHeight) {
        setfade("fadeout_4s_ease-in-out");
      } else {
        setfade("fade_4s_ease-in-out");
      }

      if (currentScrollingLevel > window.innerHeight-300) {
        setStartStory(true)
      }

      if (storyLineIndex < storyIntroLines.length - 1) {
        if (fade === "fadeout_4s_ease-in-out") {
          setstoryLineIndex(storyLineIndex + 1);
        }
      }
    });

    if (storyLineIndex === 5) {
      dispatch(setIsStoryLinesDone(true));
    }
  }, [currentScrollingLevel, storyLineIndex, fade, dispatch]);

  return (
    <>
      {
        startStory && (
          <div className={`animate-[${fade}] text-center px-10`}>
        <h1 className="text-2xl font-bold tracking-wide">
          {storyIntroLines[storyLineIndex].line}
        </h1>
      </div>
        )
      }
    </>
  );
};

export default StoryIntro;