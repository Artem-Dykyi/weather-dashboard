import s from "../styles/Daysforecast.module.scss";
import c from "../styles/Container.module.scss";

import React, { useEffect, useState } from "react";

const weatherMap = {
  0: { desc: "Clear sky", icon: "☀️" },
  1: { desc: "Mainly clear", icon: "🌤️" },
  2: { desc: "Partly cloudy", icon: "⛅" },
  3: { desc: "Overcast", icon: "☁️" },

  45: { desc: "Fog", icon: "🌫️" },
  48: { desc: "Fog", icon: "🌫️" },

  51: { desc: "Light drizzle", icon: "🌦️" },
  53: { desc: "Drizzle", icon: "🌦️" },
  55: { desc: "Dense drizzle", icon: "🌧️" },

  61: { desc: "Light rain", icon: "🌧️" },
  63: { desc: "Moderate rain", icon: "🌧️" },
  65: { desc: "Heavy rain", icon: "🌧️" },

  71: { desc: "Light snow", icon: "🌨️" },
  73: { desc: "Moderate snow", icon: "🌨️" },
  75: { desc: "Heavy snow", icon: "❄️" },

  80: { desc: "Rain showers", icon: "🌦️" },
  81: { desc: "Rain showers", icon: "🌦️" },
  82: { desc: "Violent rain showers", icon: "⛈️" },

  95: { desc: "Thunderstorm", icon: "⛈️" },
  96: { desc: "Thunderstorm", icon: "⛈️" },
  99: { desc: "Thunderstorm", icon: "⛈️" },
};

export default function Daysforecast({lat, lon}) {
  const [forecast, setForecast] = useState([]);

  useEffect(() => {
    async function load() {
      const res = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&daily=temperature_2m_max,temperature_2m_min,weathercode&timezone=auto&forecast_days=8`
      );
      const data = await res.json();

      const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
      const months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ];

      const list = data.daily.time.map((dateStr, i) => {
        const date = new Date(dateStr);
        const code = data.daily.weathercode[i];
        const weather = weatherMap[code] || { desc: "Unknown", icon: "//" };

        return {
          dayName: days[date.getDay()],
          dateTxt: `${date.getDate()} ${months[date.getMonth()]}`,
          tempDay: Math.round(data.daily.temperature_2m_max[i]),
          tempNight: Math.round(data.daily.temperature_2m_min[i]),
          icon: weather.icon,
          description: weather.desc,
        };
      });

      setForecast(list);
    }

    load();
  }, [lat, lon]);

  return (
    <>
      <section className={s.days}>
        <div className={c.container}>
          <ul className={s.days__list}>
            <h2 className={s.days__title}>Weekly forecast</h2>
          {forecast.map((day, index) => (
            <li className={s.days__card} key={index}>
              <p className={s.days__text}>
                {day.dayName},{day.dateTxt}
              </p>

              <div className={s.days__icon}>{day.icon}</div>
              <p className={s.days__temper}>
                {day.tempDay} / {day.tempNight}°C
              </p>

              <p className={s.days__descri}>{day.description}</p>
            </li>
          ))}
          </ul>
        </div>
      </section>
    </>
  );
}
