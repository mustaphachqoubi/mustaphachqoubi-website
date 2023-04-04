import { useState } from 'react'
import { ClosedWorkFolder } from '../assets/ClosedWorkFolder.jsx';
import { OpenedWorkFolder } from '../assets/OpenedWorkFolder.jsx';

export const Work = () => { 

const [isClicked, setIsClicked] = useState(false);

const handleMove = (m) => {
  const folder = document.getElementById('workfolder');
  const rect = folder.getBoundingClientRect();

  let x = m.pageX- rect.width / 2;
  let y = m.pageY - rect.height / 2;

  requestAnimationFrame(() => {
    folder.style.position = 'absolute';
    folder.style.left = x + 'px';
    folder.style.top = y + 'px';
  });
};

const handleWorkFolderPosition = () => {
  window.addEventListener('mousemove', handleMove);
  window.addEventListener('mouseup', handlePreviousWorkFolderPosition);
};

const handlePreviousWorkFolderPosition = () => {
  const folder = document.getElementById('workfolder');
  folder.style.position = 'static';

  window.removeEventListener('mousemove', handleMove);
  window.removeEventListener('mouseup', handlePreviousWorkFolderPosition);
};

document.addEventListener('mouseup', () => {
  const folder = document.getElementById('workfolder');
  folder.style.position = 'static';

})


  return (
    <>
      <div className="flex flex-col items-center gap-5 ">
        <div onClick={() => {
          isClicked === false ? setIsClicked(true) : setIsClicked(false)
        }}>
          {
            isClicked ? (<div id="workfolder"
              onMouseDown={handleWorkFolderPosition}
              onMouseUp={handlePreviousWorkFolderPosition}
              className="foldercursor-pointer hover:scale-110 duration-300"><OpenedWorkFolder /></div>) : (<div
            onMouseDown={handleWorkFolderPosition}
            onMouseUp={handlePreviousWorkFolderPosition}
            id="workfolder" className="cursor-pointer hover:scale-110 duration-300"><ClosedWorkFolder /></div>)

          }
        </div>
        <div>
          <h1 className="font-bold text-sm tracking-wide select-none ">
          Some Examples of my work
          </h1>
        </div>
      </div>
    </>
  )
}
