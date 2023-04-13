import React, { useState, useEffect } from "react";
import { HeroBanner, AboutMe, PicturesAndWork, ContactMe } from "../components";
import useSound from "use-sound";
import bulb from "../assets/bulb.mp3";

const Home = () => {
  const [bg, setBg] = useState("");
  const [pageNumber, setPageNumber] = useState(0);

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
      setBg("#d79e67");
      setTimeout(() => {
        setBg("");
        play();
      }, 200);
    }

    if (pageNumber === 2) {
      setBg("#d79e67");
      setTimeout(() => {
        setBg("");
        play();
      }, 200);
      setTimeout(() => {
        setBg("#d79e67");
      }, 300);
      setTimeout(() => {
        setBg("");
        play();
      }, 400);
    }

    if (pageNumber === 3) {
      setBg("#d79e67");
      setTimeout(() => {
        setBg("");
        play();
      }, 200);
      setTimeout(() => {
        setBg("#d79e67");
      }, 300);
      setTimeout(() => {
        setBg("");
        play();
      }, 400);
      setTimeout(() => {
        setBg("#d79e67");
      }, 500);
      setTimeout(() => {
        setBg("");
        play();
      }, 600);
      setTimeout(() => {
        setBg("#d79e67");
      }, 700);
      setBg("#d79e67");

    }
  }, [pageNumber, play]);

  return (
    <>
      <HeroBanner />
      <AboutMe />
      <PicturesAndWork />
      <div className={`h-screen mix-blend-difference bg-[${bg}]`}></div>
      <div
        id="bgone"
        className={`h-[50vh] mix-blend-difference bg-[${bg}]`}
      ></div>
      <div
        id="bgtwo"
        className={`h-[50vh] mix-blend-difference bg-[${bg}]`}
      ></div>
      <div
        id="bgthree"
        className={`h-[50vh] mix-blend-difference bg-[${bg}]`}
      ></div>
      <div
        id="bgfour"
        className={`h-[50vh] mix-blend-difference bg-[${bg}]`}
      ></div>
      <div
        id="bgfive"
        className={`h-[50vh] mix-blend-difference bg-[${bg}]`}
      ></div>
      <div
        id="bgsix"
        className={`h-[50vh] mix-blend-difference bg-[${bg}]`}
      ></div>
      <ContactMe bg={bg}/>
    </>
  );
};

export default Home;
