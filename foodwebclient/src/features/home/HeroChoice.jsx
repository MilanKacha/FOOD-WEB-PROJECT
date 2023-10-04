import "../../style/herochoice.css";

const HeroChoice = (props) => {
  const { img, heading, description } = props.data;
  return (
    <div>
      <div className="choice-card-wrapper">
        <a>
          <div className="choice-card">
            <img src={img} alt="" />
            <div className="choice-content">
              <h3 className="choice-heading" style={{ color: "white" }}>
                {heading}
              </h3>
              <p className="choice-text" style={{ color: "white" }}>
                {description}
              </p>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default HeroChoice;
