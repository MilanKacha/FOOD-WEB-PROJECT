import React from "react";

import HeroSlider from "./HeroSlider";
import "../../style/home.css";
import Navbar from "../Navbar/Navbar";
import HeroChoice from "./HeroChoice";
import OrderOnline from "../../assests/hero-choice/online.webp";
import Dining from "../../assests/hero-choice/dining.avif";
import Club from "../../assests/hero-choice/club.jpg";
import HeroLocation from "./HeroLocation";

const HeroChoiceData = [
  {
    id: 1,
    img: OrderOnline,
    heading: "Order Online",
    description: "Stay home and order to your doorstep",
  },
  {
    id: 2,
    img: Dining,
    heading: "Dining",
    description: "View the city's favourite dining venues",
  },
  {
    id: 3,
    img: Club,
    heading: "Nightlife and Clubs",
    description: "Explore the city’s top nightlife outlets",
  },
];

const Location = [
  { id: 1, location: "Indiranagar", places: "495 places" },
  { id: 2, location: "Indiranagar", places: "495 places" },
  { id: 3, location: "Indiranagar", places: "495 places" },
  { id: 4, location: "Indiranagar", places: "495 places" },
  { id: 5, location: "Indiranagar", places: "495 places" },
  { id: 6, location: "Indiranagar", places: "495 places" },
  { id: 7, location: "Indiranagar", places: "495 places" },
  { id: 8, location: "Indiranagar", places: "495 places" },
  { id: 9, location: "Indiranagar", places: "495 places" },
  { id: 10, location: "Indiranagar", places: "495 places" },
  { id: 11, location: "Indiranagar", places: "495 places" },
  { id: 12, location: "Indiranagar", places: "495 places" },
];

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
        <section className="hero-choice-section">
          <div className="choice">
            {HeroChoiceData.map((item) => (
              <>
                <HeroChoice key={item.id} data={item} />
              </>
            ))}
          </div>
        </section>
        <section className="hero-location-section">
          <div className="location">
            {Location.map(() => (
              <HeroLocation />
            ))}
          </div>
        </section>
      </main>
    </>
  );
};
