import React from "react";
import Navbar from "../features/Navbar/Navbar";

const LayOut = ({ children }) => {
  return (
    <>
      <Navbar />
      {children};
    </>
  );
};

export default LayOut;
