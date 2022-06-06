import React from 'react'
import { ProjectsMap, SectionLinks, TeamBoard } from '../components'
import { ROUTES } from '../utils/const'
import Partner1 from "../images/partners-1.svg"
import Partner2 from "../images/partners-2.svg"
import Partner3 from "../images/partners-3.svg"
import Partner4 from "../images/partners-4.svg"
import Award1 from "../images/awards-1.jpg"
import Award2 from "../images/awards-2.jpg"

const About = () => {
  const links = [
    { link: "Блог", to: ROUTES.Press },
    { link: "Пресса", to: ROUTES.Press },
  ]
  
  const partners = [
    Partner1, Partner2, Partner3, Partner2, Partner3, Partner4
  ]

  const awards = [ Award1, Award2, Award2, Award2 ]

  return (
    <>
      <section className="about-top">
        <div className="container-fluid">
          <h3 className="about-top__title title">О нас</h3>
        </div>
      </section>

      <TeamBoard />

      <ProjectsMap titleClass="about-projects__title" />

      <section className="about-partners">
        <div className="container-fluid">
          <h3 className="about-partners__title title">Партнёры и заказчики</h3>
        </div>
        <div className="container">
          <div className="about-partners__items">
            {partners.map((img, idx) => (
              <div className="about-partners__item" key={idx}>
                <img src={img} alt="" />
              </div>
            ))}
          </div>
          <div className="about-partners__items">
            {partners.map((img, idx) => (
              <div className="about-partners__item" key={idx}>
                <img src={img} alt="" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="about-awards">
        <div className="container-fluid">
          <h3 className="about-awards__title title">Награды</h3>
        </div>
        <div className="container-fluid">
          <div className="about-awards__items">
            {awards.map((img, idx) => (
              <div className="about-awards__item" key={idx}>
                <img className="about-awards__img" src={img} alt="" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <SectionLinks items={links} />
    </>
  )
}

export default About
