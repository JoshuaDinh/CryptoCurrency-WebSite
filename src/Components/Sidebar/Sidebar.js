import React, { useState } from "react";
import "./sidebar.css";
import SidebarOption from "./SidebarOption";
import HomeIcon from "@material-ui/icons/Home";
import DataUsageIcon from "@material-ui/icons/DataUsage";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import AnnouncementIcon from "@material-ui/icons/Announcement";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import MenuIcon from "@material-ui/icons/Menu";

import { Link } from "react-router-dom";

const Sidebar = ({ setSignUpModal }) => {
  const [selected, setSelected] = useState("");
  const [open, setOpen] = useState(false);
  const [mobileNav, setMobileNav] = useState(false);

  const openSidebar = () => {
    setOpen(!open);
    console.log(open);
  };
  const openMobileNav = () => {
    setMobileNav(!mobileNav);
    setOpen(true);
  };

  return (
    <div className="sidebar">
      <div
        className={`sidebar__container ${!open && "closedSidebar__container"}`}
      >
        <Link>
          <SidebarOption
            open={open}
            openSidebar={openSidebar}
            Icon={!open ? ArrowForwardIcon : ArrowBackIcon}
            arrowIcon
          />
        </Link>
        <Link onClick={() => setSelected("Dashboard")} to="/crypto">
          <SidebarOption
            open={open}
            selected={selected === "Dashboard" ? selected : null}
            title="Dashboard"
            Icon={HomeIcon}
          />
        </Link>
        <Link onClick={() => setSelected("News")} to="/News">
          <SidebarOption
            open={open}
            selected={selected === "News"}
            title="News"
            Icon={AnnouncementIcon}
          />
        </Link>
        <Link onClick={() => setSelected("Exchanges")} to="/Exchanges">
          <SidebarOption
            open={open}
            selected={selected === "Exchanges"}
            title="Exchanges"
            Icon={AccessTimeIcon}
          />
        </Link>
        <Link onClick={() => setSelected("account")} to="/Profile">
          <SidebarOption
            open={open}
            selected={selected === "account"}
            title="Account"
            Icon={AccountBoxIcon}
          />
        </Link>
        <br />
        <hr />
        <div onClick={() => setSignUpModal(true)}>
          <SidebarOption
            open={open}
            selected={selected === "SignUp"}
            title="Sign-Up"
            Icon={AccountBoxIcon}
          />
        </div>
        <Link onClick={() => setSelected("SignOut")} to="/SignOut">
          <SidebarOption
            open={open}
            selected={selected === "SignOut"}
            title="Sign-Out"
            Icon={ExitToAppIcon}
          />
        </Link>
      </div>

      {/* Mobile Nav */}
      <div onClick={() => openMobileNav()} className="nav__mobile">
        <SidebarOption Icon={MenuIcon} />
      </div>
      {mobileNav && (
        <div className="nav__mobile-container">
          <Link onClick={() => setSelected("Dashboard")} to="/crypto">
            <SidebarOption
              open={open}
              selected={selected === "Dashboard" ? selected : null}
              title="Dashboard"
              Icon={HomeIcon}
            />
          </Link>{" "}
          <Link onClick={() => setSelected("DataTable")} to="/Data">
            <SidebarOption
              open={open}
              selected={selected === "DataTable"}
              title="Data Table"
              Icon={DataUsageIcon}
            />
          </Link>{" "}
          <Link onClick={() => setSelected("News")} to="/News">
            <SidebarOption
              open={open}
              selected={selected === "News"}
              title="News"
              Icon={AnnouncementIcon}
            />
          </Link>
          <Link onClick={() => setSelected("Exchanges")} to="/Exchanges">
            <SidebarOption
              open={open}
              selected={selected === "Exchanges"}
              title="Exchanges"
              Icon={AccessTimeIcon}
            />
          </Link>
          <Link onClick={() => setSelected("MyAccount")} to="/MyAccount">
            <SidebarOption
              open={open}
              selected={selected === "myAccount"}
              title="My Account"
              Icon={AccountBoxIcon}
            />
          </Link>
          <Link onClick={() => setSignUpModal(true)}>
            <SidebarOption
              open={open}
              selected={selected === "SignUp"}
              title="Sign-Up"
              Icon={AccountBoxIcon}
            />
          </Link>
          <Link onClick={() => setSelected("SignOut")} to="/SignOut">
            <SidebarOption
              open={open}
              selected={selected === "SignOut"}
              title="Sign-Out"
              Icon={ExitToAppIcon}
            />
          </Link>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
