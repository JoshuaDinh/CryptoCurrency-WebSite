// import React, { useState, useEffect } from "react";
// import { Line } from "react-chartjs-2";
// import numeral from "numeral";
// import Axios from "axios";
// import { CircularProgress } from "@material-ui/core";

// const options = {
//   legends: {
//     display: false,
//   },
//   elements: {
//     point: {
//       radius: 0,
//     },
//   },
//   maintainAspectRation: false,
//   tooltips: {
//     mode: "index",
//     intersect: false,
//     callbacks: {
//       label: function (tooltipItem, lineData) {
//         return numeral(tooltipItem.value).format("+0,0");
//       },
//     },
//   },
//   scales: {
//     yAxes: [
//       {
//         gridLines: {
//           display: true,
//         },
//         ticks: {
//           callback: function (value, index, values) {
//             return numeral(value).format("0a");
//           },
//         },
//       },
//     ],
//   },
// };

// const LineChart = ({ loading }) => {
//   return (
//     <div className="table__chart">
//       {!loading ? (
//         <Line
//           data={{
//             labels: ["idk"],
//             datasets: [
//               {
//                 label: "idk",
//                 borderColor: "rgb(210, 125, 13) ",
//                 data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 13],
//               },
//             ],
//           }}
//           options={options}
//         />
//       ) : (
//         <div className="lineGraphSpinner">
//           <CircularProgress color="black" fontSize="large" />
//         </div>
//       )}
//     </div>
//   );
// };

// export default LineChart;
