import React from 'react'
import { ArrRight, ImageSection, SectionLinks } from '../components'
import { ROUTES } from '../utils/const'
import Img1 from "../images/projects/project-1.jpg"
import Img2 from "../images/projects/project-2.jpg"
import Img3 from "../images/projects/project-3.jpg"
import TopBg from "../images/projects/projects-top-bg.jpg"
import { Link } from 'react-router-dom'
import ProjectsBg from "../images/content/top-bg.jpg"

export const DesignProject = () => {
  const links = [
    { link: "Коммерческая недвижимость", to: ROUTES.Home, left: true },
    { link: "Ландшафный дизайн", to: ROUTES.Home, left: false },
  ]

  return (
    <>
      <section className="design-top">
        <div className="container-fluid">
          <h3 className="design-top__title">Дизайн-проект</h3>
          <p className="design-top__text">Дизайн-проект интерьера позволяет организовать пространство таким образом, чтобы каждый сантиметр площади был продуман с точки зрения вашего комфорта и функциональности</p>
          <div className="design-top__bg">
            <img src={TopBg} alt=""/>
          </div>
        </div>
        <div className="container">
          <div className="design-top__stages">
            <p className="design-top__stages-title">Этапы работ</p>
            <div className="design-top__stages-inner">
              <div className="design-top__stages-stage">Брифинг</div>
              <div className="design-top__stages-stage">Заключение контракта</div>
              <div className="design-top__stages-stage">Создание концепции</div>
              <div className="design-top__stages-stage">Разработка проектной документации</div>
              <div className="design-top__stages-stage">Разработка инженерной документации</div>
            </div>
          </div>
        </div>
      </section>

      <section className="design-items">
        <div className="container-fluid">
          <h3 className="title">Проекты</h3>
          <div className="design-items__bg">
            <img src={ProjectsBg} alt=""/>
          </div>
        </div>
        <div className="container">
          <div className="section__box">
            <p className="section__box-text">Дом охотника</p>
            <Link to="/projects/1" className="section__link">
              Подробнее

              <ArrRight />
            </Link>
          </div>
        </div>
      </section>

      <ImageSection img={Img1} name="Современный лофт с элементами ар деко" to={ROUTES.Home} imgLeft={true} />
      <ImageSection img={Img2} name="Квартира в стиле лофт" to={ROUTES.Home} />
      <ImageSection img={Img3} name="Интерьер с яркими акцентами" to={ROUTES.Home} imgLeft={true} />

      <div className="design-info">
        <div className="container">
          <p className="design-info__text">При составлении ТЗ мы зафиксируем все ваши пожелания, учтём нюансы и предусмотрим возможные сложности. 
            В результате работы с нами вы получите оптимальное интерьерное решение. Мы гарантируем эксклюзивность, соблюдение всех стандартов качества и оговорённых сроков.
          </p>
        </div>
      </div>

      <SectionLinks items={links} />
    </>
  )
}

export default DesignProject
