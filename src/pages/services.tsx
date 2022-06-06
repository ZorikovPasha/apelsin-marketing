import React from 'react'
import { ROUTES } from '../utils/const'
import Img1 from "../images/services/services-image-section-1.jpg"
import Img2 from "../images/services/services-image-section-2.jpg"
import Img3 from "../images/services/services-image-section-3.jpg"
import Img4 from "../images/services/services-image-section-4.jpg"
import { ImageSection } from '../components'
import { Link } from 'react-router-dom'

const Services = () => {
  return (
    <>
       <section className="services-top">
        <div className="container-fluid">
          <h3 className="services-top__title title">Услуги</h3>
          <div className="services-top__bg">
            <img className="services-top__bg-img" src="images/services-top-bg.jpg" alt=""/>
          </div>
        </div>
        <div className="container">
          <p className="services-top__text">
            Более 20 лет наша команда создаёт стильные интерьеры. 
          </p>
          <p className="services-top__text">
            Работы нашей студии публикуются в архитектурных журналах и завоёвывают престижные награды.
          </p>
        </div>
        <div className="container-fluid">
          <div className="services-top__img">
            <img src="images/services-top-img.jpg" alt=""/>
          </div>
        </div>
        <div className="container">
          <div className="section__box">
            <p className="section__box-text">Дизайн</p>
            <Link className="section__link" to={ROUTES.DesignProject}>
              Подробнее
              <svg className="section__link-svg" width="50" height="44" viewBox="0 0 50 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M26.4875 1.32061C27.4151 0.393129 28.9186 0.393129 29.8461 1.32061L48.8461 20.3207C49.7736 21.2482 49.7736 22.7518 48.8461 23.6793L29.8461 42.6793C28.9186 43.6068 27.4151 43.6068 26.4875 42.6793C25.56 41.7518 25.56 40.2482 26.4875 39.3207L41.4329 24.375H2.8335C1.52183 24.375 0.458496 23.3116 0.458496 22C0.458496 20.6884 1.52183 19.625 2.8335 19.625H41.4329L26.4875 4.67937C25.56 3.75189 25.56 2.2481 26.4875 1.32061Z" fill="#DCDCDC"/>
             </svg>
            </Link>
          </div>
        </div>
      </section>

      <ImageSection img={Img1} name="Архитектура" to={ROUTES.Home} />
      <ImageSection img={Img2} name="Генеральный подряд" to={ROUTES.Home} imgLeft={true} />
      <ImageSection img={Img3} name="Ландшафный дизайн" to={ROUTES.Home} />
      <ImageSection img={Img4} name="Девелоперам" to={ROUTES.Home} imgLeft={true} />
    </>
  )
}

export default Services
