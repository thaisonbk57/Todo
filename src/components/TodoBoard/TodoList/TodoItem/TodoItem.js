import React from "react";

/////////////////////

import "./TodoItem.scss";

///////////////////////

const TodoItem = props => {
  let { todo } = props;

  return (
    <li className="TodoItem">
      <input type="checkbox" id={todo.id} />
      <label htmlFor={todo.id} />
      <span>{todo.task}</span>
    </li>
  );
};

export default TodoItem;
