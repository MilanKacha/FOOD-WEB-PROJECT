import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

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

import CartPage from "./pages/CartPage";
import CheckOutPage from "./pages/CheckOutPage";
import LayOut from "./ui/LayOut";
import RestaurantDetailsPage from "./pages/RestaurantDetailsPage";
import UserDetailsPage from "./pages/UserDetailsPage";
import OrderSuccessPage from "./pages/OrderSuccessPage";
import Protected from "./features/auth/component/Protected";

function App() {
  const dispatch = useDispatch();
  const user = useSelector(selectLoggedInUser);

  useEffect(() => {
    if (user) {
      dispatch(fetchLoggedInUserAsync());
      dispatch(fetchItemsByUserIdAsync());
      dispatch(fetchAllProductAsync());
    }
  }, [dispatch, user]);
  // console.log(user);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <LayOut />,
      children: [
        { index: true, element: <HomePage /> },
        { path: "restaurant", element: <RestaurantPage /> },
        {
          path: "restaurant/:id",
          element: <RestaurantDetailsPage />,
        },
        { path: "cart", element: <CartPage /> },
        { path: "checkout", element: <CheckOutPage /> },
        {
          path: "user",
          element: (
            <Protected>
              <UserDetailsPage />
            </Protected>
          ),
        },
        {
          path: "ordersuccess",
          element: (
            <Protected>
              <OrderSuccessPage />
            </Protected>
          ),
        },
      ],
    },
  ]);
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
