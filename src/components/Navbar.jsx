import React, { useState, useEffect } from "react";
import Logo from "../assets/logo";
import { HiOutlineMenu } from "react-icons/hi";
import { GiSpeaker, GiSpeakerOff } from "react-icons/gi";
import Sound from "react-sound";
import { useSelector } from "react-redux";

const Navbar = () => {
  const [menuPosition, setmenuPosition] = useState("absolute top-5");
  const [isScroll, setIsScroll] = useState(false);
  const [speakerPosition, setspeakerPosition] = useState("absolute top-5");
  const [volumePosition, setVolumePosition] = useState(
    "fixed top-16 ml-[3.7rem] md:top-8 md:ml-[6rem]"
  );

  const [isSoundActive, setisSoundActive] = useState(false);
  const [isSpeakerHovered, setisSpeakerHovered] = useState(false);
  const [volume, setvolume] = useState(20);
  const [position, setPosition] = useState(0);

  const music =
    "https://dl.dropboxusercontent.com/s/jemqok069xq5j7j/backgroundmusic-2.mp3?dl=0";

  const handlePosition = (newPosition) => {
    setPosition(newPosition);
  };

  const { currentScrollingLevel } = useSelector(
    (state) => state.currentScrollingLevel
  );

  useEffect(() => {
    if (currentScrollingLevel >= 5) {
      setIsScroll(true);
    } else {
      setIsScroll(false);
    }

    if (currentScrollingLevel >= 5) {
      setIsScroll(true);
    } else {
      setIsScroll(false);
    }

    if (isScroll === true) {
      setmenuPosition("menu");
      setspeakerPosition("speaker");
      setVolumePosition(
        "fixed bottom-16 ml-[3.3rem] md:bottom-8 md:ml-[5.5rem] volume"
      );
    } else {
      setmenuPosition("");
      setspeakerPosition("");
      setVolumePosition("fixed top-16 ml-[3.7rem] md:top-8 md:ml-[6rem]");
    }
  }, [currentScrollingLevel, isScroll]);

  return (
    <>
      <div className={`flex gap-4 px-10 py-5  absolute top-0 left-0 right-0 `}>
        <div
          className={`${menuPosition} z-50 border-2 border-black rounded-md p-2 hover:bg-[#e5ac73] cursor-pointer backdrop-blur-md`}
        >
          <HiOutlineMenu />
        </div>
        <div
          onClick={() => {
            isSoundActive === false
              ? setisSoundActive(true)
              : setisSoundActive(false);
          }}
          onMouseOver={() => {
            setTimeout(() => {
              setisSpeakerHovered(true);
            }, 1000);
          }}
          className={`${speakerPosition} z-50 border-2 border-black rounded-md p-2 hover:bg-[#e5ac73] cursor-pointer backdrop-blur-md`}
        >
          {isSoundActive === false ? <GiSpeakerOff /> : <GiSpeaker />}
          <Sound
            url={music}
            playStatus={
              isSoundActive === true
                ? Sound.status.PLAYING
                : Sound.status.STOPPED
            }
            volume={volume}
            position={position}
            onPlaying={({ position }) => handlePosition(position)}
          />
        </div>
        {!isSoundActive
          ? null
          : isSpeakerHovered && (
              <div
                className={`${volumePosition} z-50 h-20 w-5 md:h-2 md:w-20 flex justify-center items-center transition duration-700 ease-in-out`}
              >
                <input
                  onChange={(e) => {
                    setvolume(e.target.value);
                  }}
                  value={volume}
                  type="range"
                  className="range-input rotate-[-90deg] md:rotate-0 w-20 h-[0.3rem] bg-black rounded-lg appearance-none cursor-pointer"
                />
              </div>
            )}
        <div className="w-12 absolute top-3 right-5">
          <Logo />
        </div>
      </div>
    </>
  );
};

export default Navbar;
