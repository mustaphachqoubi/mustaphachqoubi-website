import { BsLinkedin, BsGithub } from 'react-icons/bs'
import {InkPen} from '../assets/InkPen.jsx'
import {CartoonGuy} from '../assets/CartoonGuy.jsx'
import useSound from 'use-sound'

export const ContactMe = () => {
  return (
    <div id="contactme" className="relative h-screen flex flex-col justify-center gap-20 items-center bg-[#d79e67] mix-blend-difference">
      
      <div className="w-full flex justify-end absolute top-0">
        <div className='w-60'>
        <InkPen />
        </div>
      </div>
      
      <div className="font-bold flex flex-col items-center justify-center text-center gap-2 text-black ">
        <h1 className="text-3xl lg:text-3xl">You are out of Ink</h1>
        <h3 className="text-xs lg:text-md underline underline-offset-2 decoration-2">Contact me if you want more.</h3>
      </div>

      <div className="flex gap-5 justify-center items-center text-2xl xl:text-3xl">
        <a href="https://www.linkedin.com/in/mustapha-chqoubi/" target="_blank" rel="noreferrer" className="cursor-pointer">
          <BsLinkedin />
        </a>
         <a href="https://github.com/mustaphachqoubi" target="_blank" rel="noreferrer" className="cursor-pointer">
          <BsGithub />
        </a>
      </div>

      <div className="w-full flex justify-center absolute bottom-0">
        <div className='w-[13rem]'>
        <CartoonGuy />
        </div>
      </div>
    </div>
  )
}
