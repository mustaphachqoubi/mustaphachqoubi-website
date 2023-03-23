import React from "react";
import { HeroBanner, AboutMe } from "../components";

const Home = () => {
  return (
    <>
      <HeroBanner />
      <AboutMe />

      {/* <div
          id="story"
          className={`${position} h-screen text-center flex justify-center items-center`}
        >
          <StoryIntro />
        </div> */}

      {/* <div className="flex flex-col md:flex-row">
        <div className="h-screen text-center sticky top-0 flex-1 flex justify-center items-center">
          <h1 className="text-2xl font-bold tracking-wide">In 2017</h1>
        </div>
        <div id="test" className="flex-1 flex justify-center items-center">
          <div className="flex flex-col text-center">
          <Fader progress={progress} >
            <h1 className="text-lg font-bold">I was a cyber security guy</h1>
          </Fader>
            <img src={Mustapha} alt="me" className="w-80" />
          </div>
        </div>
      </div> */}
    </>
  );
};

export default Home;
