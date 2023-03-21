import React, { useState, useEffect } from "react";
import { MustaphaSVG, RichaSVG, HorseSVG, StoryIntro } from "../components";
import { useSelector } from "react-redux";

const Home = () => {
  const { isStoryLinesDone } = useSelector((state) => state.isStoryLinesDone);

  const [isMustaphaSvgDone, setIsMustaphaSvgDone] = useState(false);
  const [storyHeight, setstoryHeight] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsMustaphaSvgDone(true);
    }, 3100);

    const story = document.getElementById('story')
    setstoryHeight(story.offsetHeight)
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

      <div id="story" className="h-screen text-center sticky top-0 flex-1 flex justify-center items-center">
        <StoryIntro storyHeight={storyHeight}/>
      </div>
      <div className="h-screen text-center sticky top-0 flex-1 flex justify-center items-center">
        text
      </div>
    </>
  );
};

export default Home;
