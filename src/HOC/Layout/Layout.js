import React, { Component } from "react";

/////////////////

import "./Layout.scss";

////////////////////

import Toolbar from "./../../components/Toolbar/Toolbar";
import SideDrawer from "./../../components/SideDrawer/SideDrawer";

/////////////////////

export default class Layout extends Component {
  render() {
    return (
      <div className="Layout">
        <SideDrawer />
        <Toolbar />
      </div>
    );
  }
}
