import React from 'react'
import { SectionLinks } from '../components'
import { ROUTES } from '../utils/const'

const Press = () => {
  const links = [
    { link: "О нас", to: ROUTES.About },
    { link: "Проекты", to: ROUTES.Projects },
  ]

  return (
    <>
      <section className="press-items">
        <div className="container">
          <h3 className="title">СМИ о нас</h3>
            <div className="press-items__item">
              <div className="press-items__img">
                <img src="images/press-img.jpg" alt=""/>
              </div>
              <div className="press-items__info">
                <p className="press-items__text">
                  Более 20 лет наша команда создаёт стильные интерьеры. 
                </p>
                <p className="press-items__text">
                  Работы нашей студии публикуются в архитектурных журналах и завоёвывают престижные награды.
                </p>
              </div>
            </div>
            <div className="press-items__item">
              <div className="press-items__info-left">
                <p className="press-items__text">
                  Более 20 лет наша команда создаёт стильные интерьеры. 
                </p>
                <p className="press-items__text">
                  Работы нашей студии публикуются в архитектурных журналах и завоёвывают престижные награды.
                </p>
              </div>
              <div className="press-items__img">
                <img src="images/press-img.jpg" alt=""/>
              </div>
            </div>
            <div className="press-items__item">
              <div className="press-items__img">
                <img src="images/press-img.jpg" alt=""/>
              </div>
              <div className="press-items__info">
                <p className="press-items__text">
                  Более 20 лет наша команда создаёт стильные интерьеры. 
                </p>
                <p className="press-items__text">
                  Работы нашей студии публикуются в архитектурных журналах и завоёвывают престижные награды.
                </p>
              </div>
            </div>
        </div>
      </section>

      <section className="press-interview">
        <h3 className="title">Интервью</h3>
        <div className="press-interview__video" style={{backgroundImage: "images/interview-bg.jpg"}}>
          <a className="press-interview__video-play" href="https://youtu.be/7OcK1TMnbe0" data-fancybox>
            <img src="images/video-play.svg" alt=""/>
          </a>
        </div>
      </section>

      <SectionLinks items={links} />
    </>
  )
}

export default Press
