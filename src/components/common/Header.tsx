import React from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../../utils/const";
import Logo from "../../images/header-logo.svg" 
import Yt from "../../images/yt.svg"
import Inst from "../../images/inst.svg"
import Fb from "../../images/fb.svg"

interface IHeaderProps {
  openMobMenu: React.Dispatch<React.SetStateAction<boolean>>
  menuButtonRef: React.MutableRefObject<HTMLButtonElement | null>
}

export const Header: React.FC<IHeaderProps> = ({ openMobMenu, menuButtonRef }) => {
  const items = [
    { to: ROUTES.Services, text: "Услуги" },
    { to: ROUTES.Projects, text: "Проекты" },
    { to: ROUTES.DesignProject, text: "Отзывы" },
    { to: ROUTES.Press, text: "Пресса" },
    { to: ROUTES.About, text: "О нас" },
    { to: ROUTES.Projects, text: "Блог" },
  ]

  const openMenu = () => { 
    document.body.classList.add("lock")
    menuButtonRef?.current?.classList.add("active")
    openMobMenu(true) 
  }

  return (
    <header className="header">
      <div className="container">
        <div className="header__inner">
          <Link className="header__logo" to={ROUTES.Home}>
            <img src={Logo} alt="" />
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
            <a className="user-nav__btn" href="#form-title">
              Обратный звонок
            </a>
            <ul className="user-nav__social">
              <li className="user-nav__social-item">
                <span className="user-nav__social-link" >
                  <img src={Fb} alt="" />
                </span>
              </li>
              <li className="user-nav__social-item">
                <span className="user-nav__social-link">
                  <img src={Inst} alt="" />
                </span>
              </li>
              <li className="user-nav__social-item">
                <span className="user-nav__social-link">
                  <img src={Yt} alt="" />
                </span>
              </li>
            </ul>
          </nav>
          <button className="menu-btn" ref={menuButtonRef} onClick={openMenu}>
            <div></div>
            <div></div>
            <div></div>
          </button>
        </div>
      </div>
    </header>
  );
};
