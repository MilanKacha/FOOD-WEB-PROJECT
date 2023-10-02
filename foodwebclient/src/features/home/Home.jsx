import React, { useEffect, useState } from "react";
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
import Herofaq from "./Herofaq";
import HeroCollectionDetails from "./HeroCollectionDetails";
import Collection2 from "../../assests/hero-collec/collection2.avif";
import Collection1 from "../../assests/hero-collec/collection1.avif";
import Collection3 from "../../assests/hero-collec/collection3.avif";
import HeroGetApp from "./HeroGetApp";
import Biriyani from "../../assests/hero-popular/biryani.avif";
import BurgurP from "../../assests/hero-popular/BurgurMan.avif";
import Cack from "../../assests/hero-popular/cack.avif";
import Dosa from "../../assests/hero-popular/dosa.avif";
import Idali from "../../assests/hero-popular/idali.avif";
import Paratha from "../../assests/hero-popular/Paratha.avif";
import Pizza from "../../assests/hero-popular/Pizza.avif";
import SandWhich from "../../assests/hero-popular/sandwhich.avif";
import Tanduri from "../../assests/hero-popular/Tanduri.avif";
import Vada from "../../assests/hero-popular/vada.avif";
import SliderComponent from "../../ui/SliderComponent";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAllProductAsync,
  fetchAllProductsByRestorantIdAsync,
  fetchAllRestorantAsync,
  selectAllRestorants,
  selectedAllProducts,
} from "../delivery/RestorantSlice";
import HeroSection from "./HeroSection";
import { fetchAllRestorant } from "../delivery/RestorantApi";
import { Link, useParams } from "react-router-dom";
import Footer from "../Navbar/Footer";

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

const DealsData = [
  {
    id: 1,
    img: `https://res.cloudinary.com/dkaenszh3/image/upload/v1696077215/home/dominoz_vybasv.avif`,
    heading: "Top Deals on Domino's Pizza",
    description: `Black olives, capsicum, onion, grilled mushroom, corn, tomato, jalapeno & extra cheese. Available in Cheese Burst, Wheat Thin Crust and Pan Crust options.`,
  },
  {
    id: 1,
    img: `https://res.cloudinary.com/dkaenszh3/image/upload/v1696077680/home/potful_mclqrf.avif`,
    heading: "Potful - Claypot Biryanis",
    description: `This renowned flavourful biryani is cooked in traditional dum style with succulent chicken in layers of fluffy basmati rice fragrant spices and caramelised onions. Its for those who crave for the feast.`,
  },
  {
    id: 1,
    img: `https://res.cloudinary.com/dkaenszh3/image/upload/v1696077841/home/th_bbc2ix.avif`,
    heading: "Thom's Bakery - Since 1970",
    description: `Experience the vibrancy of Indian flavors on our Tandoori Veg Paneer Pizza. Marinated paneer and an assortment of tandoori veggies rest on a tandoori-flavored crust.`,
  },
];

const FqaDetails = [
  {
    id: 1,
    question: "I don't remember my password?",
    answer:
      "You have already created an account but you can't remember your password? Click on 'Login/Sign Up' at the top of the page. Then click on 'Forgot Password?'. Fill out your phone number and a password recovery will be sent to you by phone.",
  },
  {
    id: 1,
    question: "What are your delivery hours?",
    answer: "Our delivery hour is from 10:00 AM to 08:00 PM.",
  },
  {
    id: 1,
    question: "How much time it takes to deliver the order?",
    answer:
      " Generally it takes between 45 minutes to 1 hour time to deliver the order. Due to long distance or heavy traffic, delivery might take few extra minutes.",
  },
  {
    id: 1,
    question: "Can I edit my order?",
    answer:
      "  Your order can be edited before it reaches the kitchen. You could contact the customer support team via a call to do so. Once an order is placed and the kitchen starts preparing your food, you may not edit its contents.",
  },
];

const CollectionDetails = [
  {
    id: 1,
    img: Collection1,
    heading: "23 Serene Rooftop Places",
    places: "24 Places",
  },
  {
    id: 1,
    img: Collection2,
    heading: "23 Serene Rooftop Places",
    places: "24 Places",
  },
  {
    id: 1,
    img: Collection3,
    heading: "23 Serene Rooftop Places",
    places: "24 Places",
  },
];

const Home = () => {
  const restaurants = useSelector(selectAllRestorants);
  const product = useSelector(selectedAllProducts);
  const dispatch = useDispatch();
  // console.log(product);

  useEffect(() => {
    dispatch(fetchAllRestorantAsync());
    dispatch(fetchAllProductAsync());
  }, [dispatch]);

  // console.log(restaurants);

  const [visible, setVisivle] = useState(6);
  // console.log(product);
  // for PopularSweet filter data
  const PopularSweet = product?.data?.filter((item) => item.popularSweet);
  // console.log(PopularSweet);

  // for PopularItemfilter data
  const PopularItem = product?.data?.filter((item) => item.popularItems);
  // console.log(PopularItem);

  const showMoreItems = () => {
    setVisivle((prevValue) => prevValue + 6);
  };
  const showLessItems = () => {
    setVisivle(6);
  };
  return (
    <>
      <main className="home">
        <section className="hero-section">
          <HeroSection />
        </section>

        <section className="hero-choice-section">
          <div className="choice">
            {HeroChoiceData.map((item) => (
              <HeroChoice key={item.id} data={item} />
            ))}
          </div>
        </section>

        <section className="popular-item">
          <div className="popular-Sweet">
            <SliderComponent data={PopularSweet} heading={"Popular Sweet"} />
          </div>
          <div className="popular-items">
            <SliderComponent data={PopularItem} heading={"Popular Fastfoods"} />
          </div>
        </section>

        {/* <section className="hero-collection-section">
          <div className="hero-collection-container">
            {CollectionDetails.map((collction, index) => (
              <HeroCollectionDetails key={index} data={collction} />
            ))}
          </div>
        </section> */}

        <section className="hero-deal-section">
          {DealsData.map((deal, index) => (
            <HeroDeal key={index} data={deal} index={index} />
          ))}
        </section>

        <section className="hero-location-section">
          <div className="hero-location-text">
            <h2>Popular Restaurants in and around Bengaluru</h2>
          </div>
          <div className="location">
            {restaurants.slice(0, visible).map((restaurant, index) => (
              <>
                <Link to={`/restaurant/${restaurant._id}`}>
                  <HeroLocation key={index} data={restaurant} />
                </Link>
              </>
            ))}
          </div>

          <div className="hero-restaurant-button">
            {visible !== Locations.length ? (
              <Button onClick={showMoreItems} className="primary ">
                AddMore
              </Button>
            ) : (
              <Button onClick={showLessItems}>Addless</Button>
            )}
          </div>
        </section>

        <section className="faq-section">
          <div className="question-heading">
            <h2 className="heading" style={{ color: "black" }}>
              Frequently asked questions (FAQ)
            </h2>
          </div>
          {FqaDetails.map((faq, index) => (
            <Herofaq key={index} data={faq} />
          ))}
        </section>

        <section className="hero-getapp-section">
          <HeroGetApp />
        </section>
        <section className="footer">
          <Footer />
        </section>
      </main>
    </>
  );
};

export default Home;
