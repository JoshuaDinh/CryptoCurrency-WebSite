import React, { useState, useEffect } from "react";
import axios from "axios";
import numeral from "numeral";
import "./app.css";
import TableData from "./Components/Table/TableData";
import Search from "./Components/Search/Search";
import CoinInfo from "./Components/CoinInfo/CoinInfo";
import LineGraph from "./Components/LineGraph/LineGraph";
import Settings from "./Components/Settings/Settings";
import Profile from "./Components/Profile/Profile";
// import { LinearProgress } from "@material-ui/core";
import News from "./Components/News/News";
import Sidebar from "../src/Components/Sidebar/Sidebar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignUp from "./Components/SignUp/SignUp";
import Exchanges from "./Components/Exchanges/Exchanges";
// import Account from "./Components/Account/Account";
import AllTimeData from "./Components/AllTimeHigh/AllTimeData";
import linegraph from "./images/linegraph.svg";
import news from "./images/news.svg";

const App = () => {
  const [dataTableByMarketCap, setDataTableByMarketCap] = useState([]);
  // const [dataTableByVolume, setDataTableByVolume] = useState([]);
  const [list, setList] = useState([]);
  const [coin, setCoin] = useState("");
  const [coinInfo, setCoinInfo] = useState([]);
  const [loading, setLoading] = useState(true);
  const [chartDays, setChartDays] = useState(7);
  // const [coinName, setCoinName] = useState([]);
  // const [coinPrice, setCoinPrice] = useState([]);

  // Manages searched & selected coins
  const onFormSearch = (e) => {
    setLoading(true);
    setCoin(e);
  };
  const onCoinSelect = (e) => {
    setLoading(true);
    setCoin(e);
  };

  // Sets amount of days for the chart to display based on which CoinInfo box was selected
  const chartData = (e) => {
    setChartDays(e);
  };

  useEffect(() => {
    // fetchs list of Coins for dropdown under searchbar
    const fetchData = async () => {
      const coinsList = await axios.get(
        "https://api.coingecko.com/api/v3/coins"
      );
      setList(coinsList.data);

      // fetchs list by MarketCap
      const marketCap = await axios.get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      );
      setDataTableByMarketCap(marketCap.data);

      // fetchs list by volume
      // const volume = await axios.get(
      //   `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=volume_desc&per_page=100&page=1&sparkline=false`
      // );
      // setDataTableByVolume(volume.data);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const searchCoin = async () => {
      const coinInfo = await axios.get(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${coin}&order=market_cap_desc&per_page=100&page=1&sparkline=true&price_change_percentage=7d,14d,30d`
      );
      setCoinInfo(coinInfo.data[0]);
      setLoading(false);
    };
    const timer = setTimeout(() => {
      if (coin) {
        searchCoin();
      }
    }, 2000);
    return () => clearTimeout(timer);
  }, [coin]);

  return (
    <div className="App">
      <Router>
        <Sidebar />
        <Switch>
          {/* <------------------------------------DASHBOARD---------------------------------------------> */}
          <Route path="/crypto">
            <div className="app__container">
              <div className="app__header">
                <Search list={list} coin={coin} onFormSearch={onFormSearch} />
              </div>
              <div className="app__data">
                <TableData
                  setCoin={onCoinSelect}
                  table={dataTableByMarketCap}
                />
                <div className="app__data-container">
                  <div className="app__data-row">
                    {!loading && (
                      <div className="app__data-title">
                        <h1>
                          {coinInfo?.["name"]}
                          <span>:</span>
                        </h1>
                        <p>
                          <span>
                            <img src={coinInfo?.["image"]} alt="" />
                          </span>
                          ({coinInfo?.["symbol"]})
                        </p>
                      </div>
                    )}
                    <CoinInfo
                      loading={loading}
                      details={`$${numeral(coinInfo?.["current_price"]).format(
                        "0,0.00"
                      )}`}
                      title={"$ Current Price"}
                      title2={"TotalVolume"}
                    />
                    <CoinInfo
                      loading={loading}
                      active={chartDays === 1}
                      chartData={() => chartData(1)}
                      details={`${numeral(
                        coinInfo?.["price_change_24h"]
                      ).format("0,0.00")}%`}
                      status={
                        Math.sign(coinInfo?.["price_change_24h"]) > 0
                          ? "green"
                          : "red"
                      }
                      high={`$${numeral(coinInfo?.["high_24h"]).format("0,0")}`}
                      low={`$${numeral(coinInfo?.["low_24h"]).format("0,0")}`}
                      title={"24 Hr change"}
                      daily
                      lowTitle="Low:"
                      highTitle="High:"
                    />{" "}
                  </div>
                  <div className="app__data-row">
                    <CoinInfo
                      loading={loading}
                      active={chartDays === 7}
                      chartData={() => chartData(7)}
                      percent="%"
                      details={`${numeral(
                        coinInfo?.["price_change_percentage_7d_in_currency"]
                      ).format("0.00.00")}%`}
                      status={
                        Math.sign(
                          coinInfo?.["price_change_percentage_7d_in_currency"]
                        ) > 0
                          ? "green"
                          : "red"
                      }
                      title={"7 day change"}
                    />
                    <CoinInfo
                      loading={loading}
                      active={chartDays === 14}
                      chartData={() => chartData(14)}
                      percent="%"
                      details={`${numeral(
                        coinInfo?.["price_change_percentage_14d_in_currency"]
                      ).format("0.00.00")}%`}
                      status={
                        Math.sign(
                          coinInfo?.["price_change_percentage_14d_in_currency"]
                        ) > 0
                          ? "green"
                          : "red"
                      }
                      title={"14 day change"}
                    />
                    <CoinInfo
                      loading={loading}
                      active={chartDays === 30}
                      chartData={() => chartData(30)}
                      percent="%"
                      details={`${numeral(
                        coinInfo?.["price_change_percentage_30d_in_currency"]
                      ).format("0.00.00")}%`}
                      status={
                        Math.sign(
                          coinInfo?.["price_change_percentage_30d_in_currency"]
                        ) > 0
                          ? "green"
                          : "red"
                      }
                      title={"30 day change"}
                    />
                  </div>
                  <div className="app__graph-container">
                    {coin ? (
                      <LineGraph
                        loading={loading}
                        chartDay={chartDays}
                        coin={coin}
                      />
                    ) : (
                      <div className="app__graph-loader">
                        {/* <p>Waiting for selection..</p>
                        <LinearProgress /> */}
                        <img src={linegraph} alt="" />
                      </div>
                    )}
                    <AllTimeData
                      ath={`$${numeral(coinInfo?.["ath"]).format("0,0.00")}`}
                      athDate={coinInfo?.["ath_date"]?.split("T")[0]}
                      athChange={`${numeral(
                        coinInfo?.["ath_change_percentage"]
                      ).format("0,0.00")}%`}
                      atl={`$${numeral(coinInfo?.["atl"]).format("0,0.00")}`}
                      atlDate={coinInfo?.["atl_date"]?.split("T")[0]}
                      atlChange={`${numeral(
                        coinInfo?.["atl_change_percentage"]
                      ).format("0,0")}%`}
                      status={
                        Math.sign(coinInfo?.["atl_change_percentage"]) < 0
                          ? "green"
                          : "red"
                      }
                    />{" "}
                  </div>
                </div>
              </div>
            </div>
          </Route>
          {/* /* <------------------------------------DataTable---------------------------------------------> */}
          <Route path="/Data">
            <div className="app__dataTable-container"></div>
          </Route>
          ;
          {/* /* <------------------------------------News---------------------------------------------> */}
          <Route path="/News">
            <div className="app__news">
              <div className="app__news-title">
                <h1>Top Stories</h1>
                <img src={news} alt="" />
              </div>
              <hr></hr>
              <News />
            </div>
          </Route>
          ;
          {/* /* <------------------------------------Exchanges---------------------------------------------> */}
          <Route path="/Exchanges">
            <div className="app__exchanges">
              <h1>Top Exchanges by Trust Score </h1>
              <hr></hr>
              <Exchanges />
            </div>
          </Route>
          ;
          {/* /* <------------------------------------MyAccount---------------------------------------------> */}
          <Route path="/Profile">
            <div className="app__account">
              <Settings />
              <Profile />
            </div>
          </Route>
          <Route path="/Preferences">
            <div className="app__account">
              <Settings />
              <p>Preferences</p>
            </div>
          </Route>
          <Route path="/Security">
            <div className="app__account">
              <Settings />
              <p>security</p>
            </div>
          </Route>
          <Route path="/PaymentMethods">
            <div className="app__account">
              <Settings />
              <p>paymentmethods</p>
            </div>
          </Route>
          <Route path="/CryptoAddresses">
            <div className="app__account">
              <Settings />
              <p>cryptoaddresses</p>
            </div>
          </Route>
          ;
          {/* /* <------------------------------------SignUp---------------------------------------------> */}
          <Route path="/SignUp">
            <div className="app__signUp">
              <SignUp />
            </div>
          </Route>
          ;
          {/* /* <------------------------------------SignOut---------------------------------------------> */}
          <Route path="/SignOut">
            <div className="app__signOut">signout</div>
          </Route>
          ;
          {/* /* <--------------------------------------------------------------------------------------------> */}
        </Switch>
      </Router>
    </div>
  );
};

export default App;
