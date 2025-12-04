import React from "react";
import s from "../styles/Footer.module.scss";
import c from "../styles/Container.module.scss";

export function Footer() {
  return (
    <footer className={s.footer}>
      <div className={c.container}>
        <div className={s.footer__wrapper}>
          <div className={s.footer__box}>
            <div className={s.footer__sub_box}>
              <img src="/image/logo.png" alt="" className={s.footer__logo} />

              <div className={s.footer__sub_wrap}>
                <h2 className={s.footer_title}>Address</h2>

                <ul className={s.footer__list_adres}>
                  <li className={s.footer__list_adr_item}>Svobody str. 35</li>
                  <li className={s.footer__list_adr_item}>Kyiv</li>
                  <li className={s.footer__list_adr_item}>Ukraine</li>
                </ul>
              </div>
            </div>
          </div>

          <div className={s.footer__box_contact}>
            <h2 className={s.footer__title}>Contact us</h2>
            <ul className={s.footer__list_contact}>
              <li className={s.footer__list_cont_item}>
                <img
                  className={s.footer__list_cont_photo}
                  src="/image/instagram.png"
                  alt="instagram"
                />
              </li>
              <li className={s.footer__list_cont_item}>
                <img
                  className={s.footer__list_cont_photo}
                  src="/image/facebook.png"
                  alt="facebook"
                />
              </li>
              <li className={s.footer__list_cont_item}>
                <img
                  className={s.footer__list_cont_photo}
                  src="/image/whatsapp.png"
                  alt="watsap"
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
