import React from 'react'
import { InstSlider, SectionLinks } from '../components'
import { ROUTES } from '../utils/const'
import Project1 from "../images/project/project-1.jpg"
import Project2 from "../images/project/project-2.jpg"
import Project3 from "../images/project/project-3.jpg"
import Project4 from "../images/project/project-4.jpg"
import Project5 from "../images/project/project-5.jpg"
import Project6 from "../images/project/project-6.jpg"
import Project7 from "../images/project/project-7.jpg"
import Project8 from "../images/project/project-8.jpg"
import Project9 from "../images/project/project-9.jpg"
import Project10 from "../images/project/project-10.jpg"
import topBg from "../images/content/top-bg.jpg"
import topBgMobile from "../images/top-bg-mobile.jpg"

const Project = () => {
  const links = [
    { link: "Название пред. проекта", to: ROUTES.Project },
    { link: "Название след. проекта", to: ROUTES.Project },
  ]

  return (
    <>
      <section className="project-top">
        <div className="container">
          <h3 className="project-top__title title">Дом охотника</h3>
          <div className="project-top__inner">
            <div className="project-top__location">Локация: Тверская область</div>
            <div className="project-top__metrage">Метраж: 460 м2</div>
          </div>
          <div className="project-top__inner">
            <p className="project-top__text">
              Дом расположен за городом, на берегу живописного озера. Одним из главных увлечений его хозяина является охота. Приняв это во внимание, мы совместно с нашим Заказчиком легко сформировали концепцию проекта: охотничий дом для жизни и отдыха в кругу семьи и друзей.
            </p>
            <p className="project-top__text">
              В реализации данной идеи мы стремились подчеркнуть имеющуюся гармонию объекта и природной среды, при этом дополнить её комфортом и оснастить по последнему слову техники и инженерии
            </p>
          </div>
        </div>

        <div className="container-fluid">
        <InstSlider />
        </div>
      </section>

      <div className="project-images">
        <div className="container-fluid">
          <picture className="project-images__bg">
            <source srcSet={topBg} type="image/jpeg" media="(min-width: 375px)" />
            <source srcSet={topBgMobile} type="image/jpeg" media="(max-width: 375px)" />
            <img src={topBg} alt=""/>
          </picture>
          <div className="project-images__images">
            <div className="project-images__img">
              <img src="images/project/project-images-img-1.jpg" alt=""/>
            </div>
            <div className="project-images__img">
              <img src="images/project/project-images-img-2.jpg" alt=""/>
            </div>
          </div>
          <picture className="project-images__bg">
            <source srcSet="images/project/project-images-bg.jpg" type="image/jpeg" media="(min-width: 375px)" />
            <source srcSet="images/project/project-images-bg-mobile.jpg" type="image/jpeg" media="(max-width: 375px)" />
            <img src="images/project/project-images-bg.jpg" alt=""/>
          </picture>
            <div className="project-images__slider">
              <div className="project-images__slider-item">
                <img src={Project1} alt=""/>
              </div>
              <div className="project-images__slider-item">
                <img src={Project2} alt=""/>
              </div>
              <div className="project-images__slider-item">
                <img src={Project3} alt=""/>
              </div>
              <div className="project-images__slider-item">
                <img src={Project4} alt=""/>
              </div>
              <div className="project-images__slider-item">
                <img src={Project5} alt=""/>
              </div>
            </div>
            <div className="project-images__slider">
              <div className="project-images__slider-item">
                <img src={Project6} alt=""/>
              </div>
              <div className="project-images__slider-item">
                <img src={Project7} alt=""/>
              </div>
              <div className="project-images__slider-item">
                <img src={Project8} alt=""/>
              </div>
              <div className="project-images__slider-item">
                <img src={Project9} alt=""/>
              </div>
              <div className="project-images__slider-item">
                <img src={Project10} alt=""/>
              </div>
            </div>
        </div>
      </div>

      <SectionLinks items={links} />
    </>
  )
}

export default Project
