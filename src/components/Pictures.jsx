import { useState, useEffect } from 'react'
import { ClosedFolder } from '../assets/ClosedFolder.jsx'
import { OpenedFolder } from '../assets/OpenedFolder.jsx'

export const Pictures = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [folderPosition, setFolderPosition] = useState('')
  const [isMouseDown, setIsMouseDown] = useState(false)

  
const handleMove = (m) => {
  setFolderPosition(`absolute top-${m.clientY} left-[${m.clientX}]`)
  console.log(m.clientX, m.clientY)
}

useEffect(() => {
  const closedfolder = document.getElementById('closedfolder')
  const handleMouseDown = () => {
    window.addEventListener('mousemove', handleMove);
    setIsMouseDown(true);
  };

  const handleMouseUp = () => {
    window.removeEventListener('mousemove', handleMove);
    setIsMouseDown(false)
  };

  window.addEventListener('mousedown', handleMouseDown);
  window.addEventListener('mouseup', handleMouseUp);

  return () => {
    window.removeEventListener('mousedown', handleMouseDown);
    window.removeEventListener('mouseup', handleMouseUp);
    window.removeEventListener('mousemove', handleMove);
  };
}, [setFolderPosition]);


  return (
    <>
      <div
      className="flex flex-col gap-5 items-center cursor-pointer ">
        <div onClick={() => {
          isClicked === false ? setIsClicked(true) : setIsClicked(false)
        }}>
        {
            isClicked ? (<div className={`${folderPosition} cursor-pointer active:scale-100 hover:scale-110 duration-300`}><OpenedFolder /></div>) : (
            <div
            id="closedfolder"
            className={`${folderPosition} cursor-pointer active:scale-100 hover:scale-110 duration-300`}><ClosedFolder /></div>)
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
