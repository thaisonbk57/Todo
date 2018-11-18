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

  render() {
    let {
      toggleTodoCompleteHandler,
      deleteTodoItemHandler,
      todos
    } = this.props;

    return (
      <div className="TodoBoard">
        <TodoList
          todos={todos}
          toggleTodoCompleteHandler={toggleTodoCompleteHandler}
          deleteTodoItemHandler={deleteTodoItemHandler}
        />
        <Filter />
      </div>
    );
  }
}

export default TodoBoard;
