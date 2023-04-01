import React, { useState, useEffect } from "react";
import {Window} from "./Window";

export const Year = ({ children }) => {
  return (
    <div className="flex-1 flex justify-center items-center">
      <div>{children}</div>
    </div>
  );
};

export const Graph = ({ children }) => {
  return (
    <div className="flex-1 w-full h-screen flex justify-center md:justify-start md:items-center">
      <Window>
        {children}
      </Window>
    </div>
  );
};

export const YearGraphProvider = ({ children }) => {
  return (
    <div className="h-screen flex justify-center items-center flex-col md:flex-row">
      {children}
    </div>
  );
};
