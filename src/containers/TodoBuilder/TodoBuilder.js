import React, { Component } from "react";

///////////////////////////////////

import "./TodoBuilder.scss";

///////////////////////////////////

import AddTodoForm from "./../../components/AddTodoForm/AddTodoForm";
import TodoBoard from "./../../components/TodoBoard/TodoBoard";

////////////////////////////////////

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

  toggleTodoHandler = id => {
    let newTodos = this.state.todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, completed: true };
      } else return todo;
    });

    this.setState(state => {
      return {
        ...state,
        todos: newTodos
      };
    });
  };

  render() {
    return (
      <div className="TodoBuilder">
        <AddTodoForm addTodoHandler={this.addTodoHandler} />
        <TodoBoard todos={this.state.todos} />
      </div>
    );
  }
}
