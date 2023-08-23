import Biryani from "../../src/assests/hero-popular/biryani.avif";
import "../../src/style/restorantcard.css";

const RestorantCard = ({ props }) => {
  return (
    <div className="restorsntname-card-wrapper">
      <div className="restorsntname-img">
        <img src={props.img} alt="" />
      </div>
      <div className="restorsntname-content">
        <div id="name-rating">
          <h3
            style={{ color: "black" }}
            className="restorsntname-restorantname"
          >
            {props.name}
          </h3>
          <span className="restorsntname-rating">{props.rating}</span>
        </div>
        <div id="description-price">
          <span className="restorsntname-description">{}</span>
          <span className="restorsntname-price">₹200 for one</span>
        </div>
        <div id="delivery-time">
          <span id="restorsntname-delivery-time">20min</span>
        </div>
      </div>
    </div>
  );
};

export default RestorantCard;
