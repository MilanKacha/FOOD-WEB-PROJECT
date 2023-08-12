import "../../style/heroslider.css";
import Slider from "react-slick";
import img1 from "../../assests/a2b.PNG";
import img2 from "../../assests/burgurking.PNG";
import img3 from "../../assests/Dominos.PNG";
import img4 from "../../assests/Empire.PNG";
import img5 from "../../assests/Dominos.PNG";
import img6 from "../../assests/freshmenu.PNG";
import img7 from "../../assests/kfc.PNG";
import img8 from "../../assests/leons.PNG";
import img9 from "../../assests/Mcdelivery.PNG";
import img10 from "../../assests/Meghana.PNG";
import img11 from "../../assests/truffels.PNG";

const images = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
];

const HeroSlider = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 700,
    slidesToShow: 6,
    slidesToScroll: 1,
    adaptiveHeight: true,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="slide-container">
        <div className="card-wrapper">
          <h2 className="slider-heading">Top brands for you </h2>
          <Slider {...settings} className="slider-content">
            {images.map((img, index) => (
              <>
                <div key={index} className="slide">
                  <img src={img} className="slider-img" alt="" />
                  <h2>Domino's</h2>
                </div>
              </>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default HeroSlider;
