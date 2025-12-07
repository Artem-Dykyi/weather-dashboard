// import React, { useEffect, useState } from "react";
// import s from "../styles/Hourly.module.scss";
// import c from "../styles/Container.module.scss";
// import { Line } from "react-chartjs-2";
// import {
//   Chart,
//   LineElement,
//   PointElement,
//   CategoryScale,
//   LinearScale,
//   Tooltip,
//   Legend,
// } from "chart.js";

// Chart.register(
//   LineElement,
//   PointElement,
//   CategoryScale,
//   LinearScale,
//   Tooltip,
//   Legend
// );

// export function Hourly() {
//   const [temps, setTemps] = useState([]);
//   const [dateLabel, setDateLabel] = useState("");

//   useEffect(() => {
//   async function load() {
//     const url =
//       "https://api.openweathermap.org/data/2.5/forecast?lat=45&lon=34&appid=0b53411ffccdebc41af3375c263ec271&units=metric";

//     const res = await fetch(url);
//     const data = await res.json();

//     // Беремо до 6pm (00–18:00)
//     const slice = data.list.slice(0, 7);

//     const t = slice.map((item) => item.main.temp);

//     // Дата
//     const firstDate = new Date(slice[0].dt * 1000);
//     const day = firstDate.getDate();
//     const month = firstDate.toLocaleString("en-US", { month: "short" });

//     setDateLabel(`${day} ${month}`);
//     setTemps(t);
//   }

//   load();
// }, []);

//   const labels = [
//     dateLabel,
//     "1am",
//     "2am",
//     "3am",
//     "4am",
//     "5am",
//     "6am",
//     "7am",
//     "8am",
//     "9am",
//     "10am",
//     "11am",
//     "12am",
//     "1pm",
//     "2pm",
//     "3pm",
//     "4pm",
//     "5pm",
//     "6pm",
//   ];

//   const chartData = {
//     labels,
//     datasets: [
//       {
//         label: "",
//         data: [null, ...temps],
//         borderColor: "orange",
//         borderWidth: 2,
//         tension: 0.3,
//         pointRadius: 4,
//         pointBackgroundColor: "transparent",
//       },
//     ],
//   };

//   const chartOptions = {
//     responsive: true,
//     scales: {
//       y: {
//         min: 5,
//         max: 25,
//         ticks: { stepSize: 5 },
//       },
//       x: {
//         position: "top",
//         ticks: {
//           font: { size: 14 },
//         },
//       },
//     },
//     plugins: {
//       legend: { display: false },
//       tooltip: { enabled: true },
//     },
//   };

//   return (
//     <>
//         <section className={s.hour}>
//             <div className={c.container}>
//                 <div className={s.hour__main_box}> 
//                     <h2 className={s.hour__title}>Hourly forecast</h2>
//                     <div className={s.hour__box}>
//                         <Line data={chartData} options={chartOptions} />
//                     </div>
//                 </div> 
//             </div>
//         </section>
//     </>
    
//   );
// }



import s from "../styles/Hourly.module.scss";
import c from "../styles/Container.module.scss";
import React from "react";
import { Line } from "react-chartjs-2";
import { Chart, CategoryScale, LinearScale, LineElement, PointElement, Title } from "chart.js";

Chart.register(CategoryScale, LinearScale, LineElement, PointElement, Title);

export  function Hourly() {
  const today = new Date();
//   const monthName = today.toLocaleString("en-US", { month: "short" });
//   const day = today.getDate();

  // 18 годин — 1AM → 6PM
  const hours = [
    "1AM","2AM","3AM","4AM","5AM","6AM",
    "7AM","8AM","9AM","10AM","11AM","12PM",
    "1PM","2PM","3PM","4PM","5PM","6PM"
  ];

  const labels = hours.map(h => `  – ${h}`);


  const data = {
    labels,
    datasets: [
      {
        label: "Activity",
        data: [
          10,12,14,18,20,22,      // 1AM–6AM
          15,17,19,21,24,23,      // 7AM–12PM
          18,20,22,19,17,15       // 1PM–6PM
        ],
        borderWidth: 2,
        tension: 0.3,
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      x: {
        position: "top",
        ticks: {
          maxRotation: 90,
          minRotation: 90,
          font: { size: 10 },
        },
      },
      y: {
        min: 5,
        max: 25,
        ticks: { stepSize: 5 },
      },
    },
  };

  return (<>
    <section className={s.hour}>
            <div className={c.container}>
                <div className={s.hour__main_box}> 
                     <h2 className={s.hour__title}>Hourly forecast</h2>
                  <div className={s.hour__box}>
                         <Line data={data} options={options} />
                    </div>
                </div> 
           </div>
         </section>
  </>);
}
