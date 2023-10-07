import Biryani from "../../src/assests/hero-popular/biryani.avif";
import "../../src/style/restorantcard.css";

const RestorantCard = ({ props }) => {
  return (
    <div className="restorsntname-card-wrapper">
      <div className="restorsntname-img">
        <img src={props.image} alt="" />
      </div>
      <div className="restorsntname-content">
        <div id="name-rating">
          <h3
            style={{ color: "black" }}
            className="restorsntname-restorantname"
          >
            {props.restorantname}
          </h3>
          <span className="restorsntname-rating">{props.ratingsAverage}</span>
        </div>
        <div id="description-price">
          <span className="restorsntname-description">{props.desc}</span>
          <span className="restorsntname-price">₹{props.price}</span>
        </div>
        <div id="delivery-time">
          <span id="restorsntname-delivery-time">
            {props.expecteddeliverytime} min
          </span>
        </div>
      </div>
    </div>
  );
};

export default RestorantCard;
