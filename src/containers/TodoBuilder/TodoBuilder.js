import React, { Component } from "react";

///////////////////////////////////

import "./TodoBuilder.scss";

///////////////////////////////////

import AddTodoForm from "./../../components/AddTodoForm/AddTodoForm";

export default class TodoBuilder extends Component {
  state = {
    todos: [
      { id: 1, task: "do homework", completed: false },
      { id: 2, task: "go shopping", completed: true },
      { id: 3, task: "appointment with dentist", completed: false },
      { id: 4, task: "walk the dog", completed: false }
    ]
  };

  addTodoHandler = todo => {
    if (!!todo) {
      this.setState(state => {
        return {
          todos: [...state.todos, todo]
        };
      });
    } else return;
  };

  render() {
    return (
      <div className="TodoBuilder">
        <AddTodoForm addTodoHandler={this.addTodoHandler} />
      </div>
    );
  }
}
