import React from "react";
import { connect } from "react-redux";

import TodoItem from "./TodoItem/TodoItem";

const TodoList = props => {
  return (
    <ul className="TodoList">
      {props.todos.map(todo => {
        return <TodoItem key={todo._id} todo={todo} />;
      })}
    </ul>
  );
};

const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};

export default connect(mapStateToProps)(TodoList);
