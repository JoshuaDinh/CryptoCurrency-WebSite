import React from "react";
import "./notifications.css";
import AccountHeader from "../../Account/AccountHeader";

const Notifications = () => {
  return (
    <div className="notifications">
      <AccountHeader accountTitle="Notifications" />
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
