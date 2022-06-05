import React from 'react'

const About = () => {
  return (
    <>
      <section className="about-top">
        <div className="container-fluid">
          <h3 className="about-top__title title">О нас</h3>
        </div>
      </section>

      <section className="team">
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
              <img src="images/team/07.jpg" alt="" />
              <p className="team__founder-name">Константин Валуйкин</p>
              <p className="team__founder-position">Руководитель студии</p>  
            </div>
            <div className="team__members">
              <div className="team__members-slider">
                <div className="team__members-item">
                  <img className="team__members-img" src="images/team/01.jpg" alt="" />
                  <div className="team__members-name">Семен Ветров</div>
                  <div className="team__members-position">Дизайнер</div>
                </div>
                <div className="team__members-item">
                  <img className="team__members-img" src="images/team/02.jpg" alt="" />
                  <div className="team__members-name">Полина Самойлова</div>
                  <div className="team__members-position">Менеджер</div>
                </div>
                <div className="team__members-item">
                  <img className="team__members-img" src="images/team/03.jpg" alt="" />
                  <div className="team__members-name">Филипп Тихомиров</div>
                  <div className="team__members-position">Художник</div>
                </div>
              </div>
              <div className="team__members-slider">
                <div className="team__members-item">
                  <img className="team__members-img" src="images/team/04.jpg" alt="" />
                  <div className="team__members-name">Виктория Савельева</div>
                  <div className="team__members-position">Менеджер</div>
                </div>
                <div className="team__members-item">
                  <img className="team__members-img" src="images/team/05.jpg" alt="" />
                  <div className="team__members-name">Андрей Невинный</div>
                  <div className="team__members-position">Художник</div>
                </div>
                <div className="team__members-item">
                  <img className="team__members-img" src="images/team/06.jpg" alt="" />
                  <div className="team__members-name">Анастасия Бойко</div>
                  <div className="team__members-position">Дизайнер</div>
                </div>
              </div>
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
        </div>
      </section>
      <section className="projects">
        <div className="container-fluid">
          <h3 className="about-projects__title title">География проектов</h3>
          <div className="projects-map" style={{backgroundImage: "images/map.svg"}}>

            <div className="projects-map__circle projects-map__circle--1">
              <div className="projects-map__circle-inner">
                <img src="images/location.svg" alt="" />
                <div className="projects-map__card projects-map__card--1">
                <div className="projects-map__card-box" style={{backgroundImage: "images/projects-card.jpg"}}>
                    <div className="projects-map__card-location">Флорида</div>
                    <div className="projects-map__card-name">Загородный дом в посёлке Комильфо</div>
                    <a className="projects-map__card-link" href="#">Подробнее</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="projects-map__circle projects-map__circle--2">
              <div className="projects-map__circle-inner">
                <img src="images/location.svg" alt="" />
                <div className="projects-map__card projects-map__card--2">
                <div className="projects-map__card-box" style={{backgroundImage: "images/projects-card.jpg"}}>
                    <div className="projects-map__card-location">Флорида</div>
                    <div className="projects-map__card-name">Загородный дом в посёлке Комильфо</div>
                    <a className="projects-map__card-link" href="#">Подробнее</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="projects-map__circle projects-map__circle--3">
              <div className="projects-map__circle-inner">
                <img src="images/location.svg" alt="" />
                <div className="projects-map__card projects-map__card--3">
                <div className="projects-map__card-box" style={{backgroundImage: "images/projects-card.jpg"}}>
                    <div className="projects-map__card-location">Флорида</div>
                    <div className="projects-map__card-name">Загородный дом в посёлке Комильфо</div>
                    <a className="projects-map__card-link" href="#">Подробнее</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="projects-map__circle projects-map__circle--4">
              <div className="projects-map__circle-inner">
                <img src="images/location.svg" alt="" />
                <div className="projects-map__card projects-map__card--4">
                  <div className="projects-map__card-box" style={{backgroundImage: "images/projects-card.jpg"}}>
                    <div className="projects-map__card-location">Флорида</div>
                    <div className="projects-map__card-name">Загородный дом в посёлке Комильфо</div>
                    <a className="projects-map__card-link" href="#">Подробнее</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-partners">
        <div className="container-fluid">
          <h3 className="about-partners__title title">Партнёры и заказчики</h3>
        </div>
        <div className="container">
          <div className="about-partners__items">
            <div className="about-partners__item">
              <img src="images/partners-1.svg" alt="" />
            </div>
            <div className="about-partners__item">
              <img src="images/partners-2.svg" alt="" />
            </div>
            <div className="about-partners__item">
              <img src="images/partners-3.svg" alt="" />
            </div>
            <div className="about-partners__item">
              <img src="images/partners-2.svg" alt="" />
            </div>
            <div className="about-partners__item">
              <img src="images/partners-3.svg" alt="" />
            </div>
            <div className="about-partners__item">
              <img src="images/partners-4.svg" alt="" />
            </div>
          </div>
          <div className="about-partners__items">
            <div className="about-partners__item">
              <img src="images/partners-2.svg" alt="" />
            </div>
            <div className="about-partners__item">
              <img src="images/partners-3.svg" alt="" />
            </div>
            <div className="about-partners__item">
              <img src="images/partners-1.svg" alt="" />
            </div>
            <div className="about-partners__item">
              <img src="images/partners-4.svg" alt="" />
            </div>
            <div className="about-partners__item">
              <img src="images/partners-2.svg" alt="" />
            </div>
            <div className="about-partners__item">
              <img src="images/partners-3.svg" alt="" />
            </div>
          </div>
        </div>
      </section>

      <section className="about-awards">
        <div className="container-fluid">
          <h3 className="about-awards__title title">Награды</h3>
        </div>
        <div className="container-fluid">
          <div className="about-awards__items">
            <div className="about-awards__item">
              <img className="about-awards__img" src="images/awards-1.jpg" alt="" />
            </div>
            <div className="about-awards__item">
              <img className="about-awards__img" src="images/awards-2.jpg" alt="" />
            </div>
            <div className="about-awards__item">
              <img className="about-awards__img" src="images/awards-2.jpg" alt="" />
            </div>
            <div className="about-awards__item">
              <img className="about-awards__img" src="images/awards-2.jpg" alt="" />
            </div>
          </div>
        </div>
      </section>

      <div className="section-links">
        <div className="container">
          <div className="section__links">
            <div className="section__links-wrapper">
              <a href="press.html" className="section__link">
                Блог
                <svg className="section__link-svg" width="50" height="44" viewBox="0 0 50 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M26.4875 1.32061C27.4151 0.393129 28.9186 0.393129 29.8461 1.32061L48.8461 20.3207C49.7736 21.2482 49.7736 22.7518 48.8461 23.6793L29.8461 42.6793C28.9186 43.6068 27.4151 43.6068 26.4875 42.6793C25.56 41.7518 25.56 40.2482 26.4875 39.3207L41.4329 24.375H2.8335C1.52183 24.375 0.458496 23.3116 0.458496 22C0.458496 20.6884 1.52183 19.625 2.8335 19.625H41.4329L26.4875 4.67937C25.56 3.75189 25.56 2.2481 26.4875 1.32061Z" fill="#DCDCDC"/>
               </svg>
              </a>
            </div>
            <div className="section__links-wrapper">
              <a href="press.html" className="section__link-left">
                <svg className="section__link-svg" width="50" height="44" viewBox="0 0 50 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M23.5125 1.32061C22.5849 0.393129 21.0814 0.393129 20.1539 1.32061L1.15389 20.3207C0.226372 21.2482 0.226372 22.7518 1.15389 23.6793L20.1539 42.6793C21.0814 43.6068 22.5849 43.6068 23.5125 42.6793C24.44 41.7518 24.44 40.2482 23.5125 39.3207L8.56705 24.375H47.1665C48.4782 24.375 49.5415 23.3116 49.5415 22C49.5415 20.6884 48.4782 19.625 47.1665 19.625H8.56705L23.5125 4.67937C24.44 3.75189 24.44 2.2481 23.5125 1.32061Z" fill="#DCDCDC"/>
                </svg>
                Пресса
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About
