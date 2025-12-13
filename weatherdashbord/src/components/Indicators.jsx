import React, { useEffect, useState } from "react";
import s from "../styles/Indicators.module.scss";
import c from "../styles/Container.module.scss";
import axios from "axios";

import temperIcon from "../image/temperfeel.png"
import humidityIcon from "../image/humidity.png"
import presserIcon from "../image/presser.png"
import windowSpeedIcon from "../image/windowSPeed.png"
import visibilityIcon from "../image/visibili.png"



export function Indicator({lat, lon}){
    const [indecator, setIndecator] = useState(null)

    // const API_Key = "7417c098ce07759ed28f47a87c89cc13"

    useEffect(()=>{
        async function fetchIndicator(){
            const res = await axios.get(
                `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=7417c098ce07759ed28f47a87c89cc13`
            )
            // https://api.openweathermap.org/data/2.5/forecast?lat=45&lon=34&appid=0b53411ffccdebc41af3375c263ec271&units=metric

            setIndecator({
                feelLike: res.data.main.feels_like,
                minTemp:res.data.main.temp_min,
                maxTemp:res.data.main.temp_max,
                humidity: res.data.main.humidity,
                pressure: res.data.main.pressure,
                windSpeed: res.data.wind.speed,
                visibility: res.data.visibility
            });
        }

        fetchIndicator()
    },[lat, lon]);

    if (!indecator) return <p>Loading...</p>;

    return(<>
        <section className={s.indicator}>
            <div className={c.container}>
                <ul className={s.indicator__box}>
                    <li className={s.indicator__item}>
                        <h2 className={s.indicator__title}>Feels like</h2>
                        <p className={s.indicator__text}>{indecator.feelLike}</p>
                        <img src={temperIcon} alt="#" className={s.indicator__photo}/>
                    </li>
                    <li className={s.indicator__item}>
                        <h2 className={s.indicator__title}>Min ℃</h2>
                        <p className={s.indicator__text}>{indecator.minTemp}℃</p>
                        <h2 className={s.indicator__title}>Max ℃</h2>
                        <p className={s.indicator__text}>{indecator.maxTemp}℃</p>
                    </li>
                    <li className={s.indicator__item}>
                        <h2 className={s.indicator__title}>Humidity</h2>
                        <p className={s.indicator__text}>{indecator.humidity}%</p>
                        <img src={humidityIcon} alt="#" className={s.indicator__photo}/>
                    </li>
                    <li className={s.indicator__item}>
                        <h2 className={s.indicator__title}>Pressure</h2>
                        <p className={s.indicator__text}>{indecator.pressure} Pa</p>
                        <img src={presserIcon} alt="#" className={s.indicator__photo}/>
                    </li>
                    <li className={s.indicator__item}>
                        <h2 className={s.indicator__title}>Wind speed</h2>
                        <p className={s.indicator__text}>{indecator.windSpeed} m/s</p>
                        <img src={windowSpeedIcon} alt="#" className={s.indicator__photo}/>
                    </li>
                    <li className={s.indicator__item}>
                        <h2 className={s.indicator__title}>Visibility</h2>
                        <p className={s.indicator__text}>{indecator.visibility}</p>
                        <img src={visibilityIcon} alt="#" className={s.indicator__photo}/>
                    </li>
                </ul>
            </div>
        </section>
    </>)
}

