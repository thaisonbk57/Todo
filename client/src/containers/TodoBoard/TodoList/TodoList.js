import React from "react";

//////////////////////////

import TodoItem from "./TodoItem/TodoItem";

/////////////////////////////
const TodoList = props => {
  let {
    todos,
    toggleTodoCompleteHandler,
    deleteTodoItemHandler,
    updateTodoItemHandler
  } = props;

  return (
    <ul className="TodoList">
      {todos.map(todo => {
        return (
          <TodoItem
            toggleTodoCompleteHandler={toggleTodoCompleteHandler}
            deleteTodoItemHandler={deleteTodoItemHandler}
            updateTodoItemHandler={updateTodoItemHandler}
            key={todo.id}
            todo={todo}
          />
        );
      })}
    </ul>
  );
};

export default TodoList;
