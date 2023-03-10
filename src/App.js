import React from "react";
import Home from "./pages/Home";
import { Navbar } from "./components";

function App() {
  return (
    <div className="max-w-[1440px] m-auto">
    <Navbar />
    <Home />
    </div>
  );
}

export default App;
