import React, { useRef, useState, useEffect } from "react";
import { storyIntroLines } from "../assets/storyIntroLines";

const AboutMe = () => {
  // const [currentPage, setCurrentPage] = useState(1);
  const [stickyPosition, setStickyPosition] = useState('sticky top')
  const [progress, setProgress] = useState(0);
  const [maxProgress, setMaxProgress] = useState(0);
  const LinesRef = useRef(storyIntroLines.map(() => React.createRef()));

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const currentPosition = window.pageYOffset;
      const maxProgress = windowHeight * (storyIntroLines.length);
      setProgress(Math.min(currentPosition, maxProgress));
      setMaxProgress(maxProgress)
      // LinesRef.current.forEach((line, index) => {
      //   const rect = line.current.getBoundingClientRect();
      //   if(rect.top === 0){
      //     setCurrentPage(index + 1);
      //   }
      // })
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };

  }, []);

  useEffect(() => { 
  if(progress === maxProgress){
  setStickyPosition(' ')
  } 
  else{
  setStickyPosition('sticky top')
  }
}, [progress, maxProgress])

  const calculateOpacity = (index) => {
  const windowHeight = window.innerHeight;
  const linePosition = index * windowHeight;
  const distanceFromTop = Math.max(progress - linePosition, 0);
  const nextLinePosition = (index + 1) * windowHeight;
  const distanceToNextLine = Math.max(progress - nextLinePosition, 0);
  const adjustedOpacity = Math.min(distanceToNextLine / windowHeight, 1);
  const opacity = Math.max((distanceFromTop - distanceToNextLine) / windowHeight, 0);
  return opacity * (1 - adjustedOpacity);
  };
    
  return (
    <>
      {storyIntroLines.map((line, index) => (
        <div
          ref={LinesRef.current[index]}
          key={line.id}
          className={`px-8 h-screen text-center ${stickyPosition}-0 flex justify-center items-center`}
        >
          <h1
            style={{
              opacity: calculateOpacity(index),
              transition: "opacity 0.5s ease-in-out",
            }}
            className={`font-bold text-2xl tracking-wide`}
          >
            {line.line}
          </h1>
        </div>
      ))}
    </>
  );
};

export default AboutMe;





// import React, { useRef, useState, useEffect } from "react";
// import { storyIntroLines } from "../assets/storyIntroLines";
//
// const AboutMe = () => {
//   // const [currentPage, setCurrentPage] = useState(0);
//   const [opacity, setOpacity] = useState(3);
//   const [progress, setProgress] = useState(0)
//   const LinesRef = useRef(storyIntroLines.map(() => React.createRef()));
//
//   
//
//   useEffect(() => {
//     window.addEventListener('scroll', () => {
//       setProgress(window.pageYOffset)
//     })
//     // setOpacity(progress.toString().slice(1, 1))
//     setOpacity(progress.toString().slice(1, 2))
//   }, [progress])
//
//   return (
//     <>
//       {storyIntroLines.map((line, index) => (
//         <div
//           ref={LinesRef.current[index]}
//           key={line.id}
//           className="px-8 h-screen text-center sticky top-0 flex justify-center items-center"
//         >
//           <h1
//             style={{ opacity: `0.${opacity}` }}
//             className={`font-bold text-2xl tracking-wide`}
//           >
//             {line.line}
//             {progress.toFixed(0, 2)}
//           </h1>
//         </div>
//       ))}
//     </>
//   );
// };
//
// export default AboutMe;
