import React from "react";
import "./phonenumbers.css";
import PhonelinkSetupIcon from "@material-ui/icons/PhonelinkSetup";

const PhoneNumbers = () => {
  return (
    <div className="phoneNumbers">
      <h2>Phone Numbers</h2>
      <hr></hr>
      <div className="phoneNumber__container">
        <div className="phoneNumber__left">
          <PhonelinkSetupIcon className="phoneNumber__icon" />{" "}
          <div className="phoneNumber__title">
            <span>+x xxx xxx xx74</span>
            <p>Keep your primary number up to date</p>
          </div>
        </div>
        <button className="phoneNumber__button">Manage</button>
      </div>
      <p className="phoneNumber__required">Required*</p>
    </div>
  );
};

export default PhoneNumbers;
