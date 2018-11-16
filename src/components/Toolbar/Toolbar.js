import React from "react";

//////////////////////////

import "./Toolbar.scss";

///////////////////////////

import DrawerToggle from "./DrawerToggle/DrawerToggle";

///////////////////////////

import Logo from "./../UI/Logo/Logo";

const Toolbar = props => {
  return (
    <div className="Toolbar">
      <DrawerToggle />
      <Logo />
    </div>
  );
};

export default Toolbar;
