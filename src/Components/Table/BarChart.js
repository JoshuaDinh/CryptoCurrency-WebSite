import React from "react";
import { Bar } from "react-chartjs-2";
import numeral from "numeral";

const BarChart = ({ volume, name }) => {
  const options = {
    title: {
      display: true,
      text: "Top 5 by Volume",
    },
    legends: {
      display: false,
    },
    elements: {
      point: {
        radius: 0,
      },
    },
    maintainAspectRation: false,
    tooltips: {
      mode: "index",
      intersect: false,
      callbacks: {
        label: function (tooltipItem, data) {
          return numeral(tooltipItem.value).format("0,000,000,000");
        },
      },
    },
    scales: {
      yAxes: [
        {
          gridLines: {
            display: false,
          },
          ticks: {
            callback: function (value, index, values) {
              return numeral(value).format("0a");
            },
          },
        },
      ],
    },
  };

  return (
    <div className="table__chart">
      <Bar
        options={options}
        data={{
          labels: name,
          datasets: [
            {
              label: "Volume",
              backgroundColor: [
                "#162336",
                "#164488",
                "#4372b8",
                "#7bb0ff",
                "#d27d0d",
              ],
              data: volume,
            },
          ],
        }}
      />
    </div>
  );
};

export default BarChart;
