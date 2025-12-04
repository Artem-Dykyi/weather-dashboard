// import React, { useEffect, useState } from "react";
// import { Line } from "react-chartjs-2";
// import {
//   Chart as ChartJS,
//   LineElement,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   Tooltip,
//   Legend
// } from "chart.js";

// ChartJS.register(
//   LineElement,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   Tooltip,
//   Legend
// );

// export default function Hourly({ lat, lon }) {
//   const [hours, setHours] = useState([]);
//   const [temps, setTemps] = useState([]);

//   // Convert 24h -> 12h format
//   function to12h(timeString) {
//     const h = parseInt(timeString.slice(11, 13), 10);

//     const hour12 = (h % 12) || 12;
//     const ampm = h >= 12 ? "PM" : "AM";

//     return `${hour12} ${ampm}`;
//   }

//   useEffect(() => {
//     async function fetchData() {
//       const res = await fetch(
//         `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&hourly=temperature_2m&timezone=auto`
//       );
//       const data = await res.json();

//       const hourly = data.hourly;

//       setHours(hourly.time.map(to12h));
//       setTemps(hourly.temperature_2m.map(v => v ?? 0));
//     }

//     fetchData();
//   }, [lat, lon]);

//   const chartData = {
//     labels: hours,
//     datasets: [
//       {
//         label: "Temperature",
//         data: temps,
//         borderColor: "rgb(255, 140, 0)",
//         backgroundColor: "rgba(255, 140, 0, 0.3)",
//         borderWidth: 2,
//         tension: 0.3,
//         fill: true,
//       }
//     ]
//   };

//   const chartOptions = {
//     responsive: true,
//     plugins: {
//       legend: { display: false },
//     },
//     scales: {
//       y: {
//         min: 5,
//         max: 25,
//         ticks: {
//           stepSize: 5,
//         },
//       },
//       x: {
//         grid: { display: false },
//       }
//     },
//   };

//   return (
//     <div style={{ width: "100%", maxWidth: "700px", margin: "0 auto" }}>
//       <h3 style={{ textAlign: "center", marginBottom: "20px" }}>
//         Погодинний прогноз температури
//       </h3>
//       <Line data={chartData} options={chartOptions} />
//     </div>
//   );
// }
