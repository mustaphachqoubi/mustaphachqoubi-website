import React, { useState, useEffect } from "react";
import { MustaphaSVG, RichaSVG, HorseSVG } from "../components";

const Home = () => {
  const [isRichaSvgTime, setIsRichaSvgTime] = useState(false);

  // const [richaOpacity, setrichaOpacity] = useState(10);
  // const [horseOpacity, setHorseOpacity] = useState(0);

  // const ScrollDown = () => {
  //   if (richaOpacity >= 100) {
  //     setrichaOpacity(100);
  //     if (horseOpacity >= 100) {
  //       setHorseOpacity(100);
  //     } else {
  //       setHorseOpacity(horseOpacity + 10);
  //     }
  //   } else {
  //     setrichaOpacity(richaOpacity + 10);
  //   }
  // };

  // const ScrollUp = () => {
  //   if(horseOpacity !== 0){
  //     setHorseOpacity(horseOpacity - 10)
  //   }
  //   if(richaOpacity !== 10){
  //     setrichaOpacity(richaOpacity - 10)
  //   }
  // };

  useEffect(() => {
    setTimeout(() => {
      setIsRichaSvgTime(true);
    }, 3100);
  }, []);

// var prevScrollPos = window.pageYOffset;

// window.addEventListener("scroll", function() {
//   var documentHeight = document.body.scrollHeight - window.innerHeight;

//   var scrollPos = window.pageYOffset;

//   var percentageScrolled = (scrollPos / documentHeight) * 100;

//   percentageScrolled = Math.round(percentageScrolled * 100) / 100;

//   var scrollDirection = (scrollPos > prevScrollPos) ? 'down' : 'up';
  
//   prevScrollPos = scrollPos;

//   percentageScrolled >= 1 && ScrollDown()
//   percentageScrolled <= 0 && ScrollUp()
// });


  return (
    <>
      <div className="hidden absolute top-20 w-full md:flex justify-center md:justify-start">
        {isRichaSvgTime === true && <RichaSVG  />}
      </div>
      <MustaphaSVG />
      <div className="hidden absolute bottom-[2rem] w-full md:flex justify-center md:justify-end">
        {isRichaSvgTime === true && <HorseSVG  />}
      </div>
      
    </>
  );
};

export default Home;
