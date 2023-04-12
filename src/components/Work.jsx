import { useState } from "react";
import { ClosedWorkFolder } from "../assets/ClosedWorkFolder.jsx";
import { OpenedWorkFolder } from "../assets/OpenedWorkFolder.jsx";
import { WorkCard } from "./WorkCard.jsx";
import { WOne, WTwo, WThree} from "../assets/MyWork/";

export const Work = () => {
  const [isClicked, setIsClicked] = useState(false);
  
  const MyWork = [

    {
      id: 1,
      github: 'https://github.com/mustaphachqoubi/SOLJ',
      live: 'https://solj.vercel.app/underdevelopment',
      project: WTwo
    },
    {
      id: 2,
      github: 'https://github.com/mustaphachqoubi/mustaphachqoubi-website',
      project: WThree
    },
    {
      id: 3,
      github: 'https://github.com/mustaphachqoubi/carpetit',
      live: 'https://carpetit.vercel.app/',
      project: WOne
    },

  ]

  const handleMove = (m) => {
    const folder = document.getElementById("workfolder");
    const rect = folder.getBoundingClientRect();

    let x = m.pageX - rect.width / 2;
    let y = m.pageY - rect.height / 2;

    requestAnimationFrame(() => {
      folder.style.position = "absolute";
      folder.style.left = x + "px";
      folder.style.top = y + "px";
    });
  };

  const handleWorkFolderPosition = () => {
    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseup", handlePreviousWorkFolderPosition);
  };

  const handlePreviousWorkFolderPosition = () => {
    const folder = document.getElementById("workfolder");
    folder.style.position = "static";

    window.removeEventListener("mousemove", handleMove);
    window.removeEventListener("mouseup", handlePreviousWorkFolderPosition);
  };

  return (
    <>
      <div className="flex flex-col items-center gap-5 ">
        <div className=" p-4 relative">
          {isClicked ? (
            <div className="select-none grid gap-10 grid-cols-3 place-items-center absolute bottom-0 left-0">
              {MyWork.map((work, index) => (
                <WorkCard key={work.id} id={work.id} github={work.github} live={work.live}>
                  <img src={work.project} alt="portfolio" />
                </WorkCard>
              ))}
            </div>
          ) : null}
        </div>

        <div
          onClick={() => {
            isClicked === false ? setIsClicked(true) : setIsClicked(false);
          }}
        >
          {isClicked ? (
            <div
              id="workfolder"
              onMouseDown={handleWorkFolderPosition}
              onMouseUp={handlePreviousWorkFolderPosition}
              className="foldercursor-pointer hover:scale-110 duration-300"
            >
              <OpenedWorkFolder />
            </div>
          ) : (
            <div
              onMouseDown={handleWorkFolderPosition}
              onMouseUp={handlePreviousWorkFolderPosition}
              id="workfolder"
              className="cursor-pointer hover:scale-110 duration-300"
            >
              <ClosedWorkFolder />
            </div>
          )}
        </div>
        <div>
          <h1 className="font-bold text-sm tracking-wide select-none ">
            Some Examples of my work
          </h1>
        </div>
      </div>
    </>
  );
};
