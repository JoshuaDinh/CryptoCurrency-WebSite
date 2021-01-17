import React from "react";
import "./account.css";

const AccountHeader = ({ accountTitle }) => {
  return (
    <div className="account">
      <h2>{accountTitle}</h2>
      <hr></hr>
    </div>
  );
};

export default AccountHeader;
