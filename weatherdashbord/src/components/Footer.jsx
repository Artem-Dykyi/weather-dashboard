import React from "react";
import s from "../styles/Footer.module.scss";
import c from "../styles/Container.module.scss";

import facebookIcon from "../image/facebook.png"
import whatsappIcon from "../image/whatsapp.png"
import instIcon from "../image/instagram.png"
import logoIcon from "../image/logo.png"

export function Footer() {
  return (
    <footer className={s.footer} id="footer">
      <div className={c.container}>
        <div className={s.footer__wrapper}>
          <div className={s.footer__box}>
            <div className={s.footer__sub_box}>
              <img src={logoIcon} alt="" className={s.footer__logo} />

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
                <a href="https://www.instagram.com/">
                  <img
                    className={s.footer__list_cont_photo}
                    src={instIcon}
                    alt="instagram"
                  />
                </a>
              </li>
              <li className={s.footer__list_cont_item}>
                <a href="https://www.facebook.com/?locale=uk_UA">
                  <img
                    className={s.footer__list_cont_photo}
                    src={facebookIcon}
                    alt="facebook"
                  />
                </a>
              </li>
              <li className={s.footer__list_cont_item}>
                <a href="https://www.whatsapp.com/?lang=uk">
                  <img
                    className={s.footer__list_cont_photo}
                    src={whatsappIcon}
                    alt="watsap"
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
