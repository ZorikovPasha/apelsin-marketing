import React from "react";
import Slider from "react-slick";
import Slide1 from "../../images/instagram-1.jpg";
import Slide2 from "../../images/instagram-2.jpg";
import Slide3 from "../../images/instagram-3.jpg";
import Slide4 from "../../images/instagram-4.jpg";
import Slide5 from "../../images/instagram-5.jpg";

export const InstSlider = () => {
  const sliides = [Slide1, Slide2, Slide3, Slide4, Slide5];

  const instSliderSettings = {
    infinite: false,
    arrows: false,
    variableWidth: true,
    centerMode: true,
    initialSlide: 2,
    responsive: [
      {
        breakpoint: 400,
        settings: {
          dots: true,
        },
      },
    ],
  };

  return (
    <Slider className="instagram-slider" {...instSliderSettings}>
      {sliides.map((img, idx) => (
        <div className="instagram-slider__item" key={idx}>
          <img className="instagram-slider__item-img" src={img} alt="" />
        </div>
      ))}
    </Slider>
  );
};
