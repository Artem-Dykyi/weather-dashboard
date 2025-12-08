import React from "react";
import { Cardssun } from "./Cardssun";

import c from "../styles/Container.module.scss";
import s from "../styles/CardssunList.module.scss";

export function CardssunList({ cities, onRemove, onSelectCity }) {
  const isSlider = cities.length > 3;

  return (
    // <section className={isSlider ? `${s.sunList} ${s.slider}` : `${s.sunList}`}>
    <section className={isSlider ? `${s.sunList} ${s.slider}` : `${s.sunList}`}>
        <div className={c.container}>
            <ul className={ isSlider ? `${s.sunList__wrapper } ${s.slider}` : `${s.sunList__wrapper }`} >
                {cities.map((city, index) => (
                <Cardssun 
                  key={index} 
                  city={city} 
                  onRemove={() => onRemove(city)} 
                  onSelectCity={onSelectCity}/>
                ))}
            </ul>
        </div>
    </section>
  );
}
