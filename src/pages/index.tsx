import React from 'react'

const Home = () => {
  return (
    <>
      <section className="top">
        <div className="container">
          <div className="top__subtitle">Студия дизайна интерьера</div>
          <h1 className="top__title title">Apelsin Design</h1>
        </div>
        <div className="container-fluid">
          <div className="top-slider">
            <div className="top-slider__item">
              <img src="images/content/top-bg.jpg" alt=""/>
            </div>
            <div className="top-slider__item">
              <img src="images/content/top-bg.jpg" alt=""/>
            </div>
            <div className="top-slider__item">
              <img src="images/content/top-bg.jpg" alt=""/>
            </div>
            <div className="top-slider__item">
              <img src="images/content/top-bg.jpg" alt=""/>
            </div>
          </div>
        </div>
        <div className="container">
          <p className="top__text">
            Дизайн интерьера становится вашей повседневной атмосферой. 
          </p>
          <p className="top__text">
            Мы конструируем пространство, которое повышает качество жизни, окружает комфортом и вдохновляет на дальнейшие активные действия по преображению реальности. 
          </p>
          <p className="top__text">
            Задача нашей работы в том, чтобы вы смогли воплотить свои представления о красоте и комфорте, и остались доволен результатом.
          </p>
        </div>
      </section>

      <section className="clients">
        <div className="container-fluid">
          <h3 className="title">Наши клиенты</h3>
        </div>
        <div className="container">
          <div className="clients__items">
            <div className="clients__item">
              <img src="images/partners-1.svg" alt=""/>
            </div>
            <div className="clients__item">
              <img src="images/partners-2.svg" alt=""/>
            </div>
            <div className="clients__item">
              <img src="images/partners-3.svg" alt=""/>
            </div>
            <div className="clients__item">
              <img src="images/partners-2.svg" alt=""/>
            </div>
            <div className="clients__item">
              <img src="images/partners-3.svg" alt=""/>
            </div>
            <div className="clients__item">
              <img src="images/partners-4.svg" alt=""/>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="clients-video" style={{backgroundImage: "images/clients-video-bg.jpg"}}>
            <a className="clients-video__play" href="https://youtu.be/7OcK1TMnbe0" data-fancybox>
              <img src="images/video-play.svg" alt=""/>
            </a>
          </div>
        </div>
      </section>

      <section className="projects">
        <div className="container-fluid">
          <h3 className="title">Проекты</h3>
        </div>
        <div className="container">
          <div className="projects-map" style={{backgroundImage: "images/map.svg"}}>
            <div className="projects-map__circle projects-map__circle--1">
              <div className="projects-map__circle-inner">
                <img src="images/location.svg" alt=""/>
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
                <img src="images/location.svg" alt=""/>
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
                <img src="images/location.svg" alt=""/>
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
                <img src="images/location.svg" alt=""/>
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
      <div className="images">
        <div className="container-fluid">
          <picture className="images__picture">
            <source media="(min-width: 375px)" srcSet="images/images-bg.jpg" type="image/jpeg" />
            <source srcSet="images/images-bg-mobile.jpg" type="image/jpeg" media="(max-width: 375px)" /> 
            <img src="images/instagram-4.jpg" alt=""/>
          </picture>
          <div className="images__info">
            <div className="images__logo">
              <img src="images/images-logo-1.svg" alt=""/>
            </div>
            <p className="images__text">Лофт и ар-деко: квартира 124 м² в Москве</p>
          </div>
          <div className="images-section images-section--1">
            <div className="images-section__info">
              <div className="images-section__logo">
                <img src="images/images-logo-2.svg" alt=""/>
              </div>
              <p className="images-section__text">Дом в Подмосковье: интерьер с яркими акцентами</p>
            </div>
            <picture className="images-section__img">
              <source srcSet="images/images-section-1.jpg" type="image/jpeg" media="(min-width: 375px)" />
              <source srcSet="images/images-section-1-mobile.jpg" type="image/jpeg" media="(max-width: 375px)" />
              <img src="images/images-section-1.jpg" alt=""/>
            </picture>
          </div>
          <div className="images-section images-section--2">
            <picture className="images-section__img">
              <source srcSet="images/images-section-2.jpg" type="image/jpeg" media="(min-width: 375px)" />
              <source srcSet="images/images-section-2-mobile.jpg" type="image/jpeg" media="(max-width: 375px)" /> 
              <img src="images/images-section-2.jpg" alt=""/>
            </picture>
            <div className="images-section__info">
              <div className="images-section__logo">
                <img src="images/images-logo-3.svg" alt=""/>
              </div>
              <p className="images-section__text">Урбанизм и природа: Спокойные интерьеры московской квартиры</p>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="section__link-wrapper">
            <a className="section__link" href="projects.html">
              Смотреть все проекты
              <svg className="section__link-svg" width="50" height="44" viewBox="0 0 50 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M26.4875 1.32061C27.4151 0.393129 28.9186 0.393129 29.8461 1.32061L48.8461 20.3207C49.7736 21.2482 49.7736 22.7518 48.8461 23.6793L29.8461 42.6793C28.9186 43.6068 27.4151 43.6068 26.4875 42.6793C25.56 41.7518 25.56 40.2482 26.4875 39.3207L41.4329 24.375H2.8335C1.52183 24.375 0.458496 23.3116 0.458496 22C0.458496 20.6884 1.52183 19.625 2.8335 19.625H41.4329L26.4875 4.67937C25.56 3.75189 25.56 2.2481 26.4875 1.32061Z" fill="#DCDCDC"/>
               </svg>
            </a>
          </div>
        </div>
      </div>

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
              <img src="images/team/07.jpg" alt=""/>
              <p className="team__founder-name">Константин Валуйкин</p>
              <p className="team__founder-position">Руководитель студии</p>  
            </div>
            <div className="team__members">
              <div className="team__members-slider">
                <div className="team__members-item">
                  <img className="team__members-img" src="images/team/01.jpg" alt=""/>
                  <div className="team__members-name">Семен Ветров</div>
                  <div className="team__members-position">Дизайнер</div>
                </div>
                <div className="team__members-item">
                  <img className="team__members-img" src="images/team/02.jpg" alt=""/>
                  <div className="team__members-name">Полина Самойлова</div>
                  <div className="team__members-position">Менеджер</div>
                </div>
                <div className="team__members-item">
                  <img className="team__members-img" src="images/team/03.jpg" alt=""/>
                  <div className="team__members-name">Филипп Тихомиров</div>
                  <div className="team__members-position">Художник</div>
                </div>
              </div>
              <div className="team__members-slider">
                <div className="team__members-item">
                  <img className="team__members-img" src="images/team/04.jpg" alt=""/>
                  <div className="team__members-name">Виктория Савельева</div>
                  <div className="team__members-position">Менеджер</div>
                </div>
                <div className="team__members-item">
                  <img className="team__members-img" src="images/team/05.jpg" alt=""/>
                  <div className="team__members-name">Андрей Невинный</div>
                  <div className="team__members-position">Художник</div>
                </div>
                <div className="team__members-item">
                  <img className="team__members-img" src="images/team/06.jpg" alt=""/>
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
          <div className="section__link-wrapper">
            <a className="section__link" href="about.html">Подробнее о нас
              <svg className="section__link-svg" width="50" height="44" viewBox="0 0 50 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M26.4875 1.32061C27.4151 0.393129 28.9186 0.393129 29.8461 1.32061L48.8461 20.3207C49.7736 21.2482 49.7736 22.7518 48.8461 23.6793L29.8461 42.6793C28.9186 43.6068 27.4151 43.6068 26.4875 42.6793C25.56 41.7518 25.56 40.2482 26.4875 39.3207L41.4329 24.375H2.8335C1.52183 24.375 0.458496 23.3116 0.458496 22C0.458496 20.6884 1.52183 19.625 2.8335 19.625H41.4329L26.4875 4.67937C25.56 3.75189 25.56 2.2481 26.4875 1.32061Z" fill="#DCDCDC"/>
             </svg>
            </a>
          </div>
        </div>
      </section>

      <section className="services">
        <div className="container-fluid">
          <h3 className="services__title title">Услуги</h3>
        </div>
        <div className="container">
          <div className="services__items">
            <div className="services__item">
              <p className="services__item-text">Дизайн</p>
              <a className="services__item-link item-link" href="#">
                <p className="item-link__text">Подробнее</p>
                <svg width="24" height="22" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M12.7045 1.2045C13.1439 0.765166 13.8561 0.765166 14.2954 1.2045L23.2954 10.2045C23.7348 10.6439 23.7348 11.3561 23.2954 11.7954L14.2954 20.7955C13.8561 21.2348 13.1439 21.2348 12.7045 20.7955C12.2652 20.3561 12.2652 19.6439 12.7045 19.2045L19.7839 12.125H1.5C0.878685 12.125 0.375 11.6213 0.375 11C0.375 10.3787 0.878685 9.875 1.5 9.875H19.7839L12.7045 2.79549C12.2652 2.35616 12.2652 1.64384 12.7045 1.2045Z" fill="#101010"/>
                </svg>
              </a>
            </div>
            <div className="services__item">
              <p className="services__item-text">Архитектура</p>
              <a className="services__item-link item-link" href="#">
                <p className="item-link__text">Подробнее</p>
                <svg width="24" height="22" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M12.7045 1.2045C13.1439 0.765166 13.8561 0.765166 14.2954 1.2045L23.2954 10.2045C23.7348 10.6439 23.7348 11.3561 23.2954 11.7954L14.2954 20.7955C13.8561 21.2348 13.1439 21.2348 12.7045 20.7955C12.2652 20.3561 12.2652 19.6439 12.7045 19.2045L19.7839 12.125H1.5C0.878685 12.125 0.375 11.6213 0.375 11C0.375 10.3787 0.878685 9.875 1.5 9.875H19.7839L12.7045 2.79549C12.2652 2.35616 12.2652 1.64384 12.7045 1.2045Z" fill="#101010"/>
                </svg>
              </a>
            </div>
            <div className="services__item">
              <p className="services__item-text">Генеральный подряд</p>
              <a className="services__item-link item-link" href="#">
                <p className="item-link__text">Подробнее</p>
                <svg width="24" height="22" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M12.7045 1.2045C13.1439 0.765166 13.8561 0.765166 14.2954 1.2045L23.2954 10.2045C23.7348 10.6439 23.7348 11.3561 23.2954 11.7954L14.2954 20.7955C13.8561 21.2348 13.1439 21.2348 12.7045 20.7955C12.2652 20.3561 12.2652 19.6439 12.7045 19.2045L19.7839 12.125H1.5C0.878685 12.125 0.375 11.6213 0.375 11C0.375 10.3787 0.878685 9.875 1.5 9.875H19.7839L12.7045 2.79549C12.2652 2.35616 12.2652 1.64384 12.7045 1.2045Z" fill="#101010"/>
                </svg>
              </a>
            </div>
            <div className="services__item">
              <p className="services__item-text">Ландшафный дизайн</p>
              <a className="services__item-link item-link" href="#">
                <p className="item-link__text">Подробнее</p>
                <svg width="24" height="22" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M12.7045 1.2045C13.1439 0.765166 13.8561 0.765166 14.2954 1.2045L23.2954 10.2045C23.7348 10.6439 23.7348 11.3561 23.2954 11.7954L14.2954 20.7955C13.8561 21.2348 13.1439 21.2348 12.7045 20.7955C12.2652 20.3561 12.2652 19.6439 12.7045 19.2045L19.7839 12.125H1.5C0.878685 12.125 0.375 11.6213 0.375 11C0.375 10.3787 0.878685 9.875 1.5 9.875H19.7839L12.7045 2.79549C12.2652 2.35616 12.2652 1.64384 12.7045 1.2045Z" fill="#101010"/>
                </svg>
              </a>
            </div>
            <div className="services__item">
              <p className="services__item-text">Девелоперам</p>
              <a className="services__item-link item-link" href="#">
                <p className="item-link__text">Подробнее</p>
                <svg width="24" height="22" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M12.7045 1.2045C13.1439 0.765166 13.8561 0.765166 14.2954 1.2045L23.2954 10.2045C23.7348 10.6439 23.7348 11.3561 23.2954 11.7954L14.2954 20.7955C13.8561 21.2348 13.1439 21.2348 12.7045 20.7955C12.2652 20.3561 12.2652 19.6439 12.7045 19.2045L19.7839 12.125H1.5C0.878685 12.125 0.375 11.6213 0.375 11C0.375 10.3787 0.878685 9.875 1.5 9.875H19.7839L12.7045 2.79549C12.2652 2.35616 12.2652 1.64384 12.7045 1.2045Z" fill="#101010"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="instagram">
        <div className="container-fluid">
          <h3 className="instagram__title title">Instagram
            <a className="instagram__title-link" href="#">
              <svg width="126" height="126" viewBox="0 0 126 126" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.13401 113.563L101.124 14.5715H44.4284C40.4047 14.5715 37.1426 11.3095 37.1426 7.28574C37.1426 3.262 40.4047 0 44.4284 0H118.714C122.738 0 126 3.262 126 7.28574V81.5716C126 85.5954 122.738 88.8574 118.714 88.8574C114.691 88.8574 111.429 85.5954 111.429 81.5716V24.8751L12.4369 123.866C9.59151 126.711 4.97935 126.711 2.13401 123.866C-0.711335 121.021 -0.711335 116.408 2.13401 113.563Z" fill="#101010"/>
              </svg>
            </a>
          </h3>
          <div className="instagram-slider">
            <div className="instagram-slider__item">
              <img className="instagram-slider__item-img" src="images/instagram-1.jpg" alt=""/>
            </div>
            <div className="instagram-slider__item">
              <img className="instagram-slider__item-img" src="images/instagram-2.jpg" alt=""/>
            </div>
            <div className="instagram-slider__item">
              <img className="instagram-slider__item-img" src="images/instagram-3.jpg" alt=""/>
            </div>
            <div className="instagram-slider__item">
              <img className="instagram-slider__item-img" src="images/instagram-4.jpg" alt=""/>
            </div>
            <div className="instagram-slider__item">
              <img className="instagram-slider__item-img" src="images/instagram-5.jpg" alt=""/>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
export default Home
