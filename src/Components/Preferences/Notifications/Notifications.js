import React from "react";
import "./notifications.css";

const Notifications = () => {
  return (
    <div className="notifications">
      <h2>Notifications</h2>
      <hr></hr>
      <p className="notifications__text">Email me when:</p>
      <div className="notifications__check-box">
        <input type="checkbox" />
        <label>I send or receive crypto</label>
      </div>
      <div className="notifications__check-box">
        <input type="checkbox" />
        <label>any purchase of an asset</label>
      </div>
      <div className="notifications__check-box">
        <input type="checkbox" />
        <label>There are recommend actions for my account</label>
      </div>
      <button className="notifications__button">Save</button>
    </div>
  );
};

export default Notifications;
