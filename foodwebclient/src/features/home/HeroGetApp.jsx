import "../../style/herogetapp.css";

const HeroGetApp = () => {
  const GetApp = `https://res.cloudinary.com/dkaenszh3/image/upload/v1696763081/herogetapp/mobile_os1vlm.png`;
  const GoogleStore = `https://res.cloudinary.com/dkaenszh3/image/upload/v1696763080/herogetapp/googleplay_tuhh5a.png`;
  const AppStore = `https://res.cloudinary.com/dkaenszh3/image/upload/v1696763080/herogetapp/appstore_onoedn.png`;
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
