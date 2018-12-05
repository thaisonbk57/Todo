import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
//////////////////////////////////////////

import "./App.scss";

//////////////////////////////////////////

import Layout from "./HOC/Layout/Layout";
import TodoBuilder from "./containers/TodoBuilder/TodoBuilder";
import Page404 from "./pages/404/404";
import Login from "./pages/login/login";

//////////////////////////////////////////

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
          <Switch>
            <Route path="/" exact component={TodoBuilder} />
            <Route path="/signup" component={Login} />
            <Route component={Page404} />
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
