import React from "react";

/////////////

import "./TodoBoard.scss";

//////////////

import TodoList from "./TodoList/TodoList";

/////////////////

const TodoBoard = props => {
  return (
    <div className="TodoBoard">
      <TodoList todos={props.todos} />
      <div>Filter</div>
    </div>
  );
};

export default TodoBoard;
