import React from 'react'

const Project = () => {
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
          <div className="instagram-slider">
            <div className="instagram-slider__item">
              <img className="instagram-slider__item-img" src="images/projects/project-slide-1.jpg" alt=""/>
            </div>
            <div className="instagram-slider__item">
              <img className="instagram-slider__item-img" src="images/projects/project-slide-2.jpg" alt=""/>
            </div>
            <div className="instagram-slider__item">
              <img className="instagram-slider__item-img" src="images/projects/project-slide-3.jpg" alt=""/>
            </div>
            <div className="instagram-slider__item">
              <img className="instagram-slider__item-img" src="images/projects/project-slide-4.jpg" alt=""/>
            </div>
            <div className="instagram-slider__item">
              <img className="instagram-slider__item-img" src="images/projects/project-slide-5.jpg" alt=""/>
            </div>
          </div>
        </div>
      </section>

      <div className="project-images">
        <div className="container-fluid">
          <picture className="project-images__bg">
            <source srcSet="images/content/top-bg.jpg" type="image/jpeg" media="(min-width: 375px)" />
            <source srcSet="images/top-bg-mobile.jpg" type="image/jpeg" media="(max-width: 375px)" />
            <img src="images/content/top-bg.jpg" alt=""/>
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
                <img src="images/project/project-1.jpg" alt=""/>
              </div>
              <div className="project-images__slider-item">
                <img src="images/project/project-2.jpg" alt=""/>
              </div>
              <div className="project-images__slider-item">
                <img src="images/project/project-3.jpg" alt=""/>
              </div>
              <div className="project-images__slider-item">
                <img src="images/project/project-4.jpg" alt=""/>
              </div>
              <div className="project-images__slider-item">
                <img src="images/project/project-5.jpg" alt=""/>
              </div>
            </div>
            <div className="project-images__slider">
              <div className="project-images__slider-item">
                <img src="images/project/project-6.jpg" alt=""/>
              </div>
              <div className="project-images__slider-item">
                <img src="images/project/project-7.jpg" alt=""/>
              </div>
              <div className="project-images__slider-item">
                <img src="images/project/project-8.jpg" alt=""/>
              </div>
              <div className="project-images__slider-item">
                <img src="images/project/project-9.jpg" alt=""/>
              </div>
              <div className="project-images__slider-item">
                <img src="images/project/project-10.jpg" alt=""/>
              </div>
            </div>
        </div>
      </div>
      <div className="section-links">
        <div className="container">
          <div className="section__links">
            <div className="section__links-wrapper">
              <a href="#" className="section__link">
                Название след. проекта
                <svg className="section__link-svg" width="50" height="44" viewBox="0 0 50 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M26.4875 1.32061C27.4151 0.393129 28.9186 0.393129 29.8461 1.32061L48.8461 20.3207C49.7736 21.2482 49.7736 22.7518 48.8461 23.6793L29.8461 42.6793C28.9186 43.6068 27.4151 43.6068 26.4875 42.6793C25.56 41.7518 25.56 40.2482 26.4875 39.3207L41.4329 24.375H2.8335C1.52183 24.375 0.458496 23.3116 0.458496 22C0.458496 20.6884 1.52183 19.625 2.8335 19.625H41.4329L26.4875 4.67937C25.56 3.75189 25.56 2.2481 26.4875 1.32061Z" fill="#DCDCDC"/>
               </svg>
              </a>
            </div>
            <div className="section__links-wrapper">
              <a href="#" className="section__link-left">
                <svg className="section__link-svg" width="50" height="44" viewBox="0 0 50 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M23.5125 1.32061C22.5849 0.393129 21.0814 0.393129 20.1539 1.32061L1.15389 20.3207C0.226372 21.2482 0.226372 22.7518 1.15389 23.6793L20.1539 42.6793C21.0814 43.6068 22.5849 43.6068 23.5125 42.6793C24.44 41.7518 24.44 40.2482 23.5125 39.3207L8.56705 24.375H47.1665C48.4782 24.375 49.5415 23.3116 49.5415 22C49.5415 20.6884 48.4782 19.625 47.1665 19.625H8.56705L23.5125 4.67937C24.44 3.75189 24.44 2.2481 23.5125 1.32061Z" fill="#DCDCDC"/>
                </svg>
                Название пред. проекта
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Project
