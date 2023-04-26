import { useState } from "react";
import { BsGithub, BsFillEyeFill } from "react-icons/bs";

export const WorkCard = ({ children, id, github, live }) => {
  const [isCardHovered, setIsCardHovered] = useState("hidden");

  return (
    <div
      onMouseOver={() => setIsCardHovered("")}
      onMouseOut={() => setIsCardHovered("hidden")}
      className={`${
        id === 2 ? "rotate-12" : ""
      } relative rounded-lg border-4 border-white w-40 md:w-60 lg:w-80 overflow-hidden z-0 hover:z-10`}
    >
      <div
        className={`${isCardHovered} absolute bg-black/50 backdrop-blur-xs w-full h-full flex gap-5 items-center justify-center`}
      >
        {id === 2 ? null : (
          <a href={live} target="_blank" rel="noreferrer">
            <div className="duration-300 hover:scale-90 hover:bg-white hover:text-slate-500 cursor-pointer w-10 h-10 rounded-full bg-slate-500 shadow-xl text-white flex justify-center items-center">
              <BsFillEyeFill />
            </div>
          </a>
        )}

        <a href={github} target="_blank" rel="noreferrer">
          <div className="duration-300 hover:scale-90 hover:bg-white hover:text-slate-500 cursor-pointer w-10 h-10 rounded-full bg-slate-500 text-white shadow-xl flex justify-center items-center">
            <BsGithub />
          </div>
        </a>
      </div>

      {children}
    </div>
  );
};
