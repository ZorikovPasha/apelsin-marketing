import React from "react";

export const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__inner">
          <a className="header__logo" href="#">
            <img src="images/header-logo.svg" alt="" />
          </a>
          <nav className="menu">
            <ul className="menu__list">
              <li className="menu__list-item">
                <a className="menu__list-link" href="services.html">
                  Услуги
                </a>
              </li>
              <li className="menu__list-item">
                <a className="menu__list-link" href="projects.html">
                  Проекты
                </a>
              </li>
              <li className="menu__list-item">
                <a className="menu__list-link" href="press.html">
                  Отзывы
                </a>
              </li>
              <li className="menu__list-item">
                <a className="menu__list-link" href="press.html">
                  Пресса
                </a>
              </li>
              <li className="menu__list-item">
                <a className="menu__list-link" href="about.html">
                  О нас
                </a>
              </li>
              <li className="menu__list-item">
                <a className="menu__list-link" href="about.html">
                  Блог
                </a>
              </li>
            </ul>
          </nav>
          <nav className="user-nav">
            <a className="user-nav__tel" href="tel:+74951222286">
              +7 (495) 122-22-86
            </a>
            <a className="user-nav__btn" href="#">
              Обратный звонок
            </a>
            <a className="user-nav__contacts" href="#">
              Контакты
            </a>
            <ul className="user-nav__social">
              <li className="user-nav__social-item">
                <a className="user-nav__social-link" href="#">
                  <img src="images/fb.svg" alt="" />
                </a>
              </li>
              <li className="user-nav__social-item">
                <a className="user-nav__social-link" href="#">
                  <img src="images/inst.svg" alt="" />
                </a>
              </li>
              <li className="user-nav__social-item">
                <a className="user-nav__social-link" href="#">
                  <img src="images/yt.svg" alt="" />
                </a>
              </li>
            </ul>
          </nav>
          <div className="menu-btn">
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    </header>
  );
};
