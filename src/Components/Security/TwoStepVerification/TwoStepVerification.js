import React from "react";
import "./twostepverification.css";
import MessageIcon from "@material-ui/icons/Message";

const TwoStepVerification = () => {
  return (
    <div className="twoStepVerification">
      <h2>2-Step verification</h2>
      <hr></hr>
      <div className="twoStepVerification__heading">
        <p className="twoStepVerification__title">
          Select your 2-step verification method:
        </p>
        <p className="twoStepVerification__subTitle">
          Your 2-step verification method is valid across all your accounts
        </p>
      </div>
      <p className="twoStepVerification__current">Current:</p>
      <div className="twoStepVerification__text-message-container">
        <div className="twoStepVerification__text-message__left">
          <MessageIcon className="message__icon " />
          <div className="twoStepVerification__text-message__title">
            <span>+x xxx xxx xx74</span>
            <p>Keep your primary number up to date</p>
          </div>
        </div>
        <button className="twoStepVerification__text-message__button">
          Remove
        </button>
      </div>
      <p className="twoStepVerification__security">Moderate Security*</p>
      <div className="twoStepVerification__heading">
        <p className="twoStepVerification__title">
          Use 2-step verification to secure your transactions
        </p>
        <p className="twoStepVerification__subTitle">
          Require 2-step verification to send:
        </p>{" "}
        <div className="twoStepVerification__checkBoxs">
          <div className="twoStepVerification__checkBox">
            <input type="checkbox" />
            <label>
              Any amount of cryptocurrency
              <span style={{ color: "green" }}> Most secure</span>
            </label>
          </div>
          <div className="twoStepVerification__checkBox">
            <input type="checkbox" />
            <label>Over 1.2000 BTC</label>
          </div>
          <div className="twoStepVerification__checkBox">
            <input type="checkbox" />
            <label>
              Never <span style={{ color: "red" }}>Least secure</span>
            </label>
          </div>
          <button className="twoStepVerification__button">Save</button>
        </div>
      </div>
    </div>
  );
};

export default TwoStepVerification;
