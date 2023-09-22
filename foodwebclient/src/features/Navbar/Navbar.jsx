import { useEffect, useState } from "react";
import "../../style/navbar.css";
import thali from "../../assests/thali.png";
import SingUp from "../auth/component/SingUp";
import ModalCommon from "../../ui/ModalCommon";
import { useDispatch, useSelector } from "react-redux";
import { logOutAsync, selectLoggedInUser } from "../auth/authSlice";
import Login from "../auth/component/Login";
import { PiBagBold } from "react-icons/pi";

const Navbar = () => {
  const userToken = useSelector(selectLoggedInUser);

  const dispatch = useDispatch();

  const handalLogOut = () => {
    dispatch(logOutAsync());
  };

  const [active, setActive] = useState("nav-menu-ul");
  const [toggleIcon, setToggleIcon] = useState("nav_toggler");
  const [signUpOpen, setSignUpOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);

  const navToggle = () => {
    active === "nav-menu-ul"
      ? setActive("nav-menu-ul nav-active")
      : setActive("nav-menu-ul");
    // Toggle icon
    toggleIcon === "nav_toggler"
      ? setToggleIcon("nav_toggler toggle")
      : setToggleIcon("nav_toggler");
  };

  const openModalSignUp = () => {
    setSignUpOpen(true);
  };

  const closeModalSignUp = () => {
    setSignUpOpen(false);
  };

  const openModalLogin = () => {
    setLoginOpen(true);
  };
  const closeModalLogin = () => {
    setLoginOpen(false);
  };

  return (
    <>
      <nav>
        <header className="header">
          <div className="navbar">
            <div className="nav-app">Get the App</div>
            <div className="nav-menu">
              <ul className={active}>
                <li>
                  <span>
                    <PiBagBold />
                  </span>
                </li>
                <li>
                  <span onClick={openModalSignUp}>Sign up</span>
                </li>
                {userToken ? (
                  <li>M</li>
                ) : (
                  <li onClick={openModalLogin}>Log in</li>
                )}
                {userToken && <li onClick={() => handalLogOut()}>LogOut</li>}
              </ul>
              <div onClick={navToggle} className={toggleIcon}>
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
              </div>
            </div>
          </div>
          <div className="hero">
            <div className="hero-content">
              <div className="hero-content-text">
                <h1>Discover the best food &</h1>
                <h1>drinks in Bengaluru</h1>
              </div>
              <div className="hero-content-img">
                <img src={thali} alt="" />
              </div>
            </div>
          </div>
        </header>
      </nav>

      {signUpOpen && (
        <ModalCommon openModal={openModalSignUp} closeModal={closeModalSignUp}>
          <SingUp closeModal={closeModalSignUp} />
        </ModalCommon>
      )}

      {loginOpen && (
        <ModalCommon openModal={openModalLogin} closeModal={closeModalLogin}>
          <Login closeModal={closeModalLogin} />
        </ModalCommon>
      )}
    </>
  );
};

export default Navbar;
