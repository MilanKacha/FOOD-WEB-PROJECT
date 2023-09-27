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
import UserDetails from "./features/user/component/UserDetails";
import OrderSuccess from "./features/order/OrderSuccess";
import OrderCheckOut from "./features/order/OrderCheckOut";
import CartDetails from "./features/cart/component/CartDetails";
import { useDispatch, useSelector } from "react-redux";
import { selectLoggedInUser } from "./features/auth/authSlice";
import { useEffect } from "react";

import {
  fetchLoggedInUserAsync,
  selectUserInfo,
} from "./features/user/userSlice";
import { fetchItemsByUserId } from "./features/cart/cartApi";
import { fetchItemsByUserIdAsync } from "./features/cart/cartSlice";

function App() {
  const dispatch = useDispatch();
  const user = useSelector(selectLoggedInUser);
  useEffect(() => {
    if (user) {
      dispatch(fetchLoggedInUserAsync());
      dispatch(fetchItemsByUserIdAsync());
    }
  }, [dispatch, user]);
  // console.log(user);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/restaurant" exact element={<Delivery />} />
          <Route path="/restaurant/:id" element={<RestorantDetails />} />
          <Route path="/cart" element={<CartDetails />} />
          <Route path="/checkout" element={<OrderCheckOut />} />
          <Route path="/user" element={<UserDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
