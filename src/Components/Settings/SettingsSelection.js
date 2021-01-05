import React from "react";
import { Link } from "react-router-dom";

// split url and match with path to determine highlighted selection - will need to change once live

const SettingsSelection = ({ selection, path }) => {
  return (
    <Link
      to={path}
      className={`settings__selection ${
        document.URL.split("3000")[1] === path &&
        "settings__selection-selected "
      }`}
    >
      {selection}
    </Link>
  );
};

export default SettingsSelection;
