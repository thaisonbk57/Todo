import React, { Component } from "react";

///////////////////////////////////

import "./TodoBuilder.scss";

///////////////////////////////////

import AddTodoForm from "./../../components/AddTodoForm/AddTodoForm";
import TodoBoard from "./../../components/TodoBoard/TodoBoard";

////////////////////////////////////

export default class TodoBuilder extends Component {
  state = {
    // todos: []
    todos: [{ id: 1, task: "go shopping", completed: false }]
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

  deleteTodoItemHandler = id => {
    let newTodos = this.state.todos.filter(todo => todo.id !== id);

    this.setState(() => {
      return {
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
          deleteTodoItemHandler={this.deleteTodoItemHandler}
        />
      </div>
    );
  }
}
