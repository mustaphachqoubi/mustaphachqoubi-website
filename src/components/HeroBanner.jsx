import { React, useState, useEffect, useRef } from "react";
import { RichaSVG, MustaphaSVG, HorseSVG } from '../components'
import {setHeroBannerHeight} from '../Redux/reducers/heroBannerHeight'
import { useDispatch } from "react-redux";

const HeroBanner = () => {
  const [isMustaphaSvgDone, setIsMustaphaSvgDone] = useState(false);

  const heroBannerHeight = useRef()
  const dispatch = useDispatch()

  useEffect(() => {
    setTimeout(() => {
      setIsMustaphaSvgDone(true);
    }, 3100);

    dispatch(setHeroBannerHeight(heroBannerHeight.current.clientHeight))
  }, [dispatch]);
  return (
    <>
      <div ref={heroBannerHeight} className="relative h-screen flex justify-center items-center">
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
