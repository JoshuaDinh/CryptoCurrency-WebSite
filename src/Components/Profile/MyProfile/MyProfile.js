import React, { useState } from "react";
import "./myProfile.css";
import MyProfileAvatar from "../ProfileAvatar/MyProfileAvatar";
import Password from "../Password/Password";

const MyProfile = () => {
  const [emailSelected, setEmailSelected] = useState(false);
  const [displayNameSelected, setDisplayNameSelected] = useState(false);

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
        <input
          type="text"
          onChange={() => setDisplayNameSelected(true)}
          className={displayNameSelected && "myProfile__form-input-selected"}
        />
        <label>Email Address</label>
        <input
          type="email"
          onChange={() => setEmailSelected(true)}
          className={emailSelected && "myProfile__form-input-selected"}
        />
        <button className="myProfile__save-button">Save</button>
      </form>
    </div>
  );
};

export default MyProfile;
