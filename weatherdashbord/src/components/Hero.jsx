import React from "react";
import s from "../styles/Hero.module.scss";
import c from "../styles/Container.module.scss";

export function Hero() {
  return (
    <section className={s.hero}>
      <div className={c.container}>
        <div className={s.hero__main_box}>
          <h1 className={s.hero__title}>Weather dashboard</h1>
          <div className={s.hero__box}>
            <p className={s.hero__text}>
              Create your personal list of favorite cities and always be aware
              of the weather.
            </p>
            <p className={s.hero__month}>October 2023 Friday, 13th</p>
          </div>
          <div className={s.hero__search_box}>
            <input
              type="button"
              value=""
              placeholder="Search location..."
              className={s.hero__input}
            />
            <button className={s.hero__search_btn}>svg</button>
          </div>
        </div>
      </div>
    </section>
  );
}
