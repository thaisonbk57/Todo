import React from "react";

/////////////

import "./TodoBoard.scss";

//////////////

import TodoList from "./TodoList/TodoList";

/////////////////

const TodoBoard = props => {
  let { toggleTodoCompleteHandler, todos } = props;

  return (
    <div className="TodoBoard">
      <TodoList
        todos={todos}
        toggleTodoCompleteHandler={toggleTodoCompleteHandler}
      />
      <div>Filter</div>
    </div>
  );
};

export default TodoBoard;
