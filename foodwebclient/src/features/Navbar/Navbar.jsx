import { useState } from "react";
import "../../style/navbar.css";

const Navbar = () => {
  const [active, setActive] = useState("nav-menu-ul");
  const [toggleIcon, setToggleIcon] = useState("nav_toggler");

  const navToggle = () => {
    active === "nav-menu-ul"
      ? setActive("nav-menu-ul nav-active")
      : setActive("nav-menu-ul");
    // Toggle icon
    toggleIcon === "nav_toggler"
      ? setToggleIcon("nav_toggler toggle")
      : setToggleIcon("nav_toggler");
  };

  return (
    <>
      <nav>
        <div className="navbar">
          <div className="nav-app">Get the App</div>
          <div className="nav-menu">
            <ul className={active}>
              <li>Add restaurant</li>
              <li>Log in</li>
              <li>Sign up</li>
            </ul>
            <div onClick={navToggle} className={toggleIcon}>
              <div className="line1"></div>
              <div className="line2"></div>
              <div className="line3"></div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
