import React, { useState } from "react";
import "./signUp.css";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
import VisibilityIcon from "@material-ui/icons/Visibility";
import signup from "../../images/signup.svg";

const SignUp = () => {
  const [viewPasswordIcon, setViewPasswordIcon] = useState(false);
  const [viewPassword, setViewPassword] = useState(["password", "text"]);

  const handlePassword = () => {
    setViewPasswordIcon(!viewPasswordIcon);
  };

  return (
    <div className="signUp">
      <div className="signUp-bkg"></div>
      <form className="signUp__form">
        <div className="signUp__title">
          <h3>Sign Up</h3>
          <img src={signup} />
        </div>
        <div className="signUp__name">
          <label>Full Name:</label>
          <input placeholder="Full Name" type="text" />
        </div>

        <div className="signUp__email">
          <label>Email:</label>
          <input placeholder="Email" type="email" />
          <label style={{ fontSize: 14 }}>Verify Email*:</label>
          <input placeholder="Verify Email" type="email" />
        </div>

        <div className="signUp__password">
          <label onClick={() => handlePassword()}>
            Password:
            {viewPasswordIcon ? (
              <VisibilityIcon fontSize="small" />
            ) : (
              <VisibilityOffIcon fontSize="small" />
            )}
          </label>
          <input
            placeholder="Password"
            type={viewPasswordIcon ? viewPassword[1] : viewPassword[0]}
          />
          <label style={{ fontSize: 14 }} onClick={() => handlePassword()}>
            Verify PassWord*:
            {viewPasswordIcon ? (
              <VisibilityIcon fontSize="small" />
            ) : (
              <VisibilityOffIcon fontSize="small" />
            )}
          </label>
          <input
            placeholder="Verify Password`"
            type={viewPasswordIcon ? viewPassword[1] : viewPassword[0]}
          />
        </div>
        <button className="signUp__button">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;
