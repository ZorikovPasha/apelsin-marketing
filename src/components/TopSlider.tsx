import React from "react";
import Slider from "react-slick";
import TopBg1 from "../images/content/top-bg.jpg";
// import TopBg2 from "../images/projects-card-2.jpg";
// import TopBg3 from "../images/projects-card-3.jpg";
// import TopBg4 from "../images/projects-card-4.jpg";
import ArrPrev from "../images/slider-arr-left.svg";
import ArrNext from "../images/slider-arr-right.svg";

interface IArrowProps {
  onClick: (() => void) | undefined;
}

export const SliderPrevArrow: React.FC<IArrowProps> = ({ onClick }) => {
  return <img className="slider-arr slider-arr-left" src={ArrPrev} alt="" onClick={onClick} />;
};

export const SliderNextArrow: React.FC<IArrowProps> = ({ onClick }) => {
  return <img className="slider-arr slider-arr-right" src={ArrNext} alt="" onClick={onClick} />;
};

export const Top = () => {
  const [slider, setSlider] = React.useState<Slider>();

  const topSliderSettings = {
    dots: true,
    fade: true,
    autoplay: true,
    infinite: true,
    autoplaySpeed: 4000,
    prevArrow: <SliderPrevArrow onClick={slider?.slickPrev} />,
    nextArrow: <SliderNextArrow onClick={slider?.slickNext} />,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          arrows: false,
        },
      },
    ],
  };

  return (
    <section className="top">
      <div className="container">
        <div className="top__subtitle">Студия дизайна интерьера</div>

        <h1 className="top__title title">Apelsin Design</h1>
      </div>
      <div className="container-fluid">
        <Slider
          className="top-slider"
          ref={(slider: Slider) => setSlider(slider)}
          {...topSliderSettings}
        >
          <div className="top-slider__item">
            <img src={TopBg1} alt="" />
          </div>
          {/* <div className="top-slider__item">
            <img src={TopBg2} alt="" />
          </div>
          <div className="top-slider__item">
            <img src={TopBg3} alt="" />
          </div>
          <div className="top-slider__item">
            <img src={TopBg4} alt="" />
          </div> */}
        </Slider>
      </div>
      <div className="container">
        <p className="top__text">Дизайн интерьера становится вашей повседневной атмосферой.</p>
        <p className="top__text">
          Мы конструируем пространство, которое повышает качество жизни, окружает комфортом
          и вдохновляет на дальнейшие активные действия по преображению реальности.
        </p>
        <p className="top__text">
          Задача нашей работы в том, чтобы вы смогли воплотить свои представления о красоте
          и комфорте, и остались доволен результатом.
        </p>
      </div>
    </section>
  );
};
