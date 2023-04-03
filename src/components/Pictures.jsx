import { useState, useEffect } from 'react'
import { ClosedFolder } from '../assets/ClosedFolder.jsx'
import { OpenedFolder } from '../assets/OpenedFolder.jsx'

export const Pictures = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [folderPosition, setFolderPosition] = useState('')
  const [isMouseDown, setIsMouseDown] = useState(false)

//   
// const handleMove = (m) => {
//   setFolderPosition(`absolute top-${m.clientY} left-[${m.clientX}]`)
//   console.log(m.clientX, m.clientY)
// }
//
// useEffect(() => {
//   const closedfolder = document.getElementById('closedfolder')
//   const handleMouseDown = () => {
//     window.addEventListener('mousemove', handleMove);
//     setIsMouseDown(true);
//   };
//
//   const handleMouseUp = () => {
//     window.removeEventListener('mousemove', handleMove);
//     setIsMouseDown(false)
//   };
//
//   window.addEventListener('mousedown', handleMouseDown);
//   window.addEventListener('mouseup', handleMouseUp);
//
//   return () => {
//     window.removeEventListener('mousedown', handleMouseDown);
//     window.removeEventListener('mouseup', handleMouseUp);
//     window.removeEventListener('mousemove', handleMove);
//   };
// }, [setFolderPosition]);


// const handleMove = (m) => {
//   const folder = document.getElementById('folder')
//
//   let x = m.pageX;
//   let y = m.pageY;
//
//   folder.style.position = 'absolute'
//   folder.style.left = x - 10 + 'px';
//   folder.style.top = y - 10 + 'px';
// }
//
// const handlePosition = () => {
//   window.addEventListener('mousemove', handleMove)
//   window.addEventListener('mouseup', handlePreviousPosition)
// }
//
// const handlePreviousPosition = () => {
//   const folder = document.getElementById('folder')
//   folder.style.position = 'static'
//
//   window.removeEventListener('mousemove', handleMove)
//   window.removeEventListener('mouseup', handlePreviousPosition)
// }




const handleMove = (m) => {
  const folder = document.getElementById('folder');
  const rect = folder.getBoundingClientRect();

  let x = m.pageX - rect.width / 2;
  let y = m.pageY - rect.height / 2;

  requestAnimationFrame(() => {
    folder.style.position = 'absolute';
    folder.style.left = x + 'px';
    folder.style.top = y + 'px';
  });
};

const handlePosition = () => {
  window.addEventListener('mousemove', handleMove);
  window.addEventListener('mouseup', handlePreviousPosition);
};

const handlePreviousPosition = () => {
  const folder = document.getElementById('folder');
  folder.style.position = 'static';

  window.removeEventListener('mousemove', handleMove);
  window.removeEventListener('mouseup', handlePreviousPosition);
};

document.addEventListener('mouseup', () => {
  const folder = document.getElementById('folder');
  folder.style.position = 'static';

})


return (
    <>
      <div
      className="flex flex-col gap-5 items-center cursor-pointer ">
        <div onClick={() => {
          isClicked === false ? setIsClicked(true) : setIsClicked(false)
        }}>
        {
            isClicked ? (
            <div
            id="folder"
            onMouseDown={handlePosition}  
            onMouseUp={handlePreviousPosition}
            className={`folder cursor-pointer active:scale-100 hover:scale-110 duration-300`}><OpenedFolder /></div>) : (
            <div
            id="folder"
            onMouseDown={handlePosition}
            onMouseUp={handlePreviousPosition}
            className={`folder cursor-pointer active:scale-100 hover:scale-110 duration-300`}><ClosedFolder /></div>)
          }

        </div>
        <div>
          <h1 className="font-bold text-sm tracking-wide select-none ">
            Some Pictures of me
          </h1>
        </div>
      </div>
    </>
  )
}
