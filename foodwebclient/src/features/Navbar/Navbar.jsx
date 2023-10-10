import { useEffect, useState } from "react";
import "../../style/navbar.css";
import SingUp from "../auth/component/SingUp";
import ModalCommon from "../../ui/ModalCommon";
import { useDispatch, useSelector } from "react-redux";
import { logOutAsync, selectLoggedInUser } from "../auth/authSlice";
import Login from "../auth/component/Login";
import { PiBagBold } from "react-icons/pi";
import { fetchItemsByUserIdAsync, selectItems } from "../cart/cartSlice";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  // state manage for small device
  const [active, setActive] = useState("nav-menu-ul");
  const [toggleIcon, setToggleIcon] = useState("nav_toggler");
  // for modal open
  const [signUpOpen, setSignUpOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);

  const userToken = useSelector(selectLoggedInUser);

  const cart = useSelector(selectItems); // for calculation od cart length

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchItemsByUserIdAsync());
  }, [dispatch]);

  const handalLogOut = () => {
    dispatch(logOutAsync());
  };

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
    // Close the navbar on small devices
    if (window.innerWidth <= 767) {
      navToggle();
    }
  };

  const closeModalSignUp = () => {
    setSignUpOpen(false);
  };

  const openModalLogin = () => {
    setLoginOpen(true);
    // Close the navbar on small devices
    if (window.innerWidth <= 767) {
      navToggle();
    }
  };
  const closeModalLogin = () => {
    setLoginOpen(false);
  };

  // const calculate cart item
  const cartItem = cart?.reduce((total, item) => {
    return total + item.quantity;
  }, 0);

  return (
    <>
      <nav>
        <div className="navbar">
          <div className="nav-app">Get the App</div>
          <div className="nav-menu">
            <ul className={active}>
              <li>
                {userToken && (
                  <span onClick={() => navigate("/myorder")}>My Orders</span>
                )}
              </li>
              <li>
                {userToken && (
                  <span onClick={() => navigate("/user")}>My Profile</span>
                )}
              </li>
              {!userToken && (
                <li>
                  <span onClick={openModalSignUp}>Sign up</span>
                </li>
              )}
              {!userToken ? (
                <li onClick={openModalLogin}>Log in</li>
              ) : (
                <li onClick={() => handalLogOut()}>Logout</li>
              )}

              {userToken && (
                <li>
                  <span>
                    <PiBagBold onClick={() => navigate("/cart")} />
                    {cart?.length > 0 && (
                      <span className="cart-length">{cartItem}</span>
                    )}
                  </span>
                </li>
              )}
            </ul>
            <div onClick={navToggle} className={toggleIcon}>
              <div className="line1"></div>
              <div className="line2"></div>
              <div className="line3"></div>
            </div>
          </div>
        </div>
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
