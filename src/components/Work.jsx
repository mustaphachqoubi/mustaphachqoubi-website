import { useState } from 'react'
import { ClosedFolder } from '../assets/ClosedFolder.jsx';
import { OpenedFolder } from '../assets/OpenedFolder.jsx'

export const Work = () => { 
const [isClicked, setIsClicked] = useState(false);
  return (
    <>
      <div className="flex flex-col items-center gap-5 cursor-pointer">
        <div onClick={() => {
          isClicked === false ? setIsClicked(true) : setIsClicked(false)
        }}>
          {
            isClicked ? <OpenedFolder /> : <ClosedFolder />
          }
        </div>
        <div>
          <h1 className="font-bold text-sm tracking-wide">
          Some Examples of my work
          </h1>
        </div>
      </div>
    </>
  )
}
