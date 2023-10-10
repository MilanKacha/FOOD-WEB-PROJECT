import "../../style/herochoice.css";
import Button from "../../ui/Button";

const HeroChoice = ({ data, handleClickError }) => {
  return (
    <div>
      <div className="choice-card-wrapper">
        <a>
          <div className="choice-card">
            <img src={data.img} alt="" />
            <div className="choice-content">
              <h3 className="choice-heading" style={{ color: "white" }}>
                {data.heading}
              </h3>
              <p className="choice-text" style={{ color: "white" }}>
                {data.description}
              </p>
              <Button onClick={handleClickError}>View More</Button>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default HeroChoice;
