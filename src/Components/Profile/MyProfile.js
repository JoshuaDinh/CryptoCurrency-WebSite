import React from "react";
import "./myProfile.css";
import MyProfileAvatar from "./MyProfileAvatar";
import PersonalDetails from "./PersonalDetails";

const MyProfile = () => {
  return (
    <div className="myProfile">
      <h2>My Profile</h2>
      <MyProfileAvatar />
      <form className="myProfile__form">
        <label>Display Name</label>
        <input type="text" />
        <label>Email Address</label>
        <input type="text" />
        <button className="myProfile__save-button">Save</button>
      </form>
      <PersonalDetails />
    </div>
  );
};

export default MyProfile;
