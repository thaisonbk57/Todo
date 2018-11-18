import React, { Component } from "react";

/////////////

import "./TodoBoard.scss";

//////////////

import TodoList from "./TodoList/TodoList";
import Filter from "./Filter/Filter";

/////////////////

class TodoBoard extends Component {
  state = {
    visibility: "all"
  };

  visibilitySwitchHandler = type => {
    this.setState(() => {
      return {
        visibility: type
      };
    });
  };

  render() {
    let {
      toggleTodoCompleteHandler,
      deleteTodoItemHandler,
      todos
    } = this.props;

    let filteredTodos = todos.filter(todo => {
      switch (this.state.visibility) {
        case "all":
          return true;
        case "active":
          return todo.completed === false;
        case "completed":
          return todo.completed === true;
        default:
          return true;
      }
    });

    return (
      <div className="TodoBoard">
        <TodoList
          todos={filteredTodos}
          toggleTodoCompleteHandler={toggleTodoCompleteHandler}
          deleteTodoItemHandler={deleteTodoItemHandler}
        />
        <Filter visibilitySwitchHandler={this.visibilitySwitchHandler} />
      </div>
    );
  }
}

export default TodoBoard;
