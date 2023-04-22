import { BsLinkedin, BsGithub } from 'react-icons/bs'
import {InkPen} from '../assets/InkPen.jsx'
import {CartoonGuy} from '../assets/CartoonGuy.jsx'
import { useState, useEffect} from 'react'
import {gsap} from 'gsap'
import { useSound } from 'use-sound'
import waterDrop from '../assets/waterdrop.mp3'

export const ContactMe = ({bg}) => {
  const [play] = useSound(
    waterDrop,
    {volume: 0.8}
  )
  window.addEventListener('resize', () => {
    const waves = document.getElementById('waves')
    const inkpen = document.getElementById('inkpen')
    const drop = document.getElementById('drop')
    const lastBottom = document.getElementById('lastBottom')

    waves.style.position = 'absolute';
    waves.style.left = inkpen.offsetLeft - 10 + 'px'
    drop.style.left = inkpen.offsetLeft + 'px'
  })
  useEffect(() => {
    const waves = document.getElementById('waves')
    const inkpen = document.getElementById('inkpen')
    const drop = document.getElementById('drop')
    const lastBottom = document.getElementById('lastBottom')

    waves.style.position = 'absolute';
    waves.style.left = inkpen.offsetLeft - 10 + 'px'
    drop.style.left = inkpen.offsetLeft + 'px'
    gsap.to(drop, {bottom: `${-lastBottom.offsetTop/1.8}px`, opacity: 0, duration: 1, repeat: -1})
  }, [])

  return (
    <div id="contactme" className={`relative h-screen flex flex-col justify-center gap-20 items-center ${bg} mix-blend-difference`}>
      
      <div className="w-full flex justify-end absolute top-0 ">
        <div id="inkpen" className='w-60'>
        <InkPen />
        </div>
        <div id="drop" className="bg-black w-2 h-2 rounded-full absolute bottom-2">
          
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

      <div id="lastBottom" className="w-full flex justify-center absolute bottom-0 ">
        <div id='waves' className="">
          <div id="smallWave" >
          </div>
        </div>
        <div className='w-[10rem] '>
        <CartoonGuy />
        </div>
      </div>
    </div>
  )
}
