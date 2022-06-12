import React from "react";
import { Link } from "react-router-dom";
import Pin from "../../images/location.svg";
import Card1 from "../../images/projects-card.jpg";
import Card2 from "../../images/projects-card-2.jpg";
import Card3 from "../../images/projects-card-3.jpg";
import Card4 from "../../images/projects-card-4.jpg";

type ProjectsMapPropsType = {
  titleClass?: string;
};

export const ProjectsMap: React.FC<ProjectsMapPropsType> = ({ titleClass = "" }) => {
  const projects = [
    { id: 1, location: "Флорида", name: "Загородный дом в посёлке Комильфо", img: Card1, sqFoot: 336.2 },
    { id: 2, location: "Испания", name: "Дом в стиле лофт на берегу моря", img: Card2, sqFoot: 650 },
    { id: 3, location: "Греция", name: "Вилла на побережье", img: Card3, sqFoot: 856 },
    { id: 4, location: "Россия", name: "Усадьба чиновника", img: Card4, sqFoot: 540 },
  ];

  const [activeCard, setActiveCard] = React.useState<number | null>(null);

  const onShowCard = (id: number) => {
    setActiveCard(activeCard === id ? null : id);
  };

  return (
    <section className="projects">
      <div className="container-fluid">
        <h3 className={`${titleClass} title`}>География проектов</h3>

        <div className="projects-map">
          {projects.map(({ id, location, name, img }, idx) => (
            <div className={`projects-map__circle projects-map__circle--${idx + 1}`} key={id}>
              <div className="projects-map__circle-inner">
                <img src={Pin} alt="" onClick={onShowCard.bind(null, id)} />
                <div className={`projects-map__card projects-map__card--1 ${activeCard === id ? "active" : ""}`}>
                  <div className="projects-map__card-box" style={{ backgroundImage: `url(${img})` }}>
                    <div className="projects-map__card-location">{location}</div>
                    <div className="projects-map__card-name">{name}</div>
                    <Link to={`projects/${id}`} className="projects-map__card-link">
                      Подробнее
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
