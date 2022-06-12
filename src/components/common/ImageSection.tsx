import React from "react";
import { Link } from "react-router-dom";
import { ArrRight } from "./ArrRight";

type ImageSectionPropsType = {
  img: string,
  name: string,
  to: string
  imgLeft?: boolean
}

export const ImageSection: React.FC<ImageSectionPropsType> = ({ img, name, to, imgLeft=false }) => {
  return (
    <div className="image-section">
      <div className="container-fluid">
        <div className={imgLeft ? "image-section__inner-left" : "image-section__inner"}>
          {imgLeft && <div className="image-section__img">
            <img src={img} alt="" />
          </div>}
          <div className="image-section__info">
            <p className="image-section__info-name">{name}</p>
            <Link to={to} className="section__link">
              Подробнее

              <ArrRight />
            </Link>
          </div>
          {!imgLeft && <div className="image-section__img">
            <img src={img} alt="" />
          </div>}
        </div>
      </div>
    </div>
  );
};
