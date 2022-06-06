import React from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../../utils/const";
import Fb from "../../images/fb.svg"
import Inst from "../../images/inst.svg"
import Yt from "../../images/yt.svg"

export const MobMenu = () => {
  return (
    <div className="mob-menu">
      <ul className="mob-menu__list">
        <li className="mob-menu__list-item">
          <a className="mob-menu__list-tel" href="tel:+74951222286">
            +7 (495) 122-22-86
          </a>
        </li>
        <li className="mob-menu__list-item">
          <button className="mob-menu__list-btn">
            Обратный звонок
          </button>
        </li>
        <li className="mob-menu__list-item">
          <span className="mob-menu__list-contacts">
            Контакты
          </span>
        </li>
        <li className="mob-menu__list-item item-list">
          <ul className="item-list__social">
            <li className="item-list__social-item">
              <span className="item-list__social-link">
                <img src={Fb} alt="" />
              </span>
            </li>
            <li className="item-list__social-item">
              <span className="item-list__social-link">
                <img src={Inst} alt="" />
              </span>
            </li>
            <li className="item-list__social-item">
              <span className="item-list__social-link">
                <img src={Yt} alt="" />
              </span>
            </li>
          </ul>
        </li>
        <li className="mob-menu__list-item mob-menu__list--2">
          <Link className="mob-menu__list-link " to={ROUTES.Services}>
            Услуги
          </Link>
        </li>
        <li className="mob-menu__list-item mob-menu__list--2">
          <Link className="mob-menu__list-link" to={ROUTES.Projects}>
            Проекты
          </Link>
        </li>
        <li className="mob-menu__list-item mob-menu__list--2">
          <Link className="mob-menu__list-link" to={ROUTES.Press}>
            Отзывы
          </Link>
        </li>
        <li className="mob-menu__list-item mob-menu__list--2">
          <Link className="mob-menu__list-link" to={ROUTES.Press}>
            Пресса
          </Link>
        </li>
        <li className="mob-menu__list-item mob-menu__list--2">
          <Link className="mob-menu__list-link" to={ROUTES.About}>
            О нас
          </Link>
        </li>
        <li className="mob-menu__list-item mob-menu__list--2">
          <Link className="mob-menu__list-link" to={ROUTES.About}>
            Блог
          </Link>
        </li>
      </ul>
    </div>
  );
};
