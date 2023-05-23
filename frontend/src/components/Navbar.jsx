import React, { useState, useEffect } from "react";
import Logo from "../assets/logo";
import { HiOutlineMenu } from "react-icons/hi";
import { GiSpeaker, GiSpeakerOff } from "react-icons/gi";
import Sound from "react-sound";
import { useSelector } from "react-redux";
import { NavList } from "./NavList.jsx";
import useSound from "use-sound";
import click from "../assets/click.mp3";

const Navbar = () => {
  const { outOfInkBg } = useSelector((state) => state.outOfInkBg);

  const clickSound = click;
  const music =
    "https://dl.dropboxusercontent.com/s/jemqok069xq5j7j/backgroundmusic-2.mp3?dl=0";

  const [play] = useSound(clickSound, { volume: 0.8 });

  const [menuPosition, setmenuPosition] = useState("absolute top-5");
  const [isScroll, setIsScroll] = useState(false);
  const [speakerPosition, setspeakerPosition] = useState("absolute top-5");
  const [volumePosition, setVolumePosition] = useState("");

  const [isSoundActive, setisSoundActive] = useState(false);
  const [isSpeakerHovered, setisSpeakerHovered] = useState(false);
  const [volume, setvolume] = useState(20);
  const [position, setPosition] = useState(0);
  const [navListStatus, setNavListStatus] = useState("hidden");
  const [navListPosition, setNavListPosition] = useState(
    "absolute top-12 -left-[0.1rem]"
  );

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
        "fixed bottom-[-0.2rem] ml-[8rem] md:bottom-[2.1rem] md:ml-[6rem] volume"
      );
      setNavListPosition("fixed bottom-12 -left-[0.1rem]");
      setNavListStatus("hidden");
    } else {
      setmenuPosition("");
      setspeakerPosition("");
      setVolumePosition(
        "fixed top-[-0.2rem] ml-[8rem] md:top-[2.1rem] md:ml-[6rem]"
      );
      setNavListPosition("absolute top-12 -left-[0.1rem]");
    }
  }, [currentScrollingLevel, isScroll]);

  return (
    <div>
      <div className={`flex gap-4 px-10 py-5 absolute top-0 left-0 right-0 `}>
        <div
          onClick={() => {
            play();
            navListStatus === "hidden"
              ? setNavListStatus("")
              : setNavListStatus("hidden");
          }}
          className={`${menuPosition} z-50 border-2 border-black relative rounded-md p-2 hover:bg-[#e5ac73] cursor-pointer backdrop-blur-md ${
            outOfInkBg === "" ? "" : "bg-[#e5ac73]/60"
          }`}
        >
          <HiOutlineMenu />
          <div className={`${navListStatus} ${navListPosition} z-50`}>
            <NavList />
          </div>
        </div>
        <div
          onClick={() => {
            play();
            isSoundActive === false
              ? setisSoundActive(true)
              : setisSoundActive(false);
          }}
          onMouseOver={() => {
            setTimeout(() => {
              setisSpeakerHovered(true);
            }, 200);
          }}
          className={`${speakerPosition} z-50 border-2 border-black rounded-md p-2 hover:bg-[#e5ac73] cursor-pointer backdrop-blur-md ${
            outOfInkBg === "" ? "" : "bg-[#e5ac73]/60"
          }`}
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
                    setTimeout(() => {
                      setisSpeakerHovered(false);
                    }, 1000);
                  }}
                  value={volume}
                  type="range"
                  className="range-input w-20 h-[0.3rem] bg-black rounded-lg appearance-none cursor-pointer"
                />
              </div>
            )}
        <div className="w-12 absolute top-3 right-5">
          <Logo />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
