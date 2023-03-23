import { React, useState, useEffect } from "react";

const Fader = ({ children, progress }) => {
  const [fade, setfade] = useState("");

//   useEffect(() => {
//     if (progress === 0) {
//       setfade("fade_4s_ease-in-out");
//     }

//     if (progress >= 1) {
//       setfade("fadeout_4s_ease-in-out");
//     }
//   }, [progress]);

  return (
    <>
      <div className={`opacity-[${progress}]`}>
        {children}
      </div>
    </>
  );
};

export default Fader;
