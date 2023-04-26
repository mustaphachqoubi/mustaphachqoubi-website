import { React, useState, useEffect} from "react";
import { RichaSVG, MustaphaSVG, HorseSVG } from "../components";
import { khawarizmi, khalidibnyazid, jabirbnhayan, ibnsina, almajriti, alkindi, abbasbnfarnas } from '../assets/stickers/' 
import { gsap } from 'gsap'

const HeroBanner = () => {
  const [isMustaphaSvgDone, setIsMustaphaSvgDone] = useState(false);


  useEffect(() => {
    setTimeout(() => {
      setIsMustaphaSvgDone(true);
    }, 3100);
 }, []);



  useEffect(() => {
      const scientists = [ khawarizmi, khalidibnyazid, jabirbnhayan, ibnsina, almajriti, alkindi, abbasbnfarnas ]

    const heroBanner = document.getElementById('heroBanner')
  heroBanner.addEventListener('click', (e) => {
    const sticker = document.createElement('div')
    const img = document.createElement('img')

    sticker.style.width = 100 + 'px'
    sticker.style.height = 100 + 'px'
    sticker.style.position = 'absolute'
    sticker.style.left = e.pageX + 'px'
    sticker.style.top = e.pageY + 'px'
    sticker.style.userSelect = 'none'

    gsap.to(sticker, { transform: `rotate(${Math.floor(Math.random() * 190)}deg)`, duration: 0.3} )
    gsap.to(sticker, { transform: `rotate(${Math.floor(Math.random() * 190)}deg)`, duration: 0.3} )

    img.src = scientists[Math.floor(Math.random() * scientists.length)]
    img.setAttribute('id', 'sticker')

    heroBanner.appendChild(sticker) 
    sticker.appendChild(img)

    setTimeout(() => {
      sticker.style.display = 'none'
    }, 1000)
  })
  }, [])


  return (
    <>
      <div
        id="heroBanner"
        className="relative h-screen flex justify-center items-center flex-col"
      >
        {isMustaphaSvgDone === true && (
          <div className="absolute top-20 left-0 hidden md:block ">
            <RichaSVG />
          </div>
        )}
        <MustaphaSVG />
        {isMustaphaSvgDone === true && (
          <div className="absolute bottom-20 right-0 hidden md:block">
            <HorseSVG />
          </div>
        )}
      </div>
    </>
  );
};

export default HeroBanner;
