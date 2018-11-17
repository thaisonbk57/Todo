import React, { Component } from "react";

/////////////////

import "./Layout.scss";

////////////////////

import Toolbar from "./../../components/Toolbar/Toolbar";
import SideDrawer from "./../../components/SideDrawer/SideDrawer";
import Backdrop from "./../../components/UI/Backdrop/Backdrop";

/////////////////////

export default class Layout extends Component {
  state = {
    showSideDrawer: false,
    showBackdrop: false
  };

  toggleSideDrawerHandler = () => {
    this.setState({
      showSideDrawer: !this.state.showSideDrawer,
      showBackdrop: !this.state.showBackdrop
    });
  };

  render() {
    return (
      <div className="Layout">
        <SideDrawer show={this.state.showSideDrawer} />
        <Toolbar toggle={this.toggleSideDrawerHandler} />
        <Backdrop
          toggle={this.toggleSideDrawerHandler}
          show={this.state.showBackdrop}
        />
      </div>
    );
  }
}
