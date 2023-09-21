import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./features/Navbar/Navbar";
import Home from "../src/features/home/Home";
import HeroSlider from "./features/home/HeroSlider";
import SliderComponent from "./ui/SliderComponent";
import img1 from "../src/assests/hero-choice/club.jpg";
import img2 from "../src/assests/hero-choice/dining.avif";
import "./App.css";
import Footer from "./features/Navbar/Footer";
import Delivery from "./features/delivery/component/Delivery";
import RestorantDetails from "./features/delivery/component/RestorantDetails";
import Modal from "./ui/Modal";
import UserDetails from "./features/user/UserDetails";
import OrderSuccess from "./features/order/OrderSuccess";
import CartDetails from "./features/cart/CartDetails";
import OrderCheckOut from "./features/order/OrderCheckOut";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/restaurant" exact element={<Delivery />} />
          <Route path="/restaurant/:id" element={<RestorantDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
