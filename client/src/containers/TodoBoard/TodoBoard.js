import React, { PureComponent } from "react";

import TodoList from "./TodoList/TodoList";
import Filter from "./Filter/Filter";

class TodoBoard extends PureComponent {
  state = {
    visibility: "all"
  };

  render() {
    let { clearCompletedTodos } = this.props;

    return (
      <div className="TodoBoard">
        <TodoList />
        <Filter visibility={this.state.visibility} />
      </div>
    );
  }
}

export default React.memo(TodoBoard);
