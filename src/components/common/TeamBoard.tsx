import React from 'react'
import { ROUTES } from '../../utils/const'
import { Link } from "react-router-dom"
import Slider from "react-slick"

import Member1 from "../../images/team/01.jpg"
import Member2 from "../../images/team/02.jpg"
import Member3 from "../../images/team/03.jpg"
import Member4 from "../../images/team/04.jpg"
import Member5 from "../../images/team/05.jpg"
import Member6 from "../../images/team/06.jpg"
import Member7 from "../../images/team/07.jpg"

export const TeamBoard = () => {
  const teamSliderSettings = {
    slidesToShow: 3,
    rows: 2,
    arrows: false,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          variableWidth: false,
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          infinite: false,
          initialSlide: 1,
        }
      },
    ]
  }

  const members = [
    { img: Member1, position: "Дизайнер", name: "Семен Ветров" },
    { img: Member2, position: "Менеджер", name: "Полина Самойлова" },
    { img: Member3, position: "Художник", name: "Филипп Тихомиров" },
    { img: Member4, position: "Менеджер", name: "Виктория Савельева" },
    { img: Member5, position: "Художник", name: "Андрей Невинный" },
    { img: Member6, position: "Художник", name: "Анастасия Бойко" },
  ]
  
  return (
    <section className="team">
    <div className="container-fluid">
      <h3 className="team__title title">Команда</h3>
    </div>
    <div className="team__container">
      <div className="team__inner">
        <div className="team__info">
          <p className="team__info-text" >
            Более 10 лет команда Константина Валуйкина создаёт стильные интерьеры и авторскую архитектуру.
          </p>
         <br />
         <p className="team__info-text">
          За эти годы нашими профессионалами введены в эксплуатацию более 100 бъектов как жилой, так и коммерческой недвижимости.
         </p>
        </div>
        <div className="team__founder">
          <img src={Member7} alt=""/>
          <p className="team__founder-name">Константин Валуйкин</p>
          <p className="team__founder-position">Руководитель студии</p>  
        </div>
        <div className="team__members">
          <Slider className="team__members-slider" {...teamSliderSettings}>
            {members.map(({ img, name, position }) => (
              <div className="team__members-item" key={name}>
                <img className="team__members-img" src={img} alt=""/>
                <div className="team__members-name">{name}</div>
                <div className="team__members-position">{position}</div>
              </div>
            ))}
          </Slider>
        </div>
        <div className="team__founder-info">
          <p className="team__founder-name">Константин Валуйкин</p>
          <p className="team__founder-position">Руководитель студии</p>  
          <p className="team__founder-text">Сотни довольных Заказчиков стали друзьями нашей студии, рекомендуют нас и обращаются вновь и вновь.
          </p>
          <p className="team__founder-geography">География наших проектов разнообразна.
          </p>
          <p className="team__founder-text">Россия: Москва, Санкт-Петербург, Сочи, Тверь.</p>
          <p className="team__founder-text">Италия, город</p>
          <p className="team__founder-text">США: штат Флорида.</p>
          <p className="team__founder-text">Швейцария</p>
        </div>
      </div>
      <div className="section__link-wrapper">
        <Link className="section__link" to={ROUTES.Press}>Подробнее о нас
          <svg className="section__link-svg" width="50" height="44" viewBox="0 0 50 44" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M26.4875 1.32061C27.4151 0.393129 28.9186 0.393129 29.8461 1.32061L48.8461 20.3207C49.7736 21.2482 49.7736 22.7518 48.8461 23.6793L29.8461 42.6793C28.9186 43.6068 27.4151 43.6068 26.4875 42.6793C25.56 41.7518 25.56 40.2482 26.4875 39.3207L41.4329 24.375H2.8335C1.52183 24.375 0.458496 23.3116 0.458496 22C0.458496 20.6884 1.52183 19.625 2.8335 19.625H41.4329L26.4875 4.67937C25.56 3.75189 25.56 2.2481 26.4875 1.32061Z" fill="#DCDCDC"/>
         </svg>
        </Link>
      </div>
    </div>
  </section>  )
}
