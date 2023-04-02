import { useState, useEffect } from 'react'
import { ClosedFolder } from '../assets/ClosedFolder.jsx'
import { OpenedFolder } from '../assets/OpenedFolder.jsx'

export const Pictures = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [isMouseDown, setIsMouseDown] = useState(false);

  useEffect(() => {
    // isMouseDown ? console.log(isMouseDown) : console.log(false)
  }, [isMouseDown])

  return (
    <>
      <div
      className="flex flex-col gap-5 items-center cursor-pointer">
        <div onClick={() => {
          isClicked === false ? setIsClicked(true) : setIsClicked(false)
        }}>
          {
            isClicked ? <OpenedFolder /> : <ClosedFolder />
          }
        </div>
        <div>
          <h1 className="font-bold text-sm tracking-wide">
            Some Pictures of me
          </h1>
        </div>
      </div>
    </>
  )
}
