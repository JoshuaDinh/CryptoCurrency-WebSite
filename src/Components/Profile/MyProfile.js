import React from "react";
import "./myProfile.css";
import MyProfileAvatar from "./MyProfileAvatar";
import Password from "./Password";

const MyProfile = () => {
  return (
    <div className="myProfile">
      <h2>My Profile</h2>
      <hr></hr>
      <div className="myProfile__top-section">
        <MyProfileAvatar />
        <Password />
      </div>
      <form className="myProfile__form">
        <label>Display Name</label>
        <input type="text" />
        <label>Email Address</label>
        <input type="text" />
        <button className="myProfile__save-button">Save</button>
      </form>
    </div>
  );
};

export default MyProfile;
