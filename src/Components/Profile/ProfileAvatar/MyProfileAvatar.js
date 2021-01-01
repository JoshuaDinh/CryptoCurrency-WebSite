import React from "react";
import "./myProfileAvatar.css";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

const MyProfileAvatar = () => {
  return (
    <div className="myProfile__avatar">
      <AccountCircleIcon className="avatar__icon" />
      <div className="avatar__title">
        <h5>Change Picture</h5>
        <p>Maz file size is 20Mb</p>
      </div>
      <input
        className="myProfile__avatar-upload-btn"
        type="file"
        id="actual-btn"
      />
      <label className="avatar__upload-button" for="actual-btn">
        Upload
      </label>
    </div>
  );
};

export default MyProfileAvatar;
