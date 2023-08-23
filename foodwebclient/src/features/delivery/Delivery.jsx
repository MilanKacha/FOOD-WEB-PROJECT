import React from "react";
import "../../style/delivery.css";

import HeaderOption from "../Navbar/HeaderOption";
import HeaderFilter from "../Navbar/HeaderFilter";
import RestorantCard from "../../ui/RestorantCard";
import Biryani from "../../assests/hero-popular/biryani.avif";

const RestorantData = [
  {
    img: Biryani,
    name: " Millet Express",
    rating: "4.5",
    description: "Healthy Food,",
    price: "₹200 for one",
    deliverytime: "20min",
  },
  {
    img: Biryani,
    name: " Millet Express",
    rating: "4.5",
    description: "Healthy Food,",
    price: "₹200 for one",
    deliverytime: "20min",
  },
  {
    img: Biryani,
    name: " Millet Express",
    rating: "4.5",
    description: "Healthy Food,",
    price: "₹200 for one",
    deliverytime: "20min",
  },
  {
    img: Biryani,
    name: " Millet Express",
    rating: "4.5",
    description: "Healthy Food,",
    price: "₹200 for one",
    deliverytime: "20min",
  },
  {
    img: Biryani,
    name: " Millet Express",
    rating: "4.5",
    description: "Healthy Food,",
    price: "₹200 for one",
    deliverytime: "20min",
  },
  {
    img: Biryani,
    name: " Millet Express",
    rating: "4.5",
    description: "Healthy Food,",
    price: "₹200 for one",
    deliverytime: "20min",
  },
  {
    img: Biryani,
    name: " Millet Express",
    rating: "4.5",
    description: "Healthy Food,",
    price: "₹200 for one",
    deliverytime: "20min",
  },
  {
    img: Biryani,
    name: " Millet Express",
    rating: "4.5",
    description: "Healthy Food,",
    price: "₹200 for one",
    deliverytime: "20min",
  },
  {
    img: Biryani,
    name: " Millet Express",
    rating: "4.5",
    description: "Healthy Food,",
    price: "₹200 for one",
    deliverytime: "20min",
  },
  {
    img: Biryani,
    name: " Millet Express",
    rating: "4.5",
    description: "Healthy Food,",
    price: "₹200 for one",
    deliverytime: "20min",
  },
  {
    img: Biryani,
    name: " Millet Express",
    rating: "4.5",
    description: "Healthy Food,",
    price: "₹200 for one",
    deliverytime: "20min",
  },
  {
    img: Biryani,
    name: " Millet Express",
    rating: "4.5",
    description: "Healthy Food,",
    price: "₹200 for one",
    deliverytime: "20min",
  },
  {
    img: Biryani,
    name: " Millet Express",
    rating: "4.5",
    description: "Healthy Food,",
    price: "₹200 for one",
    deliverytime: "20min",
  },
  {
    img: Biryani,
    name: " Millet Express",
    rating: "4.5",
    description: "Healthy Food,",
    price: "₹200 for one",
    deliverytime: "20min",
  },
  {
    img: Biryani,
    name: " Millet Express",
    rating: "4.5",
    description: "Healthy Food,",
    price: "₹200 for one",
    deliverytime: "20min",
  },
  {
    img: Biryani,
    name: " Millet Express",
    rating: "4.5",
    description: "Healthy Food,",
    price: "₹200 for one",
    deliverytime: "20min",
  },
];

const Delivery = () => {
  return (
    <div>
      <HeaderOption />
      <HeaderFilter />
      <section className="restorantname-section">
        <h2 style={{ color: "black" }}>Best Food in Bengaluru</h2>
        <div className="restorsntname-container">
          {RestorantData.map((item, index) => (
            <RestorantCard props={item} key={index} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Delivery;
