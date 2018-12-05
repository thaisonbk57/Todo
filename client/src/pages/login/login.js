import React, { Component } from "react";

import "./login.scss";

export default class Auth extends Component {
  state = {
    username: "",
    password: ""
  };

  onChangedHandler = e => {
    const value = e.target.value;
    const field = e.target.name;
    this.setState({
      [field]: value
    });
  };

  submitHandler = e => {
    e.preventDefault();
  };

  render() {
    return (
      <div className="Auth">
        <form onSubmit={this.submitHandler}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              required
              id="username"
              name="username"
              className="form-control"
              value={this.state.username}
              onChange={this.onChangedHandler}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              required
              className="form-control"
              value={this.state.password}
              onChange={this.onChangedHandler}
            />
          </div>
          <input className="btn btn-primary" type="submit" value="Login" />
        </form>
      </div>
    );
  }
}
