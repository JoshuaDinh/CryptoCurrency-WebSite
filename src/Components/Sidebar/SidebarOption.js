import React from "react";
import "./sidebar.css";

const SidebarOption = ({
  title,
  Icon,
  img,
  selected,
  open,
  openSidebar,
  arrowIcon,
}) => {
  return (
    <div
      onClick={() => openSidebar && openSidebar()}
      className={`sidebarOption ${selected && "selected"} ${
        open && "sidebarOption__open"
      }`}
    >
      {Icon && (
        <Icon
          className={
            arrowIcon ? "sidebarOption__arrowIcon" : "sidebarOption__icon"
          }
        ></Icon>
      )}
      {img && <img className="sidebarOption__img" src={img} />}
      {open && title}
    </div>
  );
};

export default SidebarOption;
