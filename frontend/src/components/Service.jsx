import { useParams } from 'react-router-dom'
import { services } from '../assets/dummy.js'
import { useEffect, useState } from 'react'
import { FaGreaterThan } from 'react-icons/fa'
import { AiOutlineCaretDown, AiFillCaretRight } from 'react-icons/ai'
import starBackground from '../assets/starBackground.mp4'
import galaxyBackground from '../assets/galaxyBackground.mp4'
import { useLocation } from 'react-router-dom'
import { MdDone } from "react-icons/md";

export const Service = () => {
  const { service, itemId} = useParams();
  const [serviceItemId, setServiceItemId] = useState('')
  const [itemOfService, setItemOfService] = useState({})
  const [optionSelected, setIsOptionSelected] = useState(false)
  const [featuresOpened, setFeaturesOpened] = useState(false)
  const [videoSrc, setVideoSrc] = useState(starBackground)
  const [srcChanger, setSrcChanger] = useState(1)
  const [optionId, setOptionId] = useState(-1)

    const location = useLocation()
  useEffect(() => {
 if(videoSrc === galaxyBackground){
      setVideoSrc(starBackground)
    }else{
      setVideoSrc(galaxyBackground)
    }

  }, [srcChanger])

  useEffect(() => {
    const getItemOfService = async () => {
      const item = await fetch(`http://localhost:4000/api/services/${location.pathname}`)
      const data = await item.json()
      if(item.ok){
        setItemOfService(data)
      }
    }
    getItemOfService()
  }, [])


  return (
    <div className="flex justify-center items-center py-10 w-full ">
      <div className="w-full flex justify-center items-center p-10 overflow-auto ">
        
       {
        !itemOfService ? <div>Loading...</div> : <div className="flex flex-col w-full gap-10 items-center">
          <div className="overflow-hidden bg-white w-full sm:w-96 h-20 text-black rounded-lg flex gap-6 justify-center items-center font-bold tracking-wide text-sm md:text-lg">
          {itemOfService.title} 
          </div>
            {itemOfService.options?.length > 0 ? itemOfService.options?.map(option => (
          <div key={option._id} className="flex flex-col items-center gap-4 w-full">
                <h3 className="text-sm underline">Do you want to add an option ?</h3>
            <div 
              onClick={() => {
                  optionSelected === false ? setIsOptionSelected(true) : setIsOptionSelected(false)
                  setOptionId(option._id)
                }}
              className={`${optionSelected ? "border-black" : " border-transparent"} cursor-pointer border-4 overflow-hidden bg-white w-full sm:w-96 h-20 text-black rounded-lg flex text-xs sm:text-md gap-6 px-6 justify-between items-center font-bold tracking-wide`}>
              <div className="flex flex-col lg:flex-row gap-1"><p>{option.name}</p> <p>(+ {option.price})</p></div>
              {
                optionSelected ? <input type="radio" checked /> : <input type="radio" />
              }
            </div>

              </div>
              )) : (
              <div className="flex flex-col items-center gap-4 w-full">
                <h3 className="text-sm underline">Do you want to add an option ?</h3>
            <div 
              className={` cursor-pointer border-4 overflow-hidden bg-white w-full sm:w-96 h-20 text-black rounded-lg flex text-xs sm:text-md gap-6 px-6 justify-center items-center font-bold tracking-wide`}>
              <div className="flex text-center"><p>This service has no options !</p></div>
                          </div>

              </div>
              ) } 
            <div>
            </div>

          <div className="flex flex-col gap-2 w-full items-center">
            <p 
              onClick={() => {
                featuresOpened === true ? setFeaturesOpened(false) : setFeaturesOpened(true)
              }}
              className="text-sm flex gap-1 justify-center items-center underline hover:no-underline cursor-pointer">{!featuresOpened ? <AiFillCaretRight /> : <AiOutlineCaretDown />} {featuresOpened ? "Hide" : "See"} features</p>

              {featuresOpened ? (
                <div className="overflow-hidden bg-white w-full sm:w-96 text-black rounded-lg flex flex-col items-start gap-6 p-6 text-xs font-bold">
                {itemOfService.features.map(feature => (
                <div key={feature._id} className="flex gap-2 items-center">
                  <div className="bg-black rounded-full p-1 text-white">
                  <MdDone /> 
                </div>
                  {feature.name}
                  </div>
                ))}  
              </div>

              ) : null}
                      </div>

          <div className="flex flex-col items-center gap-16 w-full">
            <div className="font-bold bg-white h-20 sm:w-96 p-6 w-full rounded-lg flex flex-col gap-2 justify-center items-center text-center">
              <p className="text-xs">Are you happy with this Total ?</p>
              <p className="text-md">$ {optionSelected ? itemOfService.options.map(option => itemOfService.price + option.price) : itemOfService.price}</p>
            </div>

            <div 
              onMouseOver={() => setSrcChanger(srcChanger => srcChanger + 1)}
            className="cursor-pointer bg-black flex justify-center overflow-hidden items-center w-full relative sm:w-96 h-20 rounded-lg text-white font-bold">
              <video className="absolute top-0 left-0 bottom-0 right-0" autoPlay muted loop>
                <source src={videoSrc} type="video/mp4" />
              </video>
              <p className="z-20">Let's talk</p>
            </div>
          </div>
        </div>
      }
 
      </div>
    </div>
  )
}
