import React, { useState } from "react";
import HeroSlider from "./HeroSlider";
import "../../style/home.css";
import Navbar from "../Navbar/Navbar";
import HeroChoice from "./HeroChoice";
import OrderOnline from "../../assests/hero-choice/online.webp";
import Dining from "../../assests/hero-choice/dining.avif";
import Club from "../../assests/hero-choice/club.jpg";
import HeroLocation from "./HeroLocation";
import Button from "../../ui/Button";
import HeroDeal from "./HeroDeal";
import Burgur from "../../assests/hero-deal/burger1.jpg";

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

const Locations = [
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

const DealsData = [
  {
    id: 1,
    img: Burgur,
    heading: "Top Deals on Burger",
    description: `Get Free Classic Veg Cheese Burger with every Order Minimum cart amount should be Rs. 299 Access this deal by using the given Promo code`,
  },
  {
    id: 1,
    img: Burgur,
    heading: "jefvejwhfgvejh",
    description: "gcfvkgcfekfcejfvejvefjhevfejfv",
  },
  {
    id: 1,
    img: Burgur,
    heading: "jefvejwhfgvejh",
    description: "gcfvkgcfekfcejfvejvefjhevfejfv",
  },
];

const Home = () => {
  const [visible, setVisivle] = useState(6);

  const showMoreItems = () => {
    setVisivle((prevValue) => prevValue + 3);
  };
  const showLessItems = () => {
    setVisivle(3);
  };
  return (
    <>
      <main className="home">
        <section className="hero-section">
          <Navbar />
        </section>
        <section className="hero-choice-section">
          <div className="choice">
            {HeroChoiceData.map((item) => (
              <HeroChoice key={item.id} data={item} />
            ))}
          </div>
        </section>
        <section className="hero-brands">
          <HeroSlider />
        </section>
        <section className="hero-location-section">
          <div className="hero-location-text">
            <h2>Popular localities in and around Bengaluru</h2>
          </div>
          <div className="location">
            {Locations.slice(0, visible).map((location) => (
              <HeroLocation key={location.id} data={location} />
            ))}
          </div>
          {visible !== Locations.length ? (
            <Button onClick={showMoreItems}>AddMore</Button>
          ) : (
            <Button onClick={showLessItems}>Addless</Button>
          )}
        </section>
        <section className="hero-deal-section">
          {DealsData.map((deal, index) => (
            <HeroDeal key={index} data={deal} index={index} />
          ))}
        </section>
      </main>
    </>
  );
};

export default Home;
