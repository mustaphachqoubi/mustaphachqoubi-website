import { useState, useEffect } from 'react'
import { ClosedPicturesFolder } from '../assets/ClosedPictureFolder.jsx'
import { OpenedPicturesFolder } from '../assets/OpenedPictureFolder.jsx'

export const Pictures = () => {
  const [isClicked, setIsClicked] = useState(false);

const handleMove = (m) => {
  const folder = document.getElementById('folder');
  const rect = folder.getBoundingClientRect();

  let x = m.pageX- rect.width / 2;
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
            className={`cursor-pointer active:scale-100 hover:scale-110 duration-300`}><OpenedPicturesFolder /></div>) : (
            <div
            id="folder"
            onMouseDown={handlePosition}
            onMouseUp={handlePreviousPosition}
            className={`cursor-pointer active:scale-100 hover:scale-110 duration-300`}><ClosedPicturesFolder /></div>)
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
