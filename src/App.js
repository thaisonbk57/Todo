import React, { Component } from "react";

//////////////////////////////////////////

import "./App.scss";

//////////////////////////////////////////

import Layout from "./HOC/Layout/Layout";
import TodoBuilder from "./containers/TodoBuilder/TodoBuilder";

//////////////////////////////////////////

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
          <TodoBuilder />
        </Layout>
      </div>
    );
  }
}

export default App;
