import React from 'react'
import { ImageSection, SectionLinks } from '../components'
import { ROUTES } from '../utils/const'
import Img1 from "../images/projects/project-1.jpg"
import Img2 from "../images/projects/project-2.jpg"
import Img3 from "../images/projects/project-3.jpg"
import TopBg from "../images/projects/projects-top-bg.jpg"
import { Link } from 'react-router-dom'
import ProjectsBg from "../images/projects/projects-items-bg.jpg"

export const DesignProject = () => {
  const links = [
    { link: "Коммерческая недвижимость", to: ROUTES.Home },
    { link: "Ландшафный дизайн", to: ROUTES.Home },
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
              <svg className="section__link-svg" width="50" height="44" viewBox="0 0 50 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M26.4875 1.32061C27.4151 0.393129 28.9186 0.393129 29.8461 1.32061L48.8461 20.3207C49.7736 21.2482 49.7736 22.7518 48.8461 23.6793L29.8461 42.6793C28.9186 43.6068 27.4151 43.6068 26.4875 42.6793C25.56 41.7518 25.56 40.2482 26.4875 39.3207L41.4329 24.375H2.8335C1.52183 24.375 0.458496 23.3116 0.458496 22C0.458496 20.6884 1.52183 19.625 2.8335 19.625H41.4329L26.4875 4.67937C25.56 3.75189 25.56 2.2481 26.4875 1.32061Z" fill="#DCDCDC"/>
             </svg>
            </Link>
          </div>
        </div>
      </section>

      <ImageSection img={Img1} name="Современный лофт с элементами ар деко" to={ROUTES.Home} imgLeft={true} />
      <ImageSection img={Img2} name="Квартира в стиле лофт" to={ROUTES.Home} imgLeft={true} />
      <ImageSection img={Img3} name="Интерьер с яркими акцентами" to={ROUTES.Home}  />

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
