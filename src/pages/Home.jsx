import React, { useState, useEffect } from "react";
import { HeroBanner, AboutMe, PicturesAndWork, ContactMe } from "../components";
import useSound from "use-sound";
import bulb from "../assets/bulb.mp3";
import {useDispatch} from 'react-redux'
import {setOutOfInkBg} from '../Redux/reducers/outOfInkBg.js'

const Home = () => {
  const [bg, setBg] = useState("");
  const [pageNumber, setPageNumber] = useState(0);

  const bulpSound = bulb;

  const dispatch = useDispatch()

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
    if (pageNumber === 2) {
      setBg("bg-[#d79e67]");
       dispatch(setOutOfInkBg('bg-[#d79e67]'))
      setTimeout(() => {
        setBg("");
        dispatch(setOutOfInkBg(''))
        play();
      }, 100);
      setTimeout(() => {
        setBg("bg-[#d79e67]");
        dispatch(setOutOfInkBg('bg-[#d79e67]'))
      }, 200);
      setTimeout(() => {
        setBg("");
        dispatch(setOutOfInkBg(''))
        play();
      }, 300);
      setTimeout(() => {
        setBg("bg-[#d79e67]");
        dispatch(setOutOfInkBg('bg-[#d79e67]'))
      }, 400);
    }
    if (pageNumber > 2){
      dispatch(setOutOfInkBg('bg-[#d79e67]'))
    }
    if (pageNumber < 2){
      dispatch(setOutOfInkBg(''))
    }
  }, [pageNumber, play, dispatch]);

  window.addEventListener('scroll', () => {
    if((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight - 2){
      setBg("bg-[#d79e67]")
    }
  })

  return (
    <>
      <HeroBanner />
      <AboutMe />
      <PicturesAndWork />

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
