import React from "react";
import "./settings.css";
import SettingsSelection from "./SettingsSelection";

const Settings = () => {
  return (
    <div className="settings">
      <SettingsSelection selection="Profile" path="/Profile" />
      <SettingsSelection selection="Preferences" path="/Preferences" />
      <SettingsSelection selection="Security" path="/Security" />
      <SettingsSelection selection="Payment Methods" path="/PaymentMethods" />
    </div>
  );
};
export default Settings;
