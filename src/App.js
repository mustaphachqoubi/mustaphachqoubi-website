import React, { useEffect, lazy } from "react";
import { Navbar} from "./components";
import Home from "./pages/Home";
import { useDispatch } from "react-redux";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import { setCurrentScrollingLevel } from "./Redux/reducers/currentScrollingLevel";


const Services = lazy(() => import('./components/Services.jsx'))

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
    <div className="thecontainer max-w-[1536px] mx-auto relative">
      <BrowserRouter>
        <Navbar /> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route 
            path="/services"
            element={
            <React.Suspense fallback={<h1>Loading</h1>}>
            <Services />
            </React.Suspense>
          } 
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
