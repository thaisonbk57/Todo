import React, { Component } from "react";

//////////////////////////

import "./SideDrawer.scss";

export default class SideDrawer extends Component {
  render() {
    return (
      <div className={this.props.show ? "SideDrawer Open" : "SideDrawer"}>
        Side
      </div>
    );
  }
}
