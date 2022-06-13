import React from 'react'
import { useParams } from 'react-router-dom'
import { SectionLinks, AppSlider } from '../components'
import { IPageProps, ProjectType } from '../types'
import { useNavigate } from 'react-router-dom';

const Project: React.FC<IPageProps> = ({ projects }) => {
  const {id} = useParams();
  const navigate = useNavigate();
  const [currProject, setCurrProject] = React.useState<ProjectType | undefined>()
  const prevProj = React.useRef<ProjectType | undefined>()
  const nextProj = React.useRef<ProjectType | undefined>()
  
  const links = React.useRef([
    { link: "Название след. проекта", to: "/project/" + nextProj.current?.id, left: false },
    { link: "Название пред. проекта", to: "/project/" + prevProj.current?.id, left: true },
  ])

  React.useEffect(() => {
    if (!projects?.length) {
      return
    }

    const currProject = projects?.find(p => p.id === Number(id))
    prevProj.current = projects?.find(p => p.id + 1 === Number(id))  
    nextProj.current = projects?.find(p => p.id - 1 === Number(id))

    links.current[0].to = "/project/" + nextProj.current?.id
    links.current[1].to = "/project/" + prevProj.current?.id

    if (!currProject) {
      navigate("/")
    }
    
    setCurrProject(currProject)
  }, [projects, id])

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

  return (
    <>
      <section className="project-top">
        <div className="container">
          <h3 className="project-top__title title">{currProject?.name}</h3>
          <div className="project-top__inner">
            <div className="project-top__location">Локация: {currProject?.location}</div>
            <div className="project-top__metrage">Метраж: {currProject?.sqFoot} м2</div>
          </div>
          <div className="project-top__inner">
            <p className="project-top__text">
              {currProject?.texts[0]}
            </p>
            <p className="project-top__text">
              {currProject?.texts[1]}
            </p>
          </div>
        </div>
      </section>

      <div className="project-images">
        <div className="container-fluid">
          <div className="project-images__bg">
            <img className="project-images__bg" src={"/" + currProject?.pics?.full} />
          </div>
          <div className="project-images__images">
            <div className="project-images__img">
              <img src={"/" + currProject?.pics.previews[0]} alt=""/>
            </div>
            <div className="project-images__img">
            <img src={"/" + currProject?.pics.previews[1]} alt=""/>
            </div>
          </div>
          <div className="project-images__bg">
            <img src={"/" + currProject?.pics.previews[2]} />
          </div>
            <AppSlider rootClass="project-images__slider" hasArrows={false} settings={imagesSliderSettings}>
              {currProject?.pics.slider.slice(0,5).map((img) => (
                <div className="project-images__slider-item" key={img}>
                  <img src={"/" + img} alt=""/>
                </div>
              ))}
            </AppSlider>

            <AppSlider rootClass="project-images__slider" hasArrows={false} settings={imagesSliderSettings}>
              {currProject?.pics.slider.slice(5).map((img) => (
                <div className="project-images__slider-item" key={img}>
                  <img src={"/" + img} alt=""/>
                </div>
              ))}
            </AppSlider>
        </div>
      </div>

      <SectionLinks items={links.current} hasNext={!!nextProj.current} hasPrev={!!prevProj.current} />
    </>
  )
}

export default Project
