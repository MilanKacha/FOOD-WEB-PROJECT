import "../../../style/restorantcontent.css";

const RestorantContent = ({ Restaurant }) => {
  return (
    <div className="restorant-contant">
      <h2 style={{ color: "black" }} className="restorant-name">
        {Restaurant.location}
      </h2>
      <span className="restorant-items">{Restaurant.desc}</span>
      <span className="restorant-opentime">
        Open now {Restaurant.opentime} (Today)
        <span className="restorant-rating">{Restaurant.ratingsAverage}</span>
      </span>
    </div>
  );
};

export default RestorantContent;
