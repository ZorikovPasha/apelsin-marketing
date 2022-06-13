import React from "react";
import { Link } from "react-router-dom";
import "@fancyapps/ui/src/Fancybox/Fancybox.js";

import { InstSlider, ProjectsMap, TeamBoard, Top } from "../components";
import Partner1 from "../images/partners-1.svg";
import Partner2 from "../images/partners-2.svg";
import Partner3 from "../images/partners-3.svg";
import Partner4 from "../images/partners-4.svg";
import Project1 from "../images/images-bg.jpg";
import Project1Mpbile from "../images/images-bg-mobile.jpg";
import Project3Mpbile from "../images/images-section-2-mobile.jpg";
import Project2Mpbile from "../images/images-section-1-mobile.jpg";
import Project2 from "../images/images-section-1.jpg";
import Project3 from "../images/images-section-2.jpg";
import Logo1 from "../images/instagram-4.jpg";
import Logo3 from "../images/images-logo-2.svg";
import Logo2 from "../images/images-logo-1.svg";
import Logo4 from "../images/images-logo-3.svg";
import Play from "../images/video-play.svg";
import { ROUTES } from "../utils/const";
import { IPageProps } from "../types";

const Home: React.FC<IPageProps> = ({ projects }) => {
  
  const services = [
    "Дизайн",
    "Архитектура",
    "Генеральный подряд",
    "Ландшафный дизайн",
    "Девелоперам",
  ];

  return (
    <>
      <Top />

      <section className="clients">
        <div className="container-fluid">
          <h3 className="title">Наши клиенты</h3>
        </div>
        <div className="container">
          <div className="clients__items">
            <div className="clients__item">
              <img src={Partner1} alt="" />
            </div>
            <div className="clients__item">
              <img src={Partner2} alt="" />
            </div>
            <div className="clients__item">
              <img src={Partner3} alt="" />
            </div>
            <div className="clients__item">
              <img src={Partner2} alt="" />
            </div>
            <div className="clients__item">
              <img src={Partner3} alt="" />
            </div>
            <div className="clients__item">
              <img src={Partner4} alt="" />
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="clients-video">
            <a className="clients-video__play" href="https://youtu.be/7OcK1TMnbe0" data-fancybox>
              <img src={Play} alt="" />
            </a>
          </div>
        </div>
      </section>

      <ProjectsMap projects={projects} />

      <div className="images">
        <div className="container-fluid">
          <picture className="images__picture">
            <source media="(min-width: 375px)" srcSet={Project1} type="image/jpeg" />
            <source srcSet={Project1Mpbile} type="image/jpeg" media="(max-width: 375px)" />
            <img src={Logo1} alt="" />
          </picture>
          <div className="images__info">
            <div className="images__logo">
              <img src={Logo2} alt="" />
            </div>
            <p className="images__text">Лофт и ар-деко: квартира 124 м² в Москве</p>
          </div>

          <div className="images-section images-section--1">
            <div className="images-section__info">
              <div className="images-section__logo">
                <img src={Logo3} alt="" />
              </div>
              <p className="images-section__text">Дом в Подмосковье: интерьер с яркими акцентами</p>
            </div>
            <picture className="images-section__img">
              <source srcSet={Project2} type="image/jpeg" media="(min-width: 375px)" />
              <source srcSet={Project2Mpbile} type="image/jpeg" media="(max-width: 375px)" />
              <img src={Project2} alt="" />
            </picture>
          </div>

          <div className="images-section images-section--2">
            <picture className="images-section__img">
              <source srcSet={Project3} type="image/jpeg" media="(min-width: 375px)" />
              <source srcSet={Project3Mpbile} type="image/jpeg" media="(max-width: 375px)" />
              <img src={Project3} alt="" />
            </picture>
            <div className="images-section__info">
              <div className="images-section__logo">
                <img src={Logo4} alt="" />
              </div>
              <p className="images-section__text">
                Урбанизм и природа: Спокойные интерьеры московской квартиры
              </p>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="section__link-wrapper">
            <Link className="section__link" to={ROUTES.Projects}>
              Смотреть все проекты
              <svg
                className="section__link-svg"
                width="50"
                height="44"
                viewBox="0 0 50 44"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M26.4875 1.32061C27.4151 0.393129 28.9186 0.393129 29.8461 1.32061L48.8461 20.3207C49.7736 21.2482 49.7736 22.7518 48.8461 23.6793L29.8461 42.6793C28.9186 43.6068 27.4151 43.6068 26.4875 42.6793C25.56 41.7518 25.56 40.2482 26.4875 39.3207L41.4329 24.375H2.8335C1.52183 24.375 0.458496 23.3116 0.458496 22C0.458496 20.6884 1.52183 19.625 2.8335 19.625H41.4329L26.4875 4.67937C25.56 3.75189 25.56 2.2481 26.4875 1.32061Z"
                  fill="#DCDCDC"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      <TeamBoard />

      <section className="services">
        <div className="container-fluid">
          <h3 className="services__title title">Услуги</h3>
        </div>
        <div className="container">
          <div className="services__items">
            {services.map((text) => (
              <div className="services__item" key={text}>
                <p className="services__item-text">{text}</p>
                <span className="services__item-link item-link">
                  <p className="item-link__text">Подробнее</p>
                  <svg
                    width="24"
                    height="22"
                    viewBox="0 0 24 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12.7045 1.2045C13.1439 0.765166 13.8561 0.765166 14.2954 1.2045L23.2954 10.2045C23.7348 10.6439 23.7348 11.3561 23.2954 11.7954L14.2954 20.7955C13.8561 21.2348 13.1439 21.2348 12.7045 20.7955C12.2652 20.3561 12.2652 19.6439 12.7045 19.2045L19.7839 12.125H1.5C0.878685 12.125 0.375 11.6213 0.375 11C0.375 10.3787 0.878685 9.875 1.5 9.875H19.7839L12.7045 2.79549C12.2652 2.35616 12.2652 1.64384 12.7045 1.2045Z"
                      fill="#101010"
                    />
                  </svg>
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="instagram">
        <div className="container-fluid">
          <h3 className="instagram__title title">
            Instagram
            <span className="instagram__title-link">
              <svg
                className="instagram__title-link-arr"
                width="126"
                height="126"
                viewBox="0 0 126 126"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.13401 113.563L101.124 14.5715H44.4284C40.4047 14.5715 37.1426 11.3095 37.1426 7.28574C37.1426 3.262 40.4047 0 44.4284 0H118.714C122.738 0 126 3.262 126 7.28574V81.5716C126 85.5954 122.738 88.8574 118.714 88.8574C114.691 88.8574 111.429 85.5954 111.429 81.5716V24.8751L12.4369 123.866C9.59151 126.711 4.97935 126.711 2.13401 123.866C-0.711335 121.021 -0.711335 116.408 2.13401 113.563Z"
                  fill="#101010"
                />
              </svg>
            </span>
          </h3>
          <InstSlider />
        </div>
      </section>
    </>
  );
};
export default Home;
