import React, { useState, useEffect } from "react";
import { HeroBanner, AboutMe, PicturesAndWork, ContactMe } from "../components";
import useSound from "use-sound";
import bulb from "../assets/bulb.mp3";

const Home = () => {
  const [bg, setBg] = useState("");
  const [pageNumber, setPageNumber] = useState(0);
  const [stickerPosition, setStickerPosition] = useState("")
  const [stickerAnimation, setStickerAnimation] = useState("hidesticker")

  const bulpSound = bulb;

  const [play] = useSound(bulpSound, { volume: 0.05 });

  useEffect(() => {
    const bgone = document.getElementById("bgone");
    const bgtwo = document.getElementById("bgtwo");
    const bgthree = document.getElementById("bgthree");

    window.addEventListener("scroll", () => {
      const rectone = bgone.getBoundingClientRect();
      const recttwo = bgtwo.getBoundingClientRect();
      const rectthree = bgthree.getBoundingClientRect();

      if (rectone.top <= 0) {
        setPageNumber(1);
      } else {
        setBg("");
      }
      if (recttwo.top <= 0) {
        setPageNumber(2);
      }
      if (rectthree.top <= 0) {
        setPageNumber(3);
      }
    });
  });

  useEffect(() => {
    if (pageNumber === 1) {
      setBg("bg-[#d79e67]");
      setTimeout(() => {
        setBg("");
        play();
      }, 200);
    }

    if (pageNumber === 2) {
      setBg("bg-[#d79e67]");
      setTimeout(() => {
        setBg("");
        play();
      }, 200);
      setTimeout(() => {
        setBg("bg-[#d79e67]");
      }, 300);
      setTimeout(() => {
        setBg("");
        play();
      }, 400);
    }

    if (pageNumber === 3) {
      setBg("bg-[#d79e67]");
      setTimeout(() => {
        setBg("");
        play();
      }, 200);
      setTimeout(() => {
        setBg("bg-[#d79e67]");
      }, 300);
      setTimeout(() => {
        setBg("");
        play();
      }, 400);
      setTimeout(() => {
        setBg("bg-[#d79e67]");
      }, 500);
      setTimeout(() => {
        setBg("");
        play();
      }, 600);
      setTimeout(() => {
        setBg("bg-[#d79e67]");
      }, 700);
      setBg("bg-[#d79e67]");

    }
  }, [pageNumber, play]);


  const addStickerOnThePage = () => {
  window.addEventListener('click', (m) => {

    const sticker = document.getElementById('sticker')
    const x = m.pageX;
    const y = m.pageY;

    sticker.style.position = 'absolute'
    sticker.style.left = x + 'px'
    sticker.style.top = y + 'px'
    sticker.style.background = 'red'
    sticker.style.display= 'block'

    // setTimeout(() => {
    //   dv.style.display = 'none'
    // }, 2000)
  })

  }

  const canIAddStickerOnTopOfYou = (boolean) => {
    if(boolean === true) {
      addStickerOnThePage()
    }
    else{
      return;
    }
  }

  window.addEventListener('click', () => {
    canIAddStickerOnTopOfYou(true)
  })

  return (
    <>
      <HeroBanner />
      <AboutMe />
      <PicturesAndWork />

       <div id="sticker" className={`w-10 h-10 hidden ${stickerPosition} ${stickerAnimation}`}>
       </div>

      <div className={`${bg} mix-blend-difference`}>
      <div className={`h-screen `}></div>
      <div
        id="bgone"
        className="h-[50vh]"
      ></div>
      <div
        id="bgtwo"
        className="h-[50vh]"
      ></div>
      <div
        id="bgthree"
        className="h-[50vh]"
      ></div>
      <div
        id="bgfour"
        className="h-[50vh]"
      ></div>

      </div>
      <ContactMe bg={bg}/>
    </>
  );
};

export default Home;
