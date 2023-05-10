import { useParams } from 'react-router-dom'
import { services } from '../assets/dummy.js'
import { useEffect, useState } from 'react'
import { FaGreaterThan } from 'react-icons/fa'
import { AiOutlineCaretDown, AiFillCaretRight } from 'react-icons/ai'
import starBackground from '../assets/starBackground.mp4'
import galaxyBackground from '../assets/galaxyBackground.mp4'

export const Service = () => {
  const { service, itemId} = useParams();
  const [serviceItemId, setServiceItemId] = useState('')
  const [itemOfService, setItemOfService] = useState({})
  const [optionSelected, setIsOptionSelected] = useState(false)
  const [featuresOpened, setFeaturesOpened] = useState(false)
  const [videoSrc, setVideoSrc] = useState(starBackground)
  const [srcChanger, setSrcChanger] = useState(1)

  useEffect(() => {
 if(videoSrc === galaxyBackground){
      setVideoSrc(starBackground)
      console.log("star",starBackground)
    }else{
      setVideoSrc(galaxyBackground)
      console.log("galaxy",galaxyBackground)
    }

  }, [srcChanger])

  return (
    <div className="h-full flex justify-center items-center p-10 py-32 ">
      {
        !itemOfService ? <div>Loading...</div> : <div className="flex flex-col w-full gap-10 items-center">
          <div className="overflow-hidden bg-white w-full sm:w-96 h-20 text-black rounded-lg flex gap-6 justify-center items-center font-bold tracking-wide">
           Basic Landing Page 
          </div>

          <div className="flex flex-col items-center gap-4 w-full">
            <h3 className="text-sm underline">Do you want to add an option ?</h3>
             <div 
              onClick={() => optionSelected === false ? setIsOptionSelected(true) : setIsOptionSelected(false)}
              className={`${optionSelected ? "border-black" : " border-transparent"} cursor-pointer border-4 overflow-hidden bg-white w-full sm:w-96 h-20 text-black rounded-lg flex text-xs sm:text-md gap-6 px-6 justify-between items-center font-bold tracking-wide`}>
              <div className="flex flex-col lg:flex-row gap-1"><p>Customized contact form</p> <p>(+ $50)</p></div>
              {
                optionSelected ? <input type="radio" checked /> : <input type="radio" />
              }
            </div>
            <div>
            </div>
          </div>

          <div>
            <p 
              onMouseOver={() => {
                featuresOpened === true ? setFeaturesOpened(false) : setFeaturesOpened(true)
              }}
              className="text-sm flex gap-1 justify-center items-center underline hover:no-underline cursor-pointer">{!featuresOpened ? <AiFillCaretRight /> : <AiOutlineCaretDown />} See features</p>
          </div>

          <div className="flex flex-col items-center gap-16 w-full">
            <div className="font-bold bg-white h-20 sm:w-96 p-6 w-full rounded-lg flex flex-col gap-2 justify-center items-center text-center">
              <p className="text-xs">Are you happy with this Total ?</p>
              <p className="text-md">$ 1500</p>
            </div>

            <div 
              onClick={() => setSrcChanger(srcChanger => srcChanger + 1)}
            className="cursor-pointer bg-black flex justify-center overflow-hidden items-center w-full relative sm:w-96 h-20 rounded-lg text-white font-bold">
              <video className="absolute top-0 left-0 bottom-0 right-0 " autoPlay muted loop>
                <source src={videoSrc} type="video/mp4" />
              </video>
              <p className="z-20">Let's talk</p>
            </div>
          </div>
        </div>
      }
    </div>
  )
}
