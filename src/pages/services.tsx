import React from 'react'
import { ROUTES } from '../utils/const'
import TopBg from "../images/services-top-bg.jpg"
import TopImg from "../images/services-top-img.jpg"
import Img1 from "../images/services/services-image-section-1.jpg"
import Img2 from "../images/services/services-image-section-2.jpg"
import Img3 from "../images/services/services-image-section-3.jpg"
import Img4 from "../images/services/services-image-section-4.jpg"
import { ArrRight, ImageSection } from '../components'
import { Link } from 'react-router-dom'

const Services = () => {
  return (
    <>
       <section className="services-top">
        <div className="container-fluid">
          <h3 className="services-top__title title">Услуги</h3>
          <div className="services-top__bg">
            <img className="services-top__bg-img" src={TopBg} alt=""/>
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
            <img src={TopImg} alt=""/>
          </div>
        </div>
        <div className="container">
          <div className="section__box">
            <p className="section__box-text">Дизайн</p>
            <Link className="section__link" to={ROUTES.DesignProject}>
              Подробнее

              <ArrRight />
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
