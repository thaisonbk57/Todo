import React, { Component } from "react";

///////////////////////////////////

import "./TodoBuilder.scss";

///////////////////////////////////

import AddTodoForm from "./../../components/AddTodoForm/AddTodoForm";
import TodoBoard from "./../../components/TodoBoard/TodoBoard";

////////////////////////////////////

export default class TodoBuilder extends Component {
  state = {
    todos: []
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

  toggleTodoCompleteHandler = id => {
    let newTodos = this.state.todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
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
        <TodoBoard
          todos={this.state.todos}
          toggleTodoCompleteHandler={this.toggleTodoCompleteHandler}
        />
      </div>
    );
  }
}
