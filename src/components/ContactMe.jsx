import { BsLinkedin, BsGithub } from 'react-icons/bs'
import {InkPen} from '../assets/InkPen.jsx'
import {CartoonGuy} from '../assets/CartoonGuy.jsx'
import { useState, useEffect} from 'react'

export const ContactMe = ({bg}) => {
  window.addEventListener('resize', () => {
    const waves = document.getElementById('waves')
    const inkpen = document.getElementById('inkpen')

    waves.style.position = 'absolute';
    waves.style.left = inkpen.offsetLeft + 'px'
  })
  useEffect(() => {
    const waves = document.getElementById('waves')
    const inkpen = document.getElementById('inkpen')

    waves.style.position = 'absolute';
    waves.style.left = inkpen.offsetLeft + 'px'
  }, [])

  return (
    <div id="contactme" className={`relative h-screen flex flex-col justify-center gap-20 items-center ${bg} mix-blend-difference`}>
      
      <div className="w-full flex justify-end absolute top-0 ">
        <div id="inkpen" className='w-60'>
        <InkPen />
        </div>
      </div>
      
      <div className="font-bold flex flex-col items-center justify-center text-center gap-2 text-black ">
        <h1 className="text-3xl lg:text-3xl">You are out of Ink</h1>
        <h3 className="text-xs lg:text-md underline underline-offset-2 decoration-2">Contact me if you want more.</h3>
      </div>

      <div className="flex gap-5 justify-center items-center text-2xl xl:text-3xl ">
        <a href="https://www.linkedin.com/in/mustapha-chqoubi/" target="_blank" rel="noreferrer" className="cursor-pointer">
          <BsLinkedin />
        </a>
         <a href="https://github.com/mustaphachqoubi" target="_blank" rel="noreferrer" className="cursor-pointer">
          <BsGithub />
        </a>
      </div>

      <div className="w-full flex justify-center absolute bottom-0 bg-red-500">
        <div id='waves' className="bg-green-500 w-20 h-8">
          
        </div>
        <div className='w-[10rem] sm:w-[13rem]'>
        <CartoonGuy />
        </div>
      </div>
    </div>
  )
}
