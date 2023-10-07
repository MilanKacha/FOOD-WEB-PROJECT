import "../../style/herogetapp.css";
import GetApp from "../../assests/hero-getapp/mobile.png";
import GoogleStore from "../../assests/hero-getapp/googleplay.png";
import AppStore from "../../assests/hero-getapp/appstore.png";
import { Link, useNavigate } from "react-router-dom";

const HeroGetApp = () => {
  return (
    <div className="getapp-container">
      <div className="getapp-wrapper">
        <div className="getapp-content">
          <span className="getapp-heading">Install the app</span>
          <span className="getapp-text">
            you can download app from google play store and app store
          </span>
          <div className="getapp-icon">
            <img src={GoogleStore} alt="" className="getapp-icon-img" />
            <img src={AppStore} alt="" className="getapp-icon-img" />
          </div>
          <div className="getapp-button"></div>
        </div>
        <div className="getapp-img">
          <img src={GetApp} alt="" className="getapp-img-mobile" />
        </div>
      </div>
    </div>
  );
};

export default HeroGetApp;
