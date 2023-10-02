import thali from "../../assests/thali.png";
import Button from "../../ui/Button";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const pizza = `https://res.cloudinary.com/dkaenszh3/image/upload/v1696054901/restorant/pizza_qqqufr.png`;
  return (
    <div className="hero">
      <div className="hero-content">
        <div className="hero-content-text">
          <h1>Discover the best food &</h1>
          <h1>drinks in Bengaluru</h1>
          <Link to="/restaurant">
            <Button>View More</Button>
          </Link>
        </div>
        <div className="hero-content-img">
          <img src={pizza} alt="" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
