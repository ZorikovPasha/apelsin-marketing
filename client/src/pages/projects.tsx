import React from "react";
import { AppSlider, ArrRight, SectionLinks } from "../components";
import { ROUTES } from "../utils/const";
import ProjectsImg from "../images/projects/projects-img.jpg";
import Project1 from "../images/projects/project-1.jpg";
import Project2 from "../images/projects/project-2.jpg";
import Project3 from "../images/projects/project-3.jpg";
import { NavLink } from "react-router-dom";
import { IPageProps } from "../types";

const Projects: React.FC<IPageProps> = ({ projects }) => {
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

  return (
    <>
      <section className="projects-top">
        <div className="container-fluid">
          <h3 className="projects-top__title title">Проекты</h3>

          <AppSlider settings={settings} rootClass="projects-slider">
            {projects?.map(({ id, location, name, pics, sqFoot }) => (
              <div className="projects-slider__item" key={name}>
                <p className="projects-slider__name">{name}</p>
                <img className="projects-slider__bg" src={pics.full} alt="" />
                <div className="projects-slider__inner">
                  <div className="projects-slider__info">
                    <p className="projects-slider__text">Локация: {location}</p>
                    <p className="projects-slider__text">
                      Метраж: {sqFoot} м<sup>2</sup>
                    </p>
                  </div>
                  <NavLink className="section__link" to={`/project/` + id}>
                    Подробнее

                    <ArrRight />
                  </NavLink>
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
              <div className="image-section__img">
                <img src={Project1} alt="" />
              </div>
          </div>
        </div>
      </div>
      <div className="projects-section">
        <div className="container-fluid">
          <div className="projects-section__inner-left">
            <div className="image-section__img">
                <img src={Project2} alt="" />
              </div>
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

              <span className="section__link">
                Подробнее
                <ArrRight />
              </span>
            </div>

              <div className="image-section__img">
                <img src={Project3} alt="" />
              </div>
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
