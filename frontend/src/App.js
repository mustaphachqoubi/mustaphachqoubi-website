import React, { useEffect } from "react";
import { Navbar, Services, Service, Admin, CreateService, Meeting } from "./components";
import Home from "./pages/Home";
import { useDispatch } from "react-redux";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import { setCurrentScrollingLevel } from "./Redux/reducers/currentScrollingLevel";

function App() {
  const dispatch = useDispatch();

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
        dispatch(setCurrentScrollingLevel(window.pageYOffset));
      }, 100)
    );
  }, [dispatch]);

  return (
    <div className="thecontainer relative">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/:serviceId/items/:itemId" element={<Service />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/postService" element={<CreateService />} />
          <Route path="/meeting" element={<Meeting />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
