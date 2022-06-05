import React from "react";

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
          <a className="mob-menu__list-btn" href="#">
            Обратный звонок
          </a>
        </li>
        <li className="mob-menu__list-item">
          <a className="mob-menu__list-contacts" href="#">
            Контакты
          </a>
        </li>
        <li className="mob-menu__list-item item-list">
          <ul className="item-list__social">
            <li className="item-list__social-item">
              <a className="item-list__social-link" href="#">
                <img src="images/fb.svg" alt="" />
              </a>
            </li>
            <li className="item-list__social-item">
              <a className="item-list__social-link" href="#">
                <img src="images/inst.svg" alt="" />
              </a>
            </li>
            <li className="item-list__social-item">
              <a className="item-list__social-link" href="#">
                <img src="images/yt.svg" alt="" />
              </a>
            </li>
          </ul>
        </li>
        <li className="mob-menu__list-item mob-menu__list--2">
          <a className="mob-menu__list-link " href="services.html">
            Услуги
          </a>
        </li>
        <li className="mob-menu__list-item mob-menu__list--2">
          <a className="mob-menu__list-link" href="projects.html">
            Проекты
          </a>
        </li>
        <li className="mob-menu__list-item mob-menu__list--2">
          <a className="mob-menu__list-link" href="press.html">
            Отзывы
          </a>
        </li>
        <li className="mob-menu__list-item mob-menu__list--2">
          <a className="mob-menu__list-link" href="press.html">
            Пресса
          </a>
        </li>
        <li className="mob-menu__list-item mob-menu__list--2">
          <a className="mob-menu__list-link" href="about.html">
            О нас
          </a>
        </li>
        <li className="mob-menu__list-item mob-menu__list--2">
          <a className="mob-menu__list-link" href="about.html">
            Блог
          </a>
        </li>
      </ul>
    </div>
  );
};
