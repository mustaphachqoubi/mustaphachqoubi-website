import { React, useEffect, useState } from "react";
import { Navbar } from "./components";
import Home from "./pages/Home";

function App() {
  const [currentScroll, setcurrentScroll] = useState(0);

  function throttle(func, delay) {
    let timeoutId;
    let lastExecTime = 0;
    return function (...args) {
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
    window.addEventListener(
      "scroll",
      throttle(() => {
        setcurrentScroll(window.pageYOffset);
      }, 100)
    );
  });

  return (
    <div className="bg-[#d79e67] max-w-[1440px] mx-auto relative">
      <Navbar currentScroll={currentScroll} />
      <Home />
    </div>
  );
}

export default App;
