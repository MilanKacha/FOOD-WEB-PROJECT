import Navbar from "./features/Navbar/Navbar";
import Home from "../src/features/home/Home";
import HeroSlider from "./features/home/HeroSlider";
import SliderComponent from "./ui/SliderComponent";
import img1 from "../src/assests/hero-choice/club.jpg";
import img2 from "../src/assests/hero-choice/dining.avif";
import "./App.css";
import Footer from "./features/Navbar/Footer";
import Delivery from "./features/delivery/Delivery";
import RestorantDetails from "./features/restorantdetails/RestorantDetails";
import Modal from "./ui/Modal";
import UserDetails from "./features/user/UserDetails";

function App() {
  return (
    <>
      <div className="app">
        <UserDetails />
      </div>
    </>
  );
}

export default App;
