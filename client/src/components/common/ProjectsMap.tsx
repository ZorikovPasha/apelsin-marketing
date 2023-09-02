import React from "react";
import { Link } from "react-router-dom";
import Pin from "../../images/location.svg";
import { ProjectType } from "../../types";

type ProjectsMapPropsType = {
  titleClass?: string
  projects: ProjectType[] | null
};

export const ProjectsMap: React.FC<ProjectsMapPropsType> = ({ titleClass = "", projects }) => {
  const [activeCard, setActiveCard] = React.useState<number | null>(null);

  const onShowCard = (id: number) => {
    setActiveCard(activeCard === id ? null : id);
  };
  
  return (
    <section className="projects">
      <div className="container-fluid">
        <h3 className={`${titleClass} title`}>География проектов</h3>

        <div className="projects-map">
          {projects?.map(({ id, location, name, pics }, idx) => (
            <div className={`projects-map__circle projects-map__circle--${idx + 1}`} key={id}>
              <div className="projects-map__circle-inner">
                <img src={Pin} alt="" onClick={onShowCard.bind(null, id)} />
                <div className={`projects-map__card projects-map__card--1 ${activeCard === id ? "active" : ""}`}>
                  <div className="projects-map__card-box" style={{ backgroundImage: `url(${pics.full})` }}>
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
