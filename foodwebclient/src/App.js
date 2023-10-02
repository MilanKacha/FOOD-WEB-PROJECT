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

import OrderCheckOut from "./features/order/component/OrderCheckOut";
import CartDetails from "./features/cart/component/CartDetails";
import { useDispatch, useSelector } from "react-redux";
import { selectLoggedInUser } from "./features/auth/authSlice";
import { useEffect } from "react";

import {
  fetchLoggedInUserAsync,
  selectUserInfo,
} from "./features/user/userSlice";
import { fetchItemsByUserId } from "./features/cart/cartApi";
import {
  fetchItemsByUserIdAsync,
  selectItems,
} from "./features/cart/cartSlice";
import OrderSuccess from "./features/order/component/OrderSuccess";
import { fetchAllProductAsync } from "./features/delivery/RestorantSlice";
import HomePage from "./pages/HomePage";
import RestaurantPage from "./pages/RestaurantPage";
import Restaurant from "./pages/Restaurant";

function App() {
  const dispatch = useDispatch();
  const user = useSelector(selectLoggedInUser);
  const product = useSelector(selectItems);

  useEffect(() => {
    if (user) {
      dispatch(fetchLoggedInUserAsync());
      dispatch(fetchItemsByUserIdAsync());
      dispatch(fetchAllProductAsync());
    }
  }, [dispatch, user]);
  // console.log(user);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/restaurant" exact element={<RestaurantPage />} />
          <Route path="/restaurant/:id" element={<Restaurant />} />
          <Route path="/cart" element={<CartDetails />} />
          <Route path="/checkout" element={<OrderCheckOut />} />
          <Route path="/user" element={<UserDetails />} />
          <Route path="/ordersucess" element={<OrderSuccess />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
