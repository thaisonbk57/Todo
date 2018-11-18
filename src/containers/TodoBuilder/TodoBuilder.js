import React, { Component } from "react";

///////////////////////////////////

import "./TodoBuilder.scss";

///////////////////////////////////

import AddTodoForm from "./../../components/AddTodoForm/AddTodoForm";
import TodoBoard from "./../TodoBoard/TodoBoard";

////////////////////////////////////

export default class TodoBuilder extends Component {
  state = {
    // todos: []
    todos: [
      { id: 1, task: "go shopping", completed: true },
      { id: 2, task: "walk the dog", completed: false }
    ]
  };

  addTodoHandler = todo => {
    if (todo.task.trim()) {
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

  clearCompletedTodos = () => {
    let newTodos = this.state.todos.filter(todo => todo.completed === true);

    this.setState(() => ({
      todo: newTodos
    }));
  };

  render() {
    return (
      <div className="TodoBuilder">
        <AddTodoForm addTodoHandler={this.addTodoHandler} />
        {this.state.todos.length > 0 ? (
          <TodoBoard
            todos={this.state.todos}
            toggleTodoCompleteHandler={this.toggleTodoCompleteHandler}
            deleteTodoItemHandler={this.deleteTodoItemHandler}
            clearCompletedTodos={this.clearCompletedTodos}
          />
        ) : (
          <h2
            style={{
              textAlign: "center",
              color: "#575757",
              position: "absolute",
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)"
            }}
          >
            Add new Todo
          </h2>
        )}
      </div>
    );
  }
}
