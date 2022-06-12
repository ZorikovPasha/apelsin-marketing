import React from "react";
import Yt from "../../images/yt.svg";
import Inst from "../../images/inst.svg";
import Fb from "../../images/fb.svg";
import { useForm } from "react-hook-form";
import { UserApiClient } from "../../api";

export type FormData = {
  name: string;
  phone: string;
  message: string;
};

export const Footer = () => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const onSubmit = handleSubmit((data) => {
    UserApiClient.sendRequest(data).then(res => reset())
  });

  return (
    <footer className="footer">
      <div className="container-fluid">
        <h3 className="footer__title" id="form-title">Всегда на связи</h3>
      </div>
      <div className="container">
        <form className="footer__form" onSubmit={onSubmit}>
          <div className="footer__form-line">
            <div className="footer__form-box">
              <label className="footer__form-label">Ваше имя</label>
              <input 
                className={`footer__form-input ${errors.name ? "footer__form-input--error": ""}`}
                type="text" 
                placeholder="Константин Валуйкин" 
                defaultValue=""
                {...register("name", { required: true })}
              />
            </div>
            <div className="footer__form-box">
              <label className="footer__form-label">Телефон</label>
              <input 
                className={`footer__form-input ${errors.phone ? "footer__form-input--error": ""}`}
                type="text" 
                placeholder="+7 (999) 999-99-99" 
                defaultValue=""
                {...register("phone", { required: true })}
              />
            </div>
          </div>
          <label className="footer__form-label">Сообщение</label>
          <input
            className={`footer__form-input footer__form-message`}
            type="text"
            defaultValue="Описание проекта, вопросы по организации работы и другие контакты для связи"
            placeholder=""
            {...register("message")}
          />
          <button className="footer__form-btn" type="submit">
            Отправить
          </button>
          <p className="footer__form-term">Нажимая на кнопку, вы даёте согласие на обработку персональных данных</p>
        </form>
        <div className="footer__bottom">
          <div className="footer__bottom-box">
            <p className="footer__bottom-text">Офис</p>
            <span className="footer__bottom-text">Москва, Рябиновая, 41 к.1 стр. 1 офис 630</span>
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
                <span className="footer-list__link">
                  <img src={Fb} alt="" />
                </span>
              </li>
              <li className="footer-list__item">
                <span className="footer-list__link">
                  <img src={Inst} alt="" />
                </span>
              </li>
              <li className="footer-list__item">
                <span className="footer-list__link">
                  <img src={Yt} alt="" />
                </span>
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
