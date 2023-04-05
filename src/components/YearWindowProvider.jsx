import React from "react";

export const YearWindowrovider = ({ children }) => {
  return (
    <div className="h-screen flex justify-center items-center px-5 md:px-10 flex-col mb-40">
      {children}
    </div>
  );
};
