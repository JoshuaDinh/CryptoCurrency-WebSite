import React, { useState } from "react";
import "./settingsmenu.css";
import CloseIcon from "@material-ui/icons/Close";
import { Link } from "react-router-dom";

export const SettingsMenu = ({ setSettingsMenu }) => {
  return (
    <ul className="settingsMenu">
      <li className="settingsMenu__close-icon">
        <CloseIcon onClick={() => setSettingsMenu(false)} />
      </li>
      <Link to="./Profile">
        <li className="settingsMenu__item">My Profile</li>
      </Link>
      <Link to="./Preferences">
        <li className="settingsMenu__item">Preferences</li>
      </Link>
      <Link to="./Security">
        <li className="settingsMenu__item">Security</li>
      </Link>
      <Link to="./PaymentMethods">
        <li className="settingsMenu__item">Payment Methods</li>
      </Link>
      <Link to="./CryptoAddresses">
        <li className="settingsMenu__item">Crypto Addresses</li>
      </Link>
    </ul>
  );
};
