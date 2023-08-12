import React from "react";

import HeroSlider from "./HeroSlider";
import "../../style/home.css";
import Navbar from "../Navbar/Navbar";

const Home = () => {
  return (
    <>
      <main className="home">
        <section className="hero-section">
          <Navbar />
        </section>
        <section className="hero-brands">
          <HeroSlider />
        </section>
      </main>
    </>
  );
};

export default Home;
