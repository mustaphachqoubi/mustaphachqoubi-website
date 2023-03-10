import React from "react";
import Logo from "../assets/logo";
import { HiOutlineMenu, HiOutlineSun, HiOutlineMoon } from "react-icons/hi";

const Navbar = () => {
  return (
    <div className="flex justify-between px-10 py-2">
      <div className="flex gap-4 items-center">
        <div className="border-2 border-black rounded-md p-2 hover:bg-slate-100 cursor-pointer">
          <HiOutlineMenu />
        </div>
        <div className="border-2 border-black rounded-md p-2 hover:bg-slate-100 cursor-pointer">
          <HiOutlineSun />
        </div>
      </div>

      <div className="w-12">
        <Logo />
      </div>
    </div>
  );
};

export default Navbar;
