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
      <button className="avatar__upload-button">Upload</button>
    </div>
  );
};

export default MyProfileAvatar;
