import React from "react";

//////////////////////////

import "./TodoList.scss";

//////////////////////////

import TodoItem from "./TodoItem/TodoItem";

/////////////////////////////
const TodoList = props => {
  let { todos } = props;

  return (
    <ul className="TodoList">
      {todos.map(todo => {
        return <TodoItem key={todo.id} todo={todo} />;
      })}
    </ul>
  );
};

export default TodoList;
