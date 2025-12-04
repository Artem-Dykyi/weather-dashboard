// import React, { useEffect, useState } from "react";
// import s from "../styles/Hero.module.scss";
// import c from "../styles/Container.module.scss";
// import axios from "axios";

// export function Hero() {
//   const [currentData, setCarrentData] = useState(null)

//   useEffect(()=>{
//     async function featchCurrentData(){
//       const res = await axios.get("https://api.openweathermap.org/data/2.5/weather?lat=44.33&lon=56.34&appid=303f3c3d26777e683f477b8ed83843bb")
//     }
//   })
//   return (
//     <section className={s.hero}>
//       <div className={c.container}>
//         <div className={s.hero__main_box}>
//           <h1 className={s.hero__title}>Weather dashboard</h1>
//           <div className={s.hero__box}>
//             <p className={s.hero__text}>
//               Create your personal list of favorite cities and always be aware
//               of the weather.
//             </p>
//             <p className={s.hero__month}>October 2023 Friday, 13th</p>
//           </div>
//           <div className={s.hero__search_box}>
//             <input
//               type="button"
//               value=""
//               placeholder="Search location..."
//               className={s.hero__input}
//             />
//             <button className={s.hero__search_btn}>svg</button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

import React, { useEffect, useState } from "react";
import s from "../styles/Hero.module.scss";
import c from "../styles/Container.module.scss";
import axios from "axios";

export function Hero({onSearch}) {
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [weekday, setWeekday] = useState("");
  const [day, setDay] = useState("");

  const [value, setValue] = useState("")

  useEffect(() => {
    async function fetchCurrentData() {
      const res = await axios.get(
        "https://api.openweathermap.org/data/2.5/weather?lat=44.33&lon=56.34&appid=303f3c3d26777e683f477b8ed83843bb"
      );

      const timestamp = res.data.dt;
      const timezone = res.data.timezone;

      const date = new Date((timestamp + timezone) * 1000);

      const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];

      const weekdays = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ];

      const dayNumber = date.getUTCDate();

      const suffix =
        dayNumber % 10 === 1 && dayNumber !== 11
          ? "st"
          : dayNumber % 10 === 2 && dayNumber !== 12
          ? "nd"
          : dayNumber % 10 === 3 && dayNumber !== 13
          ? "rd"
          : "th";

      setMonth(months[date.getUTCMonth()]);
      setYear(date.getUTCFullYear());
      setWeekday(weekdays[date.getUTCDay()]);
      setDay(`${dayNumber}${suffix}`);
    }

    fetchCurrentData();
  }, []);

  function handleSearch() {
    onSearch(value)
    setValue("")
}

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

            <p className={s.hero__month}>
              {month} {year} {weekday}, {day}
            </p>
          </div>
          <div className={s.hero__search_box}>
             <input
               type="text"
               placeholder="Search location..."
               className={s.hero__input}
               value={value}
               onChange={(e) => setValue(e.target.value)}
             />
             <button 
              type="button" 
              className={s.hero__search_btn}
              onClick={() => handleSearch()}>svg</button>
           </div>
        </div>
      </div>
    </section>
  );
}
