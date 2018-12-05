import React, { Component } from "react";

import Navigation from "./../Navigation/Navigation";

export default class SideDrawer extends Component {
  render() {
    return (
      <div className={this.props.show ? "SideDrawer Open" : "SideDrawer"}>
        <h1
          style={{
            color: "white",
            textAlign: "center",
            marginTop: 50,
            fontWeight: 300
          }}
        >
          <Navigation />
        </h1>
      </div>
    );
  }
}
