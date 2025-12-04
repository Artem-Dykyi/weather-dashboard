import React, { useState, useEffect } from "react";
import axios from "axios";


export function Daysforecast() {
  const [days, setDays] = useState(null);

  useEffect(() => {
    async function loadData() {
      const res = await axios.get(
        "https://api.openweathermap.org/data/2.5/forecast/daily?lat=44&lon=55&cnt=8&appid=9f8d339c67a2506f6b7623e13b7ab81d"
      );

    //   setDays({
    //     description: res.data.daily[0].weather[0].description,
    //     tempDay: res.data.daily[0].temp.day,
    //     tempNight: res.data.daily[0].temp.night,
    //     icon: res.data.daily[0].weather[0].icon,
    //     date: res.data.daily[0].dt
    //   });
    }

    loadData();
  }, []);

return (
  <>
    <div>
    </div>
  </>
);
}



