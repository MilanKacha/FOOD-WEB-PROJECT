import React from "react";
import LayOut from "../ui/LayOut";
import Home from "../features/home/Home";

const HomePage = () => {
  return (
    <LayOut>
      <div className="page-wrapper">
        <Home />
      </div>
    </LayOut>
  );
};

export default HomePage;
