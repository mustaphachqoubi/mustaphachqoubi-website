import { useParams } from 'react-router-dom'
import { services } from '../assets/dummy.js'
import { useEffect, useState } from 'react'

export const Service = () => {
  const { service, itemId} = useParams();
  const [serviceItemId, setServiceItemId] = useState('')
  const [itemOfService, setItemOfService] = useState({})
  const [optionSelected, setIsOptionSelected] = useState(false)

  const getSingleItem = async (service, itemId) => {
    const item = await itemOfService;
    try{

    }catch (err){

    }
  }

  return (
    <div className="h-screen flex justify-center items-center p-10 pt-28">
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
            <p>{'>'} See features</p>
          </div>

          <div className="flex flex-col items-center gap-16 w-full ">
            <div className="font-bold bg-white h-20 sm:w-96 p-6 w-full rounded-lg flex flex-col gap-2 justify-center items-center text-center">
              <p className="text-xs">You are happy with this Total ?</p>
              <p className="text-md">$ 1500</p>
            </div>

            <div className="bg-black flex justify-center items-center w-full sm:w-96 h-20 rounded-lg text-white font-bold ">
              <p>Let's talk</p>
            </div>
          </div>
        </div>
      }
    </div>
  )
}
