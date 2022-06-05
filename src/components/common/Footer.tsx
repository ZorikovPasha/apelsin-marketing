import React from "react";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="container-fluid">
        <h3 className="footer__title">Всегда на связи</h3>
      </div>
      <div className="container">
        <form className="footer__form">
          <div className="footer__form-line">
            <div className="footer__form-box">
              <label className="footer__form-label">Ваше имя</label>
              <input className="footer__form-input" type="text" placeholder="Константин Валуйкин" />
            </div>
            <div className="footer__form-box">
              <label className="footer__form-label">Телефон</label>
              <input className="footer__form-input" type="tel" placeholder="+7 (999) 999-99-99" />
            </div>
          </div>
          <label className="footer__form-label">Сообщение</label>
          <input
            className="footer__form-input footer__form-message"
            type="text"
            placeholder="Описание проекта, вопросы по организации работы и другие контакты для связи"
          />
          <button className="footer__form-btn" type="submit">
            Отправить
          </button>
          <p className="footer__form-term">Нажимая на кнопку, вы даёте согласие на обработку персональных данных</p>
        </form>
        <div className="footer__bottom">
          <div className="footer__bottom-box">
            <p className="footer__bottom-text">Офис</p>
            <a className="footer__bottom-text" href="#">
              Москва, Рябиновая, 41 к.1 стр. 1 офис 630
            </a>
          </div>
          <div className="footer__bottom-box">
            <p className="footer__bottom-text">Email</p>
            <a className="footer__bottom-text" href="mailto:info@apelsindesign.ru">
              info@apelsindesign.ru
            </a>
          </div>
          <div className="footer__bottom-box">
            <p className="footer__bottom-text">Соц. сети</p>
            <ul className="footer__bottom-list footer-list">
              <li className="footer-list__item">
                <a className="footer-list__link" href="#">
                  <img src="images/fb.svg" alt="" />
                </a>
              </li>
              <li className="footer-list__item">
                <a className="footer-list__link" href="#">
                  <img src="images/inst.svg" alt="" />
                </a>
              </li>
              <li className="footer-list__item">
                <a className="footer-list__link" href="#">
                  <img src="images/yt.svg" alt="" />
                </a>
              </li>
            </ul>
          </div>
          <div className="footer__bottom-box footer__bottom-right">
            <p className="footer__bottom-text">Политика конфиденциальности</p>
            <p className="footer__bottom-text">© 2021, Все права защищены</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
