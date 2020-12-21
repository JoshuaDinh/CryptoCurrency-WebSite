import React from "react";
import { Pie } from "react-chartjs-2";
import "./table.css";

const PieGraph = ({ name, marketCap }) => {
  const options = {
    title: {
      display: true,
      text: "Top 5 by Market-Cap",
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
  };

  return (
    <div className="table__chart">
      <Pie
        options={options}
        data={{
          labels: name,
          datasets: [
            {
              label: "Top 5 by Market Cap",
              backgroundColor: [
                "#162336",
                "#164488",
                "#4372b8",
                "#7bb0ff",
                "#d27d0d",
              ],
              data: marketCap,
            },
          ],
        }}
      />
    </div>
  );
};

export default PieGraph;
