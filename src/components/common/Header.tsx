import React from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../../utils/const";

export const Header = () => {
  const items = [
    { to: ROUTES.Services, text: "Услуги" },
    { to: ROUTES.Projects, text: "Проекты" },
    { to: ROUTES.Press, text: "Отзывы" },
    { to: ROUTES.Press, text: "Пресса" },
    { to: ROUTES.About, text: "О нас" },
    { to: ROUTES.Projects, text: "Блог" },
  ]

  return (
    <header className="header">
      <div className="container">
        <div className="header__inner">
          <Link className="header__logo" to={ROUTES.Home}>
            <img src="images/header-logo.svg" alt="" />
          </Link>
          <nav className="menu">
            <ul className="menu__list">
              {items.map(({ to, text }) => (
                <li className="menu__list-item" key={text}>
                  <Link className="menu__list-link" to={to}>
                    {text}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <nav className="user-nav">
            <a className="user-nav__tel" href="tel:+74951222286">
              +7 (495) 122-22-86
            </a>
            <button className="user-nav__btn">
              Обратный звонок
            </button>
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
