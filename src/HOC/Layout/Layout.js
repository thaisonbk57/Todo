import React, { Component } from "react";

/////////////////

import "./Layout.scss";

////////////////////

import Toolbar from "./../../components/Toolbar/Toolbar";
import SideDrawer from "./../../components/SideDrawer/SideDrawer";

/////////////////////

export default class Layout extends Component {
  state = {
    showSideDrawer: false
  };

  toggleSideDrawerHandler = () => {
    this.setState({
      showSideDrawer: !this.state.showSideDrawer
    });
  };

  render() {
    return (
      <div className="Layout">
        <SideDrawer show={this.state.showSideDrawer} />
        <Toolbar toggle={this.toggleSideDrawerHandler} />
      </div>
    );
  }
}
