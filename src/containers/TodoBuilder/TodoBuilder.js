import React, { Component } from "react";

///////////////////////////////////

import "./TodoBuilder.scss";

///////////////////////////////////

import AddTodoForm from "./../../components/AddTodoForm/AddTodoForm";

export default class TodoBuilder extends Component {
  render() {
    return (
      <div className="TodoBuilder">
        <AddTodoForm />
      </div>
    );
  }
}
