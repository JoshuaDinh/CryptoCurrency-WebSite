import React, { useState } from "react";
import "./allTimeHigh.css";
import ArrowLeftIcon from "@material-ui/icons/ArrowLeft";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";

const AllTimeData = ({
  ath,
  atl,
  athDate,
  atlDate,
  athChange,
  atlChange,
  status,
  title,
}) => {
  const [view, setView] = useState("ATH");

  const setting = () => {
    return view === "ATH" ? "ATH" : "ATL";
  };
  return (
    <div className="allTimeData">
      <h3>
        <ArrowLeftIcon onClick={() => setView("ATH")} />
        {setting()}
        <ArrowRightIcon onClick={() => setView("ATL")} />
      </h3>
      <hr></hr>
      <div>
        <p>{setting()}</p>
        <h5>{view === "ATH" ? ath : atl}</h5>
      </div>
      <div>
        <p>{setting() + " Change%"}</p>
        <h5 style={{ color: view === "ATH" ? "red" : "green" }}>
          {view === "ATH" ? athChange : "+" + atlChange}
        </h5>
      </div>
      <div>
        <p>Ath Date:</p> <h5>{view === "ATH" ? athDate : atlDate}</h5>
      </div>
    </div>
  );
};

export default AllTimeData;
