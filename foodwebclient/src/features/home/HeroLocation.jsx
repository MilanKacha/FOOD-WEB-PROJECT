import "../../style/herolocation.css";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const HeroLocation = (props) => {
  const { restorantname, location } = props.data;

  return (
    <>
      <div className="popular-location">
        <div className="location-wrapper">
          <div className="location-text">
            <h3>{restorantname}</h3>
            <p>{location}</p>
          </div>
          <div className="location-icon">
            <MdOutlineKeyboardArrowRight />
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroLocation;
