import React, { useState, useEffect, useRef } from "react";
import { MustaphaSVG, RichaSVG, HorseSVG, Story } from "../components";
import { useSelector } from "react-redux";

// import { useDispatch } from "react-redux";

// import { setCurrentScrollingLevel } from "../Redux/reducers/currentScrollingLevel";


const Home = () => {
  const { isStoryLinesDone } = useSelector((state) => state.isStoryLinesDone);

  const [isMustaphaSvgDone, setIsMustaphaSvgDone] = useState(false);

  // const section1 = useRef(null)
  // const section2 = useRef(null)
  // const section3 = useRef(null)

  // const dispatch = useDispatch();



  // function throttle(func, delay) {
  //   let timeoutId;
  //   let lastExecTime = 0;
  //   return function (...args) {
  //     const currentTime = new Date().getTime();
  //     const timeSinceLastExec = currentTime - lastExecTime;
  //     if (!timeoutId && timeSinceLastExec >= delay) {
  //       func.apply(this, args);
  //       lastExecTime = currentTime;
  //     } else if (!timeoutId) {
  //       timeoutId = setTimeout(() => {
  //         timeoutId = null;
  //         lastExecTime = new Date().getTime();
  //         func.apply(this, args);
  //       }, delay - timeSinceLastExec);
  //     }
  //   };
  // }

  useEffect(() => {
    setTimeout(() => {
      setIsMustaphaSvgDone(true);
    }, 3100);
  }, [isStoryLinesDone]);

  // useEffect(() => {
  //   const observer = new IntersectionObserver(
  //     ([entry]) => {
  //       if (entry.isIntersecting) {
  //         console.log('id', entry.target.id)
  //         // throttle(() => {
  //           dispatch(setCurrentScrollingLevel(entry.target.id));
  //         // }, 100)
  //       }
  //     },
  //     { threshold: 0.5 }
  //   );
  
  //   // if (elementRef.current) {
  //   //   observer.observe(elementRef.current);
  //   // }
  
  //   // return () => {
  //   //   if (elementRef.current) {
  //   //     observer.unobserve(elementRef.current);
  //   //   }
  //   // };
  //   observer.observe(section1.current);
  //   observer.observe(section2.current);
  //   observer.observe(section3.current);
  // }, [dispatch]); 

  return (
    <>
      {/* <div id="section1" ref={section1} className="section flex justify-center items-center text-4xl font-bold h-screen bg-red-500">one</div>
      <div id="section2" ref={section2} className="section flex justify-center items-center text-4xl font-bold h-screen bg-green-500">two</div>
      <div id="section3" ref={section3} className="section flex justify-center items-center text-4xl font-bold h-screen bg-yellow-500">three</div> */}

      <div className="relative h-screen flex justify-center items-center ">
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

      <div className="flex justify-center items-center h-screen  ">
        <Story />
      </div>

      {isStoryLinesDone === true && (
        <div className="flex justify-center items-center px-10 h-screen ">
          <h1>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
            error, dolor voluptatem quam excepturi sed quod distinctio maxime
            iure non quo maiores quae labore, voluptatum sunt eos similique
            assumenda et. Libero dolorem, ducimus aspernatur et maxime animi
            eaque amet sapiente temporibus saepe vel, voluptas culpa ad!
            Similique nisi nobis reiciendis!
          </h1>
        </div>
      )}

    </>
  );
};

export default Home;
