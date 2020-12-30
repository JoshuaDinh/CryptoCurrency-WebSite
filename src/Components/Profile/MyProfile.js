import React from "react";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import "./myProfile.css";

const MyProfile = () => {
  return (
    <div className="myProfile">
      <h2>My Profile</h2>
      <div className="myProfile__avatar">
        <AccountCircleIcon className="avatar__icon" />
        <div className="avatar__title">
          <h5>Change Picture</h5>
          <p>Maz file size is 20Mb</p>
        </div>
        <button className="avatar__upload-button">Upload</button>
      </div>
      <div className="myProfile__input">
        <label>Display Name</label>
        <input type="text" />
      </div>
      <div className="myProfile__input">
        <label>Email Address</label>
        <input type="text" />
      </div>
    </div>
  );
};

export default MyProfile;
