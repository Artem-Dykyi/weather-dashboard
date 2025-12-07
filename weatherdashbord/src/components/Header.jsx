import React from "react";
import s from "../styles/Header.module.scss";
import c from "../styles/Container.module.scss";

export function Header({ onClick, currentUser }) {
  return (
    <header className={s.header}>
      <div className={c.container}>
        <div className={s.header__main_box}>
          <img src="/image/logo.png" alt="" className={s.header__logo} />
          <a className={s.header__menu_text}>Menu</a>
          <div className={s.header__menu_box}>

          
          <div className={s.header__box}>
            <ul className={s.header__list}>
              <li className={s.header__list_item}>Who we are</li>
              <li className={s.header__list_item}>Contacts</li>
              <li className={s.header__list_item}>Menu</li>
            </ul>
          </div>
          <div className={s.header__prof_box}>
            {currentUser ? (
              <p className={s.header__user_name}>{currentUser}</p>
            ) : (
              <button className={s.header__btn} onClick={onClick}>
                Sign Up
              </button>
            )}

            <img src="/image/user.png" alt="" className={s.header__icon_prof} />
          </div>
          </div>
        </div>
      </div>
    </header>
  );
}
