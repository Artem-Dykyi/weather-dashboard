import React, { useEffect, useState } from "react";
import s from "../styles/Indicators.module.scss";
import c from "../styles/Container.module.scss";
import axios from "axios";

export function Indicator(){
    const [indecator, setIndecator] = useState(null)

    useEffect(()=>{
        async function fetchIndicator(){
            const res = await axios.get("https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=7417c098ce07759ed28f47a87c89cc13")
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
    },[]);

    if (!indecator) return <p>Loading...</p>;

    return(<>
        <section className={s.indicator}>
            <div className={c.container}>
                <ul className={s.indicator__box}>
                    <li className={s.indicator__item}>
                        <h2 className={s.indicator__title}>Feels like</h2>
                        <p className={s.indicator__text}>{indecator.feelLike}</p>
                        <img src="/image/temperfeel.png" alt="#" className={s.indicator__photo}/>
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
                        <img src="/image/humidity.png" alt="#" className={s.indicator__photo}/>
                    </li>
                    <li className={s.indicator__item}>
                        <h2 className={s.indicator__title}>Pressure</h2>
                        <p className={s.indicator__text}>{indecator.pressure} Pa</p>
                        <img src="/image/presser.png" alt="#" className={s.indicator__photo}/>
                    </li>
                    <li className={s.indicator__item}>
                        <h2 className={s.indicator__title}>Wind speed</h2>
                        <p className={s.indicator__text}>{indecator.windSpeed} m/s</p>
                        <img src="/image/windowSpeed.png" alt="#" className={s.indicator__photo}/>
                    </li>
                    <li className={s.indicator__item}>
                        <h2 className={s.indicator__title}>Visibility</h2>
                        <p className={s.indicator__text}>{indecator.visibility}</p>
                        <img src="/image/visibili.png" alt="#" className={s.indicator__photo}/>
                    </li>
                </ul>
            </div>
        </section>
    </>)
}

