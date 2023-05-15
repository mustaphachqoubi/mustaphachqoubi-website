import { services } from '../../assets/dummy.js' 
import { MdEdit, MdDelete, MdAdd, MdRepeatOneOn } from 'react-icons/md'
import { TbSitemap, TbCodeCircle2 } from 'react-icons/tb'
import { useState } from 'react'

export const AdminDashboard = () => {
  const [serviceTitle, setServiceTitle] = useState(null)
  const [displayConfirmation, setDisplayConfirmation] = useState('hidden')
  const [addWhatDisplay, setAddWhatDisplay] = useState('hidden')

  return (
    <div className="flex flex-col items-center h-screen justify-center gap-8 w-full py-20 p-10 scroll-auto ">

      <div onClick={() => setAddWhatDisplay('hidden')} className={`absolute top-0 bottom-0 left-0 right-0 bg-black/50 z-20 ${addWhatDisplay}`}>
        <div className="w-full h-full relative">
          <div title="Add service" className="absolute bottom-6 md:bottom-10 md:-rotate-45 xl:bottom-20 w-36 h-16 border-transparent md:left-[80%] lg:left-[88%] xl:left-[90%] border-2 rounded-t-full right-0 left-0 ml-auto mr-auto md:mr-0 md:ml-0 md:right-5">
            <div className="absolute bg-white text-black rounded-full p-2 border-2 hover:scale-90 hover:bg-black hover:text-white border-black cursor-pointer hover:border-white">
             <TbSitemap /> 
            </div>

            <div title="Add item" className="absolute bg-white left-[3.2rem] bottom-10 text-black rounded-full p-2 border-2 hover:scale-90 hover:bg-black hover:text-white border-black cursor-pointer hover:border-white">
              <MdRepeatOneOn />
            </div>

             <div title="Add Project" className="absolute bg-white right-0 text-black rounded-full p-2 border-2 hover:scale-90 hover:bg-black hover:text-white border-black cursor-pointer hover:border-white">
              <TbCodeCircle2 />
            </div>

          </div>
        </div>
      </div>

    <div onClick={() => addWhatDisplay === 'hidden' ? setAddWhatDisplay('block') :  setAddWhatDisplay('hidden')} title="Add a service" className="duration-300 z-50 border-4 border-white hover:border-2 fixed bottom-5 right-0 left-0 md:left-[90%] lg:left-[95%] ml-auto mr-auto md:mr-0 md:ml-0 md:right-5 bg-black text-white w-10 h-10 flex justify-center items-center cursor-pointer border-transparent rounded-full">
      <MdAdd />
    </div>

       <div className={`z-50 text-white text-center p-10 flex flex-col gap-5 absolute top-0 bottom-0 right-0 left-0 bg-black flex justify-center items-center ${displayConfirmation}`}>
      <div className="font-bold text-lg">Are you sure you want to delete <p className="underline ">{serviceTitle}</p> service?</div>
      <div className="flex flex-col md:flex-row gap-4 w-full items-center justify-center">
        <button onClick={() => {
              displayConfirmation === 'hidden' ? setDisplayConfirmation('flex') : setDisplayConfirmation('hidden')
            }}
            className="duration-300 bg-red-500 w-full h-10 md:w-52 rounded-lg text-sm font-bold border-2 border-white hover:border-red-500 hover:bg-white hover:text-red-500">Yes</button>
        <button onClick={() => {
              displayConfirmation === 'hidden' ? setDisplayConfirmation('flex') : setDisplayConfirmation('hidden')
            }}
            className="bg-green-500 w-full h-10 md:w-52 rounded-lg text-sm font-bold border-2 border-white hover:border-green-500 hover:bg-white hover:text-green-500 duration-300">No</button>
      </div>
    </div>

        {services.map(service => (
        <div className="cursor-pointer bg-black w-full rounded-lg h-20 text-white flex justify-center items-center text-xs md:text-sm max-w-md relative">
          {service.title}

          <div
            onClick={() => {
              setServiceTitle(service.title)
              displayConfirmation === 'hidden' ? setDisplayConfirmation('flex') : setDisplayConfirmation('hidden')
            }}
            title="Delete a service" className=" duration-300 absolute -right-5 border-4 border-white hover:border-2 hover:border-red-500 hover:text-red-500 bg-black text-white w-10 h-10 flex justify-center items-center cursor-pointer border-transparent rounded-full">
      <MdDelete />
    </div>
          
          <div title="Edit a service" className="duration-300 absolute -left-5 border-4 border-white  hover:border-2 hover:border-green-500 hover:text-green-500 bg-black text-white w-10 h-10 flex justify-center items-center cursor-pointer border-transparent rounded-full">
      <MdEdit />
    </div>
        </div>
        ))}
  </div>
  )
}
