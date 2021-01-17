import React from "react";
import "./phonenumbers.css";
import PhonelinkSetupIcon from "@material-ui/icons/PhonelinkSetup";
import AccountHeader from "../../Account/AccountHeader";

const PhoneNumbers = () => {
  return (
    <div className="phoneNumbers">
      <AccountHeader accountTitle="Phone Numbers" />
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
