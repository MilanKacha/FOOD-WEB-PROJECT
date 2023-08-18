import "../../style/herodeal.css";
import Button from "../../ui/Button";
// import Burgur from "../../assests/hero-deal/burger1.jpg";

const HeroDeal = ({ data, index }) => {
  // const { img, heading, description } = props.data;
  // const evenOddClass = index % 2 !== 0 && "even";
  // const evenImage = index % 2 !== 0 ? "even-image" : "herodeal-img";
  // const evenDiv = index % 2 !== 0 ? "herodeal-text-even" : "herodeal-text";
  //   return (
  //     <div className={`herodeal-card-wrapper ${evenOddClass}`}>
  //       <div className="herodeal-content">
  //         <div className={`${evenImage}`}>
  //           <img src={data.img} alt="" />
  //         </div>
  //         <div className={`${evenDiv}`}>
  //           <div class="herodeal-card">
  //             <div class="herodeal-card-content">
  //               <h2>{data.heading}</h2>
  //               <p>{data.description}</p>
  //               <Button>View More</Button>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   );
  // };
  return (
    <div className={`herodeal-card-wrapper`}>
      <div className="container">
        <div className="herodeal-content">
          <div className="heroDealImgWrap">
            <img src={data.img} alt="" />
          </div>
          <div class="herodealCard">
            <div class="herodeal-card-content">
              <h2>{data.heading}</h2>
              <p>{data.description}</p>
              <Button>View More</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroDeal;
