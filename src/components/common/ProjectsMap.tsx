import React from 'react'

type ProjectsMapPropsType = {
  titleClass?: string
}

export const ProjectsMap: React.FC<ProjectsMapPropsType> = ({ titleClass }) => {


  return (
    <section className="projects">
    <div className="container-fluid">
      <h3 className={`${titleClass} title`}>География проектов</h3>
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
  )
}
