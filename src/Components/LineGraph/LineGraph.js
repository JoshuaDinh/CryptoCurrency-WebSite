import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import numeral from "numeral";
import "./linegraph.css";
import Axios from "axios";
import { CircularProgress } from "@material-ui/core";

const options = {
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
      label: function (tooltipItem, lineData) {
        return numeral(tooltipItem.value).format("+0,0");
      },
    },
  },
  scales: {
    yAxes: [
      {
        gridLines: {
          display: true,
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

const LineGraph = ({ coin, chartDay, loading }) => {
  const [lineData, setLineData] = useState([]);

  useEffect(() => {
    const fetchGraphData = async () => {
      const graphData = await Axios.get(
        ` https://api.coingecko.com/api/v3/coins/${coin}/market_chart?vs_currency=usd&days=${chartDay}`
      );
      // Takes coin price in usd/btc from the api and pushs into an array for display on the graph. 0: btc 1: usd
      if (graphData) {
        const sparkline = graphData.data.prices;
        let graphDetails = [];
        sparkline.map((data) => graphDetails.push(data[1]));
        setLineData(graphDetails);
      }
    };
    fetchGraphData();
  }, [coin, chartDay]);

  const graphLabel = [];
  for (let i = 0; i <= chartDay; i++) {
    graphLabel.push(i);
  }

  return (
    <div className="lineGraph">
      <Line
        data={{
          labels: graphLabel,
          datasets: [
            {
              label: chartDay + "Day Price change",
              backgroundColor: "#162336",
              borderColor: "rgb(210, 125, 13) ",
              data: lineData,
            },
          ],
        }}
        options={options}
      />
    </div>
  );
};

export default LineGraph;
