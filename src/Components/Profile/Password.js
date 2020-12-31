import React from "react";
import "./password.css";
import { Link } from "react-router-dom";

const Password = () => {
  return (
    <div className="password">
      <div className="password__heading">
        <h5>ChangePassword</h5>
        <p>
          Enable 2-factor authentication in
          <Link to="/security"> Security Settings</Link>
        </p>
      </div>
      <button className="password__button">Change Password</button>
    </div>
  );
};

export default Password;
