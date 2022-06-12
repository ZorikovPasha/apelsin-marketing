import React from "react";
import { AppSlider, ArrRight, SectionLinks } from "../components";
import { ROUTES } from "../utils/const";
import ProjectsImg from "../images/projects/projects-img.jpg";
import Project1 from "../images/projects/project-1.jpg";
import Project2 from "../images/projects/project-2.jpg";
import Project3 from "../images/projects/project-3.jpg";
import Card1 from "../images/projects-card.jpg";
import Card2 from "../images/projects-card-2.jpg";
import Card3 from "../images/projects-card-3.jpg";
import Card4 from "../images/projects-card-4.jpg";
import { Link } from "react-router-dom";

const Projects = () => {
  const links = [
    { link: "Услуги", to: ROUTES.Services, left: true },
    { link: "Блог", to: ROUTES.Press, left: false },
  ];

  const settings = {
    dots: true,
    fade: true,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          arrows: false,
        },
      },
    ],
  };

  const project1SliderSettings = {
    fade: true,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          arrows: false,
        },
      },
    ],
  };

  const project2SliderSettings = {
    fade: true,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          arrows: false,
        },
      },
    ],
  };

  const project3SliderSettings = {
    fade: true,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          arrows: false,
        },
      },
    ],
  };

  const ImageSliderSettings = {
    dots: true,
    fade: true,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          arrows: false,
        },
      },
    ],
  };

  const projects = [
    { id: 1, location: "Флорида", name: "Загородный дом в посёлке Комильфо", img: Card1, sqFoot: 336.2 },
    { id: 2, location: "Испания", name: "Дом в стиле лофт на берегу моря", img: Card2, sqFoot: 650 },
    { id: 3, location: "Греция", name: "Вилла на побережье", img: Card3, sqFoot: 856 },
    { id: 4, location: "Россия", name: "Усадьба чиновника", img: Card4, sqFoot: 540 },
  ];

  return (
    <>
      <section className="projects-top">
        <div className="container-fluid">
          <h3 className="projects-top__title title">Проекты</h3>

          <AppSlider settings={settings} rootClass="projects-slider">
            {projects.map(({ id, location, name, img, sqFoot }) => (
              <div className="projects-slider__item" key={name}>
                <p className="projects-slider__name">{name}</p>
                <img className="projects-slider__bg" src={img} alt="" />
                <div className="projects-slider__inner">
                  <div className="projects-slider__info">
                    <p className="projects-slider__text">Локация: {location}</p>
                    <p className="projects-slider__text">
                      Метраж: {sqFoot} м<sup>2</sup>
                    </p>
                  </div>
                  <Link className="section__link" to={`/projects/${id}`}>
                    Подробнее
                    <ArrRight />
                  </Link>
                </div>
              </div>
            ))}
          </AppSlider>
        </div>
      </section>

      <div className="projects-section">
        <div className="container-fluid">
          <div className="projects-section__inner">
            <div className="projects-section__info">
              <p className="projects-section__info-name">Современный лофт с элементами ар деко</p>
              <p className="projects-section__info-location">Локация: Москва, Столешников пер</p>
              <div className="projects-section__info-metrage">Метраж: 124 м2</div>
              <span className="section__link">
                Подробнее
                <ArrRight />
              </span>
            </div>
            <AppSlider settings={project1SliderSettings} rootClass="projects-section__slider">
              <div className="projects-section__slider-item">
                <img className="projects-section__slider-img" src={Project1} alt="" />
              </div>
              <div className="projects-section__slider-item">
                <img className="projects-section__slider-img" src={Project1} alt="" />
              </div>
              <div className="projects-section__slider-item">
                <img className="projects-section__slider-img" src={Project1} alt="" />
              </div>
            </AppSlider>
          </div>
        </div>
      </div>
      <div className="projects-section">
        <div className="container-fluid">
          <div className="projects-section__inner-left">
            <AppSlider settings={project2SliderSettings} rootClass="projects-section__slider">
              <div className="projects-section__slider-item">
                <img className="projects-section__slider-img" src={Project2} alt="" />
              </div>
              <div className="projects-section__slider-item">
                <img className="projects-section__slider-img" src={Project2} alt="" />
              </div>
              <div className="projects-section__slider-item">
                <img className="projects-section__slider-img" src={Project2} alt="" />
              </div>
            </AppSlider>
            <div className="projects-section__info">
              <p className="projects-section__info-name">Квартира в стиле лофт</p>
              <p className="projects-section__info-descr">
                Подмосковный коттедж для активной семьи с двумя детьми. По выходным здесь часто принимают гостей, поэтому отправной точкой данного
                интерьера стала просторная и яркая кухня-гостиная.
              </p>
              <span className="section__link">
                Подробнее
                <ArrRight />
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="projects-section projects-section--last">
        <div className="container-fluid">
          <div className="projects-section__inner">
            <div className="projects-section__info">
              <p className="projects-section__info-name">Интерьер с яркими акцентами</p>
              <p className="projects-section__info-location">Локация: Подмосковье</p>
              <div className="projects-section__info-metrage">Метраж: 260 м2</div>
              <p className="projects-section__info-descr projects-section__info-descr--3">
                Подмосковный коттедж для активной семьи с двумя детьми. По выходным здесь часто принимают гостей, поэтому отправной точкой данного
                интерьера стала просторная и яркая кухня-гостиная.
              </p>
            </div>

            <AppSlider settings={project3SliderSettings} rootClass="projects-section__slider">
              <div className="projects-section__slider-item">
                <img className="projects-section__slider-img" src={Project3} alt="" />
              </div>
              <div className="projects-section__slider-item">
                <img className="projects-section__slider-img" src={Project3} alt="" />
              </div>
              <div className="projects-section__slider-item">
                <img className="projects-section__slider-img" src={Project3} alt="" />
              </div>
            </AppSlider>
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <AppSlider settings={ImageSliderSettings} rootClass="projects-image__slider">
          <div className="projects-image__slider-item">
            <img src={ProjectsImg} alt="" />
          </div>
          <div className="projects-image__slider-item">
            <img src={ProjectsImg} alt="" />
          </div>
          <div className="projects-image__slider-item">
            <img src={ProjectsImg} alt="" />
          </div>
          <div className="projects-image__slider-item">
            <img src={ProjectsImg} alt="" />
          </div>
        </AppSlider>
      </div>
      <SectionLinks items={links} />
    </>
  );
};

export default Projects;
