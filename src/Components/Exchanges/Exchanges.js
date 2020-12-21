import React, { useState, useEffect } from "react";
import { HorizontalBar } from "react-chartjs-2";
import axios from "axios";
import "./exchanges.css";
import chart from "../../images/chart.svg";

const Exchanges = () => {
  const [exchanges, setExchanges] = useState([]);
  const [exchangeName, setExchangeName] = useState([]);
  const [exchangeVolume, setExchangeVolume] = useState(null);
  const [exchangeImage, setExchangeImage] = useState("");
  const [exchangeEstablishedDate, setExchangeEstablishedDate] = useState(null);
  const [viewAllExchanges, setViewAllExchanges] = useState(false);

  useEffect(() => {
    const fetchExchanges = async () => {
      const exchangesList = await axios.get(
        "https://api.coingecko.com/api/v3/exchanges"
      );
      setExchanges(exchangesList.data);
      if (exchangesList) {
        const exchangeList = exchangesList.data;
        let exchangeName = [];
        let exchangeVolume = [];
        // array of exchange names for display in horizontal bar chart
        exchangeList.map((data) => exchangeName.push(data.id));
        setExchangeName(exchangeName.slice(0, 20));
        // array of trade volumes for display in horizontal bar chart
        exchangeList.map((data) =>
          exchangeVolume.push(data.trade_volume_24h_btc)
        );
        setExchangeVolume(exchangeVolume);
      }
    };
    fetchExchanges();
  }, []);

  let colors = [];
  exchangeName.map((name) => {
    return colors.push("#162336");
  });

  return (
    <div className="exchanges">
      <img src={chart} />
      {colors.length > 0 && (
        <HorizontalBar
          data={{
            labels: exchangeName,
            datasets: [
              {
                label: "Trade Volume",
                backgroundColor: colors,
                data: exchangeVolume,
              },
            ],

            options: {
              legend: { display: false },
              title: {
                display: true,
                text: "Trade Volume",
              },
            },
          }}
        />
      )}
    </div>
  );
};

export default Exchanges;
