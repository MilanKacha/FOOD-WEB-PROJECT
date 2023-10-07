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

import Herofaq from "./Herofaq";

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
import { toast } from "react-toastify";

import { selectLoggedInUser } from "../auth/authSlice";

const HeroChoiceData = [
  {
    id: 1,
    img: OrderOnline,
    heading: "Order Online",
    description: "Stay home and order to your doorstep",
    subCategory: "orderonline",
  },
  {
    id: 2,
    img: Dining,
    heading: "Dining",
    description: "View the city's favourite dining venues",
    subCategory: "Dining",
  },
  {
    id: 3,
    img: Club,
    heading: "Nightlife and Clubs",
    description: "Explore the city’s top nightlife outlets",
    subCategory: "nightlife",
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

const Home = () => {
  const restaurants = useSelector(selectAllRestorants);
  const product = useSelector(selectedAllProducts);
  const user = useSelector(selectLoggedInUser);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllRestorantAsync());
    dispatch(fetchAllProductAsync());
  }, [dispatch]);

  const [visible, setVisivle] = useState(6);

  // for PopularSweet filter data
  const PopularSweet = product?.data?.filter((item) => item.popularSweet);
  console.log(PopularSweet);

  // for PopularItemfilter data
  const PopularItem = product?.data?.filter((item) => item.popularItems);
  console.log(PopularItem);

  const data = restaurants.filter((item) => item.isHome);

  const showMoreItems = () => {
    setVisivle((prevValue) => prevValue + 6);
  };
  const showLessItems = () => {
    setVisivle(6);
  };

  const handleClickError = () => {
    console.log("error");
    if (!user) {
      toast.error("You are not logged in.");
    }
  };

  return (
    <>
      <main className="home">
        <section className="hero-section">
          <HeroSection handleViewMoreClick={handleClickError} />
        </section>

        <section className="hero-choice-section">
          <div className="choice">
            {HeroChoiceData.map((item) => (
              <Link to={`/restaurant?subcategory=${item.subCategory}`}>
                <HeroChoice
                  key={item.id}
                  data={item}
                  handleClickError={handleClickError}
                />
              </Link>
            ))}
          </div>
        </section>

        <section className="popular-item">
          <div className="popular-Sweet">
            <SliderComponent
              data={PopularSweet}
              heading={"Popular Sweet"}
              handleOrderNowClick={handleClickError}
            />
          </div>
          <div className="popular-items">
            <SliderComponent
              data={PopularItem}
              heading={"Popular Fastfoods"}
              handleOrderNowClick={handleClickError}
            />
          </div>
        </section>

        <section className="hero-deal-section">
          {data.map((deal, index) => (
            <HeroDeal
              key={index}
              data={deal}
              handleClickError={handleClickError}
            />
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
            {visible !== restaurants?.length ? (
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
