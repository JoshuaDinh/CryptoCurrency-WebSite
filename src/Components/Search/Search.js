import React, { useState, useEffect } from "react";
import "./search.css";
import { SettingsMenu } from "./SettingsMenu/SettingsMenu";
import SearchIcon from "@material-ui/icons/Search";
import SettingsIcon from "@material-ui/icons/Settings";
import Avatar from "@material-ui/core/Avatar";
import { Link } from "react-router-dom";

const Search = ({ onFormSearch, coin, list }) => {
  const [settingsMenu, setSettingsMenu] = useState(false);

  return (
    <form className="form">
      <div className="form__inputContainer">
        <div className="form__icon">
          <SearchIcon fontSize="large" />
        </div>
        <input
          onChange={(e) => onFormSearch(e.target.value)}
          placeholder="Search all assets..."
          type="text"
          value={coin}
          list={"coins"}
        />{" "}
      </div>

      {coin.length > 1 && (
        <datalist id="coins">
          <select>
            {list?.map((item) => {
              return <option>{item.id}</option>;
            })}
          </select>
        </datalist>
      )}

      {settingsMenu && <SettingsMenu setSettingsMenu={setSettingsMenu} />}

      <SettingsIcon
        onClick={() => setSettingsMenu(!settingsMenu)}
        className="search__icons"
        fontSize="large"
      />

      <Link to="./profile" className="search__icons">
        <Avatar />
      </Link>
    </form>
  );
};

export default Search;
