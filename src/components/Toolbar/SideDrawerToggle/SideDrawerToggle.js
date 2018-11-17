import React from "react";

/////////////////////////

import "./SideDrawerToggle.scss";

/////////////////////////

const DrawerToggle = props => {
  return (
    <div onClick={props.toggle} className="DrawerToggle">
      <span />
      <span />
      <span />
    </div>
  );
};

export default DrawerToggle;
