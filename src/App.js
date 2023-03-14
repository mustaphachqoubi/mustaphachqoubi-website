import { React, useState } from "react";
import { Navbar } from "./components";
import Home from "./pages/Home";

function App() {
  // const [rotate, setRotate] = useState(0);
  const rvalues = [0, 1, 2, 3, 6, 12, 45, 90, 180];

  // let lastScrollPosition = window.pageYOffset;

  // window.addEventListener("scroll", () => {
  //   const currentScrollPosition = window.pageYOffset;
  //   if (currentScrollPosition > lastScrollPosition) {
  //     rotate < rvalues.length ? setRotate(rotate + 1) : setRotate(rvalues.length)
  //   } else if (currentScrollPosition < lastScrollPosition) {
  //     rvalues >= rvalues.length && setRotate(rotate - 1)
  //   }
  //   lastScrollPosition = currentScrollPosition;
  // });

  return (
    <>
      <div className="relative bg-[#d79e67]">
        <Navbar />
        <Home />
        <div className="curl absolute bottom-0 left-0 w-[120px] h-[120px] bg-gradient-to-r from-[#8b6846] to-[#e5ac73] transition ease-in-out delay-100 drop-shadow-2xl 
        
        before:content-['']
        before:z-[-1]
        before:left-[12.5%]
        before:bottom-[5.8%]
        before:width-[70%]
        before:h-[55%]
        before:drop-shadow-xl
        hover:w-[240px] h-[240px]

        after:left-auto
        after:right-[5.8%]
        after:top-auto
        after:bottom-[14.16%]
        "></div>
      </div>
      {/* <div className={`origin-bottom-right rotate-${rvalues[rotate]}`}>
        <Navbar />
        <Home />
      </div> */}
    </>
  );
}

export default App;
