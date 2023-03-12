import React, { useState, useEffect } from "react";
import Logo from "../assets/logo";
import { HiOutlineMenu } from "react-icons/hi";
import { GiSpeaker, GiSpeakerOff } from "react-icons/gi";
import Sound from "react-sound";
import "./Navbar.css";

const Navbar = () => {
  const [isSoundActive, setisSoundActive] = useState(false);
  const [isSpeakerHovered, setisSpeakerHovered] = useState(false);
  const [volume, setvolume] = useState(20);
  const [position, setPosition] = useState(0);

  const music = 'https://dl.dropboxusercontent.com/s/jemqok069xq5j7j/backgroundmusic-2.mp3?dl=0'

  const handlePosition = (newPosition) => {
    setPosition(newPosition);
  };

  useEffect(() => {
    window.addEventListener("click", () => {
      setisSpeakerHovered(false);
    });
  });

  return (
    <div className="flex justify-between px-10 py-2 fixed right-0 left-0 top-0 z-50 bg-none backdrop-blur-md">
      <div className="flex gap-4 items-center">
        <div className="border-2 border-black rounded-md p-2 hover:bg-[#e5ac73] cursor-pointer">
          <HiOutlineMenu />
        </div>
        <div
          onClick={() => {
            isSoundActive === false ? setisSoundActive(true) : setisSoundActive(false);
          }}
          onMouseOver={() => {
            setTimeout(() => {
              setisSpeakerHovered(true);
            }, 1000);
          }}
          className="border-2 border-black rounded-md p-2 hover:bg-[#e5ac73] cursor-pointer"
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
              <div className="h-20 w-5 md:h-2 md:w-20 absolute md:static top-16 left-[6.2rem] flex justify-center items-center transition duration-700 ease-in-out">
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
