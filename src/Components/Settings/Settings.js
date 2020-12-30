import React from "react";
import "./settings.css";
import SettingsSelection from "./SettingsSelection";

const Settings = () => {
  return (
    <div className="settings">
      <SettingsSelection selection="Profile" />
      <SettingsSelection selection="Preferences" />
      <SettingsSelection selection="Security" />
      <SettingsSelection selection="Payment Methods" />
      <SettingsSelection selection="Crypto Addresses" />
    </div>
  );
};

export default Settings;
