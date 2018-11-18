import React from "react";

/////////////////////

import "./TodoItem.scss";

///////////////////////

const TodoItem = props => {
  let { todo, toggleTodoCompleteHandler } = props;

  return (
    <li className="TodoItem">
      <input
        type="checkbox"
        id={todo.id}
        onChange={() => {
          toggleTodoCompleteHandler(todo.id);
        }}
        defaultChecked={todo.completed}
      />
      <label htmlFor={todo.id} />
      <span>{todo.task}</span>
    </li>
  );
};

export default TodoItem;
