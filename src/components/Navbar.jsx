import React, { useState, useEffect } from "react";
import Logo from "../assets/logo";
import { HiOutlineMenu } from "react-icons/hi";
import { GiSpeaker, GiSpeakerOff } from "react-icons/gi";
import Sound from "react-sound";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { currentScrollingLevel } = useSelector(
    (state) => state.currentScrollingLevel
  );

  const [isSoundActive, setisSoundActive] = useState(false);
  const [isSpeakerHovered, setisSpeakerHovered] = useState(false);
  const [volume, setvolume] = useState(20);
  const [position, setPosition] = useState(0);

  const [isScroll, setIsScroll] = useState(false);
  const [menuPosition, setmenuPosition] = useState("");
  const [speakerPosition, setspeakerPosition] = useState("");
  const [volumePosition, setVolumePosition] = useState(
    "absolute top-16 left-[6.2rem] md:static"
  );

  const music =
    "https://dl.dropboxusercontent.com/s/jemqok069xq5j7j/backgroundmusic-2.mp3?dl=0";

  const handlePosition = (newPosition) => {
    setPosition(newPosition);
  };

  useEffect(() => {
    window.addEventListener("click", () => {
      setisSpeakerHovered(false);
    });

    if (currentScrollingLevel >= 5) {
      setIsScroll(true);
    } else {
      setIsScroll(false);
    }

    if (isScroll === true) {
      setmenuPosition("menu");
      setspeakerPosition("speaker");
      setVolumePosition(
        "fixed bottom-16 ml-[3.3rem] md:bottom-8 md:ml-[5.5rem]"
      );
    } else {
      setmenuPosition("");
      setspeakerPosition("");
      setVolumePosition("absolute top-16 left-[6.2rem] md:static");
    }
  }, [currentScrollingLevel, isScroll]);



  return (
    <div className="flex justify-between px-10 z-50 py-2 bg-none backdrop-blur-md absolute top-0 left-0 right-0">
      <div className="flex gap-4 items-center">
        <div
          className={`${menuPosition}  border-2 border-black rounded-md p-2 hover:bg-[#e5ac73] cursor-pointer backdrop-blur-md`}
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
          className={`${speakerPosition} border-2 border-black rounded-md p-2 hover:bg-[#e5ac73] cursor-pointer backdrop-blur-md`}
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
                className={`${volumePosition} h-20 w-5 md:h-2 md:w-20 flex justify-center items-center transition duration-700 ease-in-out`}
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
      </div>
      <div className="w-12">
        <Logo />
      </div>
    </div>
  );
};

export default Navbar;
