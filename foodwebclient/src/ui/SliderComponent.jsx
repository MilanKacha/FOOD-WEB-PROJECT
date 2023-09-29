import React, { useRef } from "react";
import Slider from "react-slick";

import "../style/slidercommon.css";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import Button from "../ui/Button";

const SliderComponent = ({ heading, data }) => {
  const sliderRef = useRef(null);
  console.log(sliderRef.current);
  const settings = {
    dots: true,
    infinite: false,
    arrows: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
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
  const sliderClasses = data.className
    ? data.className + " " + "slider-content"
    : "slider-content" + " " + data.title + "-slider";
  return (
    <div>
      <div className="container">
        <div className={sliderClasses}>
          <h2 style={{ color: "black" }}> {heading} </h2>
          <div className="slider-button" style={{ display: "flex" }}>
            <div>
              <BsFillArrowLeftCircleFill
                style={{ width: 20, height: 20 }}
                onClick={() => {
                  sliderRef.current.slickPrev();
                }}
              />
            </div>
            <div>
              <BsFillArrowRightCircleFill
                style={{ width: 20, height: 20 }}
                onClick={() => {
                  sliderRef.current.slickNext();
                }}
              />
            </div>
          </div>
        </div>
        <Slider ref={sliderRef} {...settings}>
          {data.map((slide, index) => (
            <div key={index}>
              <div className="card">
                <div className="slider-img">
                  <img src={slide.image} alt={`Slide ${index}`} />
                </div>
                <div className="slider-info">
                  <h2 style={{ color: "black" }}>
                    {slide.itemname ? `${slide.itemname}` : "Gujarati thali"}
                  </h2>

                  <h3 style={{ color: "black" }}>
                    {slide.price ? `${slide.price}` : "Get Up To 40% off"}(
                    {slide.description
                      ? `${slide.description}`
                      : "Get Up To 40% off"}
                    )
                  </h3>
                  <Button>
                    {slide.button ? `${slide.button}` : "Order Now"}
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default SliderComponent;
