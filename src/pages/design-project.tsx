import React from 'react'

export const DesignProject = () => {
  return (
    <>
      <section className="design-top">
        <div className="container-fluid">
          <h3 className="design-top__title">Дизайн-проект</h3>
          <p className="design-top__text">Дизайн-проект интерьера позволяет организовать пространство таким образом, чтобы каждый сантиметр площади был продуман с точки зрения вашего комфорта и функциональности</p>
          <div className="design-top__bg">
            <img src="images/projects/projects-top-bg.jpg" alt=""/>
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
            <img src="images/projects/projects-items-bg.jpg" alt=""/>
          </div>
        </div>
        <div className="container">
          <div className="section__box">
            <p className="section__box-text">Дом охотника</p>
            <a href="project.html" className="section__link">
              Подробнее
              <svg className="section__link-svg" width="50" height="44" viewBox="0 0 50 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M26.4875 1.32061C27.4151 0.393129 28.9186 0.393129 29.8461 1.32061L48.8461 20.3207C49.7736 21.2482 49.7736 22.7518 48.8461 23.6793L29.8461 42.6793C28.9186 43.6068 27.4151 43.6068 26.4875 42.6793C25.56 41.7518 25.56 40.2482 26.4875 39.3207L41.4329 24.375H2.8335C1.52183 24.375 0.458496 23.3116 0.458496 22C0.458496 20.6884 1.52183 19.625 2.8335 19.625H41.4329L26.4875 4.67937C25.56 3.75189 25.56 2.2481 26.4875 1.32061Z" fill="#DCDCDC"/>
             </svg>
            </a>
          </div>
        </div>
      </section>

      <div className="image-section">
        <div className="container-fluid">
          <div className="image-section__inner">
            <div className="image-section__info">
              <p className="image-section__info-name">Современный лофт с элементами ар деко</p>
              <a href="#" className="section__link">
                Подробнее
                <svg className="section__link-svg" width="50" height="44" viewBox="0 0 50 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M26.4875 1.32061C27.4151 0.393129 28.9186 0.393129 29.8461 1.32061L48.8461 20.3207C49.7736 21.2482 49.7736 22.7518 48.8461 23.6793L29.8461 42.6793C28.9186 43.6068 27.4151 43.6068 26.4875 42.6793C25.56 41.7518 25.56 40.2482 26.4875 39.3207L41.4329 24.375H2.8335C1.52183 24.375 0.458496 23.3116 0.458496 22C0.458496 20.6884 1.52183 19.625 2.8335 19.625H41.4329L26.4875 4.67937C25.56 3.75189 25.56 2.2481 26.4875 1.32061Z" fill="#DCDCDC"/>
               </svg>
              </a>
            </div>
            <div className="image-section__img">
              <img src="images/projects/project-1.jpg" alt=""/>
            </div>
          </div>
        </div>
      </div>
      <div className="image-section">
        <div className="container-fluid">
          <div className="image-section__inner-left">
            <div className="image-section__img">
              <img src="images/projects/project-2.jpg" alt=""/>
            </div>
            <div className="image-section__info">
              <p className="image-section__info-name">Квартира в стиле лофт</p>
              <a href="#" className="section__link">
                Подробнее
                <svg className="section__link-svg" width="50" height="44" viewBox="0 0 50 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M26.4875 1.32061C27.4151 0.393129 28.9186 0.393129 29.8461 1.32061L48.8461 20.3207C49.7736 21.2482 49.7736 22.7518 48.8461 23.6793L29.8461 42.6793C28.9186 43.6068 27.4151 43.6068 26.4875 42.6793C25.56 41.7518 25.56 40.2482 26.4875 39.3207L41.4329 24.375H2.8335C1.52183 24.375 0.458496 23.3116 0.458496 22C0.458496 20.6884 1.52183 19.625 2.8335 19.625H41.4329L26.4875 4.67937C25.56 3.75189 25.56 2.2481 26.4875 1.32061Z" fill="#DCDCDC"/>
               </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="image-section">
        <div className="container-fluid">
          <div className="image-section__inner">
            <div className="image-section__info">
              <p className="image-section__info-name">Интерьер с яркими акцентами</p>
              <a href="#" className="section__link">
                Подробнее
                <svg className="section__link-svg" width="50" height="44" viewBox="0 0 50 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M26.4875 1.32061C27.4151 0.393129 28.9186 0.393129 29.8461 1.32061L48.8461 20.3207C49.7736 21.2482 49.7736 22.7518 48.8461 23.6793L29.8461 42.6793C28.9186 43.6068 27.4151 43.6068 26.4875 42.6793C25.56 41.7518 25.56 40.2482 26.4875 39.3207L41.4329 24.375H2.8335C1.52183 24.375 0.458496 23.3116 0.458496 22C0.458496 20.6884 1.52183 19.625 2.8335 19.625H41.4329L26.4875 4.67937C25.56 3.75189 25.56 2.2481 26.4875 1.32061Z" fill="#DCDCDC"/>
               </svg>
              </a>
            </div>
            <div className="image-section__img">
              <img src="images/projects/project-3.jpg" alt=""/>
            </div>
          </div>
        </div>
      </div>

      <div className="design-info">
        <div className="container">
          <p className="design-info__text">При составлении ТЗ мы зафиксируем все ваши пожелания, учтём нюансы и предусмотрим возможные сложности. 
            В результате работы с нами вы получите оптимальное интерьерное решение. Мы гарантируем эксклюзивность, соблюдение всех стандартов качества и оговорённых сроков.
          </p>
        </div>
      </div>

      <div className="section-link">
        <div className="container">
          <div className="section__links">
            <div className="section__links-wrapper">
              <a href="#" className="section__link">
                Коммерческая недвижимость
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
                Ландшафный дизайн
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default DesignProject
