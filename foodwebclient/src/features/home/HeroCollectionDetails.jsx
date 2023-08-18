import Collection1 from "../../assests/hero-collec/collection1.avif";
import "../../style/herocollectiondetails.css";

const HeroCollectionDetails = (props) => {
  const { heading, places, img } = props.data;
  return (
    <div className="collection-card-container">
      <div className="collection-card-wrapper">
        <div className="collection-img">
          <img src={img} alt="" />
        </div>
        <div className="collection-details">
          <span className="collection-details-heading">{heading}</span>
          <span collection-details-text>{places}</span>
        </div>
      </div>
    </div>
  );
};

export default HeroCollectionDetails;
