import "../../style/restorantcontent.css";

const RestorantContent = () => {
  return (
    <div className="restorant-contant">
      <h2 style={{ color: "black" }} className="restorant-name">
        Indiranagar Social
      </h2>
      <span className="restorant-items">
        North Indian, Biryani, Rolls, Burger, Pizza, Momos, Desserts, Shake
        Indiranagar, Bangalore
      </span>
      <span className="restorant-opentime">Open now 9am – 12:30am (Today)</span>
      <span className="restorant-rating">4.3</span>
    </div>
  );
};

export default RestorantContent;
