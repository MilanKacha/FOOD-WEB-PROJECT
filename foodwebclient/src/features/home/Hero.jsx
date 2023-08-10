import React from "react";
import Navbar from "../Navbar/Navbar";
import background from "../../assests/bg.jpg";
import thali from "../../assests/thali.png";
import "../../style/hero.css";

const Hero = () => {
  return (
    <>
      <Navbar />
      <div className="hero">
        <img src={background} alt="" className="hero-img" />
        <div className="hero-content">
          <div className="hero-content-text">
            <h1>Discover the best food &</h1>
            <h1>drinks in Bengaluru</h1>
          </div>
          <div className="hero-content-img">
            <img src={thali} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
