import React, { useEffect } from "react";
import "../../../style/delivery.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllRestorantAsync, selectAllRestorants } from "../RestorantSlice";

import HeaderOption from "../../Navbar/HeaderOption";
import HeaderFilter from "../../Navbar/HeaderFilter";
import RestorantCard from "../../../ui/RestorantCard";
// import Biryani from "../../assests/hero-popular/biryani.avif";
// import Dosa from "../../assests/hero-popular/dosa.avif";
// import Idali from "../../assests/hero-popular/idali.avif";
// import Paratha from "../../assests/hero-popular/Paratha.avif";
// import Pizza from "../../assests/hero-popular/Pizza.avif";
// import Tanduri from "../../assests/hero-popular/Tanduri.avif";
// import Vada from "../../assests/hero-popular/vada.avif";
// import Biriyani from "../../assests/hero-popular/biryani.avif";
// import BurgurP from "../../assests/hero-popular/BurgurMan.avif";
// import Cack from "../../assests/hero-popular/cack.avif";

import SliderComponent from "../../../ui/SliderComponent";

// const RestorantData = [
//   {
//     img: Biryani,
//     name: " Millet Express",
//     rating: "4.5",
//     description: "Healthy Food,",
//     price: "₹200 for one",
//     deliverytime: "20min",
//   },
//   {
//     img: Biryani,
//     name: " Millet Express",
//     rating: "4.5",
//     description: "Healthy Food,",
//     price: "₹200 for one",
//     deliverytime: "20min",
//   },
//   {
//     img: Biryani,
//     name: " Millet Express",
//     rating: "4.5",
//     description: "Healthy Food,",
//     price: "₹200 for one",
//     deliverytime: "20min",
//   },
//   {
//     img: Biryani,
//     name: " Millet Express",
//     rating: "4.5",
//     description: "Healthy Food,",
//     price: "₹200 for one",
//     deliverytime: "20min",
//   },
//   {
//     img: Biryani,
//     name: " Millet Express",
//     rating: "4.5",
//     description: "Healthy Food,",
//     price: "₹200 for one",
//     deliverytime: "20min",
//   },
//   {
//     img: Biryani,
//     name: " Millet Express",
//     rating: "4.5",
//     description: "Healthy Food,",
//     price: "₹200 for one",
//     deliverytime: "20min",
//   },
//   {
//     img: Biryani,
//     name: " Millet Express",
//     rating: "4.5",
//     description: "Healthy Food,",
//     price: "₹200 for one",
//     deliverytime: "20min",
//   },
//   {
//     img: Biryani,
//     name: " Millet Express",
//     rating: "4.5",
//     description: "Healthy Food,",
//     price: "₹200 for one",
//     deliverytime: "20min",
//   },
//   {
//     img: Biryani,
//     name: " Millet Express",
//     rating: "4.5",
//     description: "Healthy Food,",
//     price: "₹200 for one",
//     deliverytime: "20min",
//   },
//   {
//     img: Biryani,
//     name: " Millet Express",
//     rating: "4.5",
//     description: "Healthy Food,",
//     price: "₹200 for one",
//     deliverytime: "20min",
//   },
//   {
//     img: Biryani,
//     name: " Millet Express",
//     rating: "4.5",
//     description: "Healthy Food,",
//     price: "₹200 for one",
//     deliverytime: "20min",
//   },
//   {
//     img: Biryani,
//     name: " Millet Express",
//     rating: "4.5",
//     description: "Healthy Food,",
//     price: "₹200 for one",
//     deliverytime: "20min",
//   },
//   {
//     img: Biryani,
//     name: " Millet Express",
//     rating: "4.5",
//     description: "Healthy Food,",
//     price: "₹200 for one",
//     deliverytime: "20min",
//   },
//   {
//     img: Biryani,
//     name: " Millet Express",
//     rating: "4.5",
//     description: "Healthy Food,",
//     price: "₹200 for one",
//     deliverytime: "20min",
//   },
//   {
//     img: Biryani,
//     name: " Millet Express",
//     rating: "4.5",
//     description: "Healthy Food,",
//     price: "₹200 for one",
//     deliverytime: "20min",
//   },
//   {
//     img: Biryani,
//     name: " Millet Express",
//     rating: "4.5",
//     description: "Healthy Food,",
//     price: "₹200 for one",
//     deliverytime: "20min",
//   },
// ];

// const PopularItem = [
//   {
//     imageSrc: Dosa,
//     heading: "Podi Dosai",
//     description: "Get Up To 50% off",
//     price: "₹145",
//     button: "Order Now",
//   },
//   {
//     imageSrc: Idali,
//     heading: "Idly [2 Nos]",
//     description: "Get Up To 50% off",
//     price: "₹70",
//     button: "Order Now",
//   },
//   {
//     imageSrc: Tanduri,
//     heading: "Tandoori Paneer",
//     description: "Get Up To 50% off",
//     price: "₹165",
//     button: "Order Now",
//   },
//   {
//     imageSrc: Pizza,
//     heading: "Vegetariana Pizza",
//     description: "Get Up To 50% off",
//     price: "₹₹495",
//     button: "Order Now",
//   },
//   {
//     imageSrc: Biriyani,
//     heading: "Biryani",
//     description: "Get Up To 50% off",
//     price: "₹125",
//     button: "Order Now",
//   },
//   {
//     imageSrc: Cack,
//     heading: "Cack",
//     description: "Get Up To 50% off",
//     price: "₹645",
//     button: "Order Now",
//   },
//   {
//     imageSrc: Paratha,
//     heading: "Aloo Paratha",
//     description: "Get Up To 50% off",
//     price: "₹149",
//     button: "Order Now",
//   },
//   {
//     imageSrc: Vada,
//     heading: "Medhu Vadai",
//     description: "Get Up To 50% off",
//     price: "₹50",
//     button: "Order Now",
//   },
// ];

const Delivery = () => {
  const RestorantData = useSelector(selectAllRestorants);
  const dispatch = useDispatch();
  console.log(RestorantData);

  useEffect(() => {
    dispatch(fetchAllRestorantAsync());
  }, [dispatch]);
  return (
    <div>
      <HeaderOption />
      <HeaderFilter />
      {/* 
      <section className="popular-item">
        <SliderComponent data={PopularItem} heading={"Popular Item"} />
      </section> */}

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
