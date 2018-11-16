import React, { Component } from "react";

/////////////////

import "./Layout.scss";

////////////////////

import Toolbar from "./../../components/Toolbar/Toolbar";

/////////////////////

export default class Layout extends Component {
  render() {
    return (
      <div className="Layout">
        <Toolbar />
      </div>
    );
  }
}
