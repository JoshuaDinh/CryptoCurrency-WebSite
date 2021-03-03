import React from "react";
import "./coinInfo.css";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import { Card, CircularProgress } from "@material-ui/core";

const CoinInfo = ({
  title,
  details,
  low,
  lowTitle,
  high,
  highTitle,
  chartData,
  active,
  status,
  loading,
}) => {
  return (
    <Card
      onClick={(e) => chartData && chartData(e)}
      className={`coinInfo ${active && "coinInfo--selected"}`}
    >
      <p className="coinInfo__title">{title}</p>
      {loading ? (
        <CircularProgress />
      ) : (
        <div className="coinInfo__content">
          <h2>
            <div className={status}>
              {status === "red" ? (
                <ArrowDownwardIcon fontSize="large" />
              ) : status === "green" ? (
                <ArrowUpwardIcon fontSize="large" />
              ) : null}
            </div>
            {details}
          </h2>
          <div className="coinInfo__highLow">
            <p>
              {lowTitle}
              {low}
            </p>
            <p>
              {highTitle}
              {high}
            </p>
          </div>
        </div>
      )}
    </Card>
  );
};

export default CoinInfo;
