import "../../../style/restorantcontent.css";
import { AiTwotoneStar } from "react-icons/ai";

const RestorantContent = ({ Restaurant }) => {
  return (
    <div className="restorant-contant-wrapper">
      <h2 style={{ color: "black" }} className="restorant-name">
        {Restaurant.restorantname}
      </h2>
      <span>{Restaurant.location}</span>
      <span className="restorant-items">{Restaurant.desc}</span>
      <span className="restorant-opentime">
        Open now: {Restaurant.opentime}
        <span className="restorant-rating">
          <span>
            <AiTwotoneStar />
          </span>
          {Restaurant.ratingsAverage}
        </span>
      </span>
    </div>
  );
};

export default RestorantContent;
