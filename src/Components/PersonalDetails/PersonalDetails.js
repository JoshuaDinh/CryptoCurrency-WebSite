import React from "react";
import "./personalDetails.css";

const PersonalDetails = () => {
  return (
    <div className="personalDetails">
      <h2>Personal Details</h2>
      <hr></hr>
      <form className="personalDetails__form">
        <label>Legal Name</label>
        <input type="text" />
        <label>Date of birth</label>
        <input type="date" />
        <label>Street Address</label>
        <input type="text" />
        <div className="personalDetails__dualInput">
          <div className="pesonalDetails__dualInput-container">
            <label>City/Town</label>
            <input type="text" />
          </div>
          <div className="pesonalDetails__dualInput-container">
            <label>state</label>
            <input type="text" />
          </div>
        </div>
        <div className="personalDetails__dualInput">
          <div className="pesonalDetails__dualInput-container">
            <label>Post Code</label>
            <input type="number" />
          </div>
          <div className="pesonalDetails__dualInput-container">
            <label>Country</label>
            <input type="country" />
          </div>
        </div>
        <button className="myProfile__save-button">Save</button>
      </form>
    </div>
  );
};

export default PersonalDetails;
