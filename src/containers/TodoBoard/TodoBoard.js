import React, { PureComponent } from "react";

/////////////

import "./TodoBoard.scss";

//////////////

import TodoList from "./TodoList/TodoList";
import Filter from "./Filter/Filter";

/////////////////

class TodoBoard extends PureComponent {
  state = {
    visibility: "all"
  };

  visibilitySwitchHandler = type => {
    this.setState(() => {
      return {
        visibility: type
      };
    });
  };

  render() {
    let {
      toggleTodoCompleteHandler,
      deleteTodoItemHandler,
      clearCompletedTodos,
      todos
    } = this.props;

    let filteredTodos = todos.filter(todo => {
      switch (this.state.visibility) {
        case "all":
          return true;
        case "active":
          return todo.completed === false;
        case "completed":
          return todo.completed === true;
        default:
          return true;
      }
    });

    return (
      <div className="TodoBoard">
        <TodoList
          todos={filteredTodos}
          toggleTodoCompleteHandler={toggleTodoCompleteHandler}
          deleteTodoItemHandler={deleteTodoItemHandler}
        />
        <Filter
          visibility={this.state.visibility}
          visibilitySwitchHandler={this.visibilitySwitchHandler}
          clearCompletedTodos={clearCompletedTodos}
        />
      </div>
    );
  }
}

export default React.memo(TodoBoard);
