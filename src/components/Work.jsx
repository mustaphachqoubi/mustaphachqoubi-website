import { useState } from 'react'
import { ClosedFolder } from '../assets/ClosedFolder.jsx';
import { OpenedFolder } from '../assets/OpenedFolder.jsx'

export const Work = () => { 
const [isClicked, setIsClicked] = useState(false);
  return (
    <>
      <div className="flex flex-col items-center gap-5 ">
        <div onClick={() => {
          isClicked === false ? setIsClicked(true) : setIsClicked(false)
        }}>
          {
            isClicked ? (<div className="cursor-pointer hover:scale-110 duration-300"><OpenedFolder /></div>) : (<div className="cursor-pointer hover:scale-110 duration-300"><ClosedFolder /></div>)
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
