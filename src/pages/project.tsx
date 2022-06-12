import React from 'react'
import { useParams } from 'react-router-dom'
import { SectionLinks, AppSlider } from '../components'
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
import Preview1 from "../images/projects/project-slide-1.jpg"
import Preview2 from "../images/projects/project-slide-2.jpg"
import Preview3 from "../images/projects/project-slide-3.jpg"
import Preview4 from "../images/projects/project-slide-4.jpg"
import Preview5 from "../images/projects/project-slide-5.jpg"
import ProjectImg1 from "../images/project/project-images-img-1.jpg"
import ProjectImg2 from "../images/project/project-images-img-2.jpg"
import ProjectBg from "../images/project/project-images-bg.jpg"
import ProjectBgMobile from "../images/project/project-images-bg-mobile.jpg"

const Project = () => {
  const {id} = useParams();
  console.log("id", id);
  

  const links = [
    { link: "Название пред. проекта", to: ROUTES.Project, left: true },
    { link: "Название след. проекта", to: ROUTES.Project, left: false },
  ]

  const imagesSliderSettings = {
    infinite: false,
    arrows: false,
    variableWidth: true,
    centerMode: true,
    initialSlide: 2,
    responsive: [
      {
        breakpoint: 400,
        settings: {
          dots: true,
        }
      },
    ]
  }

  const previewsSliderSettings = {
    infinite: false,
    arrows: false,
    variableWidth: true,
    centerMode: true,
    initialSlide: 2,
    responsive: [
      {
        breakpoint: 400,
        settings: {
          dots: true,
        },
      },
    ],
  }

  const sliides = [Preview1, Preview2, Preview3, Preview4, Preview5];

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
          <AppSlider rootClass='instagram-slider' settings={previewsSliderSettings} hasArrows={false}>
          {sliides.map((img, idx) => (
            <div className="instagram-slider__item" key={idx}>
              <img className="instagram-slider__item-img" src={img} alt="" />
            </div>
          ))}
          </AppSlider>
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
              <img src={ProjectImg1} alt=""/>
            </div>
            <div className="project-images__img">
              <img src={ProjectImg2} alt=""/>
            </div>
          </div>
          <picture className="project-images__bg">
            <source srcSet={ProjectBg} type="image/jpeg" media="(min-width: 375px)" />
            <source srcSet={ProjectBgMobile} type="image/jpeg" media="(max-width: 375px)" />
            <img src={ProjectBg} alt=""/>
          </picture>

            <AppSlider rootClass="project-images__slider" hasArrows={false} settings={imagesSliderSettings}>
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
            </AppSlider>

            <AppSlider rootClass="project-images__slider" hasArrows={false} settings={imagesSliderSettings}>
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
            </AppSlider>
        </div>
      </div>

      <SectionLinks items={links} />
    </>
  )
}

export default Project
