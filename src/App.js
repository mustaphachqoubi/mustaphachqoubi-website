import { React, useEffect, useState } from "react";
import { Navbar } from "./components";
import Home from "./pages/Home";
import "./App.css";

function App() {
  // const [rotate, setRotate] = useState(0);
  // const rvalues = [0, 1, 2, 3, 6, 12, 45, 90, 180];
  const [currentScroll, setcurrentScroll] = useState(0)

  function throttle(func, delay) {
    let timeoutId;
    let lastExecTime = 0;
    return function(...args) {
      const currentTime = new Date().getTime();
      const timeSinceLastExec = currentTime - lastExecTime;
      if (!timeoutId && timeSinceLastExec >= delay) {
        func.apply(this, args);
        lastExecTime = currentTime;
      } else if (!timeoutId) {
        timeoutId = setTimeout(() => {
          timeoutId = null;
          lastExecTime = new Date().getTime();
          func.apply(this, args);
        }, delay - timeSinceLastExec);
      }
    };
  }

  useEffect(() => {
    window.addEventListener('scroll', throttle(() => {
      setcurrentScroll(window.pageYOffset)
    }, 100))
    // currentScroll >= 10 && setRotate(8)  
  })

  return (
    <>
      <div
        className={`bg-[#d79e67]`}
      >
        <Navbar currentScroll={currentScroll}/>
        <Home />
      </div>
      <div
        className={`bg-[#d79e67]`}
      >
        <Home />
      </div>
    </>
  );
}

export default App;
