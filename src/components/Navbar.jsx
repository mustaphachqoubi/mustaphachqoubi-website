import React, {useState} from "react";
import Logo from "../assets/logo";
import { HiOutlineMenu} from "react-icons/hi";
import { GiSpeaker, GiSpeakerOff } from "react-icons/gi";
import Sound from 'react-sound'
import backgroundmusic from '../assets/backgroundmusic.mp3'

const Navbar = () => {
  const [isSoundActive, setisSoundActive] = useState(false)
  
  return (
    <div className="flex justify-between px-10 py-2 fixed right-0 left-0 top-0 z-50 bg-none backdrop-blur-md">
      <div className="flex gap-4 items-center">
        <div className="border-2 border-black rounded-md p-2 hover:bg-[#e5ac73] cursor-pointer">
          <HiOutlineMenu />
        </div>
        <div
        onClick={() => {
          isSoundActive === false ? setisSoundActive(true) : setisSoundActive(false)
        }}
         className="border-2 border-black rounded-md p-2 hover:bg-[#e5ac73] cursor-pointer">
          {
            isSoundActive === false ? <GiSpeakerOff /> : <GiSpeaker />
          }
          <Sound 
          url={backgroundmusic}
          playStatus={isSoundActive === true ? Sound.status.PLAYING : Sound.status.STOPPED}
          playFromPosition={300}
          />
        </div>
      </div>

      <div className="w-12">
        <Logo />
      </div>
    </div>
  );
};

export default Navbar;
