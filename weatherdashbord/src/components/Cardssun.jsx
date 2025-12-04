import React from "react";
import { useState, useEffect } from "react";
import s from "../styles/Cardssun.module.scss";
// import c from "../styles/Container.module.scss";
import axios from "axios";

const API_KEY = "54127d5f81d4289610e32702a0b4ce52";

export function Cardssun({city, onRemove}) {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    async function fetchWeather() {
      const res = await axios.get(
        "https://api.openweathermap.org/data/2.5/weather",
        {
          params: {
            q: city,
            appid: API_KEY,
            units: "metric",
            lang: "en",
          },
        }
      );

      setWeather({
        city: res.data.name,
        temp: Math.round(res.data.main.temp),
        icon: res.data.weather[0].icon,
        timestamp: res.data.dt,
        timezone: res.data.timezone,
      });
    }

    fetchWeather();
  }, [city]);

  function getLocalTime(offsetInSeconds) {
  const nowUTC = Date.now() + new Date().getTimezoneOffset() * 60000;
  const local = new Date(nowUTC + offsetInSeconds * 1000);

  return local.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false
  });
}

  const getDayOfWeek = (timestamp, timezone) => {
    return new Date((timestamp + timezone) * 1000).toLocaleDateString("en-US", {
      weekday: "long",
    });
  };

  const getCurrentDate = (timestamp, timezone) => {
    const date = new Date((timestamp + timezone) * 1000);

    const day = String(date.getUTCDate()).padStart(2, "0");
    const month = String(date.getUTCMonth() + 1).padStart(2, "0");
    const year = date.getUTCFullYear();

    return `${day}.${month}.${year}`;
  };

  return (<>
    {/* <li className={s.weather}> */}
      {/* <div className={c.containertttttttttt}> */}
        {weather && (
          //<div className={s.weather__box}>
            <li className={s.weather__card}>
              <h2 className={s.weather__title}>{weather.city}</h2>
              <p className={s.weather__oclock}>
                {getLocalTime(weather.timezone)}
              </p>
              <div className={s.weather__btn_box}>
                <button className={s.weather__hourly_btn}>
                  Hourly forecast
                </button>
                <button className={s.weather__hourly_btn}>
                  Weekly forecast
                </button>
              </div>
              <div className={s.weather__day_box}>
                <p className={s.weather__day}>
                  {getCurrentDate(weather.timestamp, weather.timezone)}
                </p>
                <p className={s.weather__week}>
                  {getDayOfWeek(weather.timestamp, weather.timezone)}
                </p>
              </div>
              <img
                src={`https://openweathermap.org/img/wn/${weather.icon}@2x.png`}
                alt={weather.desc}
                className={s.weather__photo}
              />
              <p className={s.weather__temper}>{weather.temp}°C</p>

              <div className={s.weather__more_box}>
                <button className={s.weather__retry_btn}>ret</button>
                <button className={s.weather__like_btn}>like</button>
                <button className={s.weather__see_btn}>See more</button>
                <button className={s.weather__trash_btn} onClick={onRemove}>trash</button>
              </div>
            </li>
          //</div>
        )}
    {/* </div> */}
    {/* </li> */}
  </>
  );
}
