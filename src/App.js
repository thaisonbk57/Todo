import React, { Component } from "react";

//////////////////////////////////////////

import "./App.scss";

//////////////////////////////////////////

import Layout from "./HOC/Layout/Layout";

//////////////////////////////////////////

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout />
      </div>
    );
  }
}

export default App;
