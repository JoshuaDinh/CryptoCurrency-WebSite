import React from "react";
import "./search.css";
import SearchIcon from "@material-ui/icons/Search";
// import SettingsIcon from "@material-ui/icons/Settings";
// import Avatar from "@material-ui/core/Avatar";

const Search = ({ onFormSearch, coin, list }) => {
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
      {/* <div className="search__icons">
        <SettingsIcon />
        <Avatar />
      </div>{" "} */}
    </form>
  );
};

export default Search;
