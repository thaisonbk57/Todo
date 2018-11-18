import React from "react";

/////////////

import "./TodoBoard.scss";

//////////////

import TodoList from "./TodoList/TodoList";

/////////////////

const TodoBoard = props => {
  let { toggleTodoCompleteHandler, deleteTodoItemHandler, todos } = props;

  return (
    <div className="TodoBoard">
      <TodoList
        todos={todos}
        toggleTodoCompleteHandler={toggleTodoCompleteHandler}
        deleteTodoItemHandler={deleteTodoItemHandler}
      />
      <div>Filter</div>
    </div>
  );
};

export default TodoBoard;
