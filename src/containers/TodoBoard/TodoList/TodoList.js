import React from "react";

//////////////////////////

import "./TodoList.scss";

//////////////////////////

import TodoItem from "./TodoItem/TodoItem";

/////////////////////////////
const TodoList = props => {
  let { todos, toggleTodoCompleteHandler, deleteTodoItemHandler } = props;

  return (
    <ul className="TodoList">
      {todos.map(todo => {
        return (
          <TodoItem
            toggleTodoCompleteHandler={toggleTodoCompleteHandler}
            deleteTodoItemHandler={deleteTodoItemHandler}
            key={todo.id}
            todo={todo}
          />
        );
      })}
    </ul>
  );
};

export default TodoList;
