import React from "react";
import { Link } from "react-router-dom";

const SettingsSelection = ({ selection, path }) => {
  return (
    <Link to={path} className="settings__selection">
      {selection}
    </Link>
  );
};

export default SettingsSelection;
