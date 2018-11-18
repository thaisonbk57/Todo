import React from "react";

/////////////////////

import "./TodoItem.scss";

///////////////////////

const TodoItem = props => {
  let { todo, toggleTodoCompleteHandler, deleteTodoItemHandler } = props;

  return (
    <li className="TodoItem">
      <div className="TodoContent">
        <input
          type="checkbox"
          id={todo.id}
          onChange={() => {
            toggleTodoCompleteHandler(todo.id);
          }}
          defaultChecked={todo.completed}
        />
        <label htmlFor={todo.id} />
        <span className="task">{todo.task}</span>
        <span
          className="delete"
          onClick={() => {
            deleteTodoItemHandler(todo.id);
          }}
        />
      </div>
    </li>
  );
};

export default TodoItem;
