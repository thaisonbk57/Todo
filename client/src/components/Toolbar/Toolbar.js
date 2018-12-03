import React from "react";

//////////////////////////

import "./Toolbar.scss";

///////////////////////////

import SideDrawerToggle from "./SideDrawerToggle/SideDrawerToggle";

///////////////////////////

import Logo from "./../UI/Logo/Logo";

const Toolbar = props => {
  return (
    <div className="Toolbar">
      <SideDrawerToggle toggle={props.toggle} />
      <Logo />
    </div>
  );
};

export default Toolbar;
