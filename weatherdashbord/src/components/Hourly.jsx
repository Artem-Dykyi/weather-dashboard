// import s from "../styles/Hourly.module.scss";
// import c from "../styles/Container.module.scss";
// import React from "react";
// import { Line } from "react-chartjs-2";
// import { Chart, CategoryScale, LinearScale, LineElement, PointElement, Title } from "chart.js";

// Chart.register(CategoryScale, LinearScale, LineElement, PointElement, Title);

// export  function Hourly() {
//   const today = new Date();
// //   const monthName = today.toLocaleString("en-US", { month: "short" });
// //   const day = today.getDate();

  
//   const hours = [
//     "1AM","2AM","3AM","4AM","5AM","6AM",
//     "7AM","8AM","9AM","10AM","11AM","12PM",
//     "1PM","2PM","3PM","4PM","5PM","6PM"
//   ];

//   const labels = hours.map(h => `${h}`);


//   const data = {
//     labels,
//     datasets: [
//       {
//         label: "Activity",
//         data: [
//           10,12,14,18,20,22,      // 1AM–6AM
//           15,17,19,21,24,23,      // 7AM–12PM
//           18,20,22,19,17,15       // 1PM–6PM
//         ],
//         borderWidth: 2,
//         tension: 0.3,
//       },
//     ],
//   };

//   const options = {
//     responsive: true,
//     scales: {
//       x: {
//         position: "top",
//         ticks: {
//           maxRotation: 90,
//           minRotation: 90,
//           font: { size: 10 },
//         },
//       },
//       y: {
//         min: 5,
//         max: 25,
//         ticks: { stepSize: 5 },
//       },
//     },
//   };

//   return (<>
//     <section className={s.hour}>
//             <div className={c.container}>
//                 <div className={s.hour__main_box}> 
//                      <h2 className={s.hour__title}>Hourly forecast</h2>
//                   <div className={s.hour__box}>
//                          <Line data={data} options={options} />
//                     </div>
//                 </div> 
//            </div>
//          </section>
//   </>);
// }



// import s from "../styles/Hourly.module.scss";
// import c from "../styles/Container.module.scss";
// import React, { useEffect, useState } from "react";
// import { Line } from "react-chartjs-2";
// import { Chart, CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip } from "chart.js";

// Chart.register(CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip);

// export function Hourly() {
//   const [hours, setHours] = useState(null);
//   const [temps, setTemps] = useState(null);

//   const API_KEY = "9f8d339c67a2506f6b7623e13b7ab81d";

//   useEffect(() => {
//     async function fetchHourly() {
//       try {
//         const res = await fetch(
//           `https://api.openweathermap.org/data/2.5/forecast?lat=50.45&lon=30.52&appid=${API_KEY}&units=metric`
//         );

//         const data = await res.json();
//         console.log("WEATHER DATA:", data);

//         if (!data.list) return;

//         const sliced = data.list.slice(0, 18);

//         const h = sliced.map(item => {
//           const d = new Date(item.dt * 1000);
//           return d.toLocaleString("en-US", {
//             hour: "numeric",
//             hour12: true,
//           });
//         });

//         const t = sliced.map(item => Math.round(item.main.temp));

//         setHours(h);
//         setTemps(t);
//       } catch (err) {
//         console.log("ERR:", err);
//       }
//     }

//     fetchHourly();
//   }, []);

//   if (!hours || !temps) return <p style={{ color: "white" }}>Loading...</p>;

//   const chartData = {
//     labels: hours,
//     datasets: [
//       {
//         label: "Temp °C",
//         data: temps,
//         borderColor: "rgb(0,150,255)",
//         backgroundColor: "rgba(0,150,255,0.3)",
//         borderWidth: 2,
//         tension: 0.4,
//         pointRadius: 3,
//       },
//     ],
//   };

//   const options = {
//     responsive: true,
//     scales: {
//       x: {
//         position: "top",
//         ticks: {
//           maxRotation: 90,
//           minRotation: 90,
//           font: { size: 10 },
//         },
//       },
//       y: {
//         beginAtZero: false,
//       },
//     },
//   };

//   return (
//     <section className={s.hour}>
//       <div className={c.container}>
//         <div className={s.hour__main_box}>
//           <h2 className={s.hour__title}>Hourly forecast</h2>
//           <div className={s.hour__box}>
//             <Line data={chartData} options={options} />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
