import React, { useState } from "react";
import "./personalDetails.css";

const PersonalDetails = () => {
  const [legalName, setLegalName] = useState(false);
  const [dateOfBirth, setDateOfBirth] = useState(false);
  const [address, setAddress] = useState(false);
  const [city, setCity] = useState(false);
  const [state, setState] = useState(false);
  const [postalCode, setPostalCode] = useState(false);
  const [country, setCountry] = useState(false);

  return (
    <div className="personalDetails">
      <h2>Personal Details</h2>
      <hr></hr>
      <form className="personalDetails__form">
        <label>Legal Name</label>
        <input
          type="text"
          onChange={() => setLegalName(true)}
          className={legalName && "personalDetails__form-input-selected"}
        />
        <label>Date of birth</label>
        <input
          type="date"
          onChange={() => setDateOfBirth(true)}
          className={dateOfBirth && "personalDetails__form-input-selected"}
        />
        <label>Street Address</label>
        <input
          type="text"
          onChange={() => setAddress(true)}
          className={address && "personalDetails__form-input-selected"}
        />
        <div className="personalDetails__dualInput">
          <div className="pesonalDetails__dualInput-container">
            <label>City/Town</label>
            <input
              type="text"
              onChange={() => setCity(true)}
              className={city && "personalDetails__form-input-selected"}
            />
          </div>
          <div className="pesonalDetails__dualInput-container">
            <label>state</label>
            <input
              type="text"
              onChange={() => setState(true)}
              className={state && "personalDetails__form-input-selected"}
            />
          </div>
        </div>
        <div className="personalDetails__dualInput">
          <div className="pesonalDetails__dualInput-container">
            <label>Post Code</label>
            <input
              type="number"
              onChange={() => setPostalCode(true)}
              className={postalCode && "personalDetails__form-input-selected"}
            />
          </div>
          <div className="pesonalDetails__dualInput-container">
            <label>Country</label>
            <input
              type="country"
              onChange={() => setCountry(true)}
              className={country && "personalDetails__form-input-selected"}
            />
          </div>
        </div>
        <button className="myProfile__save-button">Save</button>
      </form>
    </div>
  );
};

export default PersonalDetails;
