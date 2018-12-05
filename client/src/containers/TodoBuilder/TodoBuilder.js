import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchTodos } from "./../../store/actions";

import AddTodoForm from "./../../components/AddTodoForm/AddTodoForm";
import TodoBoard from "./../TodoBoard/TodoBoard";

class TodoBuilder extends Component {
  componentDidMount() {
    this.props.fetchTodos();
  }

  render() {
    let todoBoard = (
      <h2
        style={{
          textAlign: "center",
          color: "#575757",
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)"
        }}
      >
        Add new Todo
      </h2>
    );

    if (!!this.props.todos) {
      if (this.props.todos.length > 0) {
        todoBoard = <TodoBoard />;
      }
    }

    return (
      <div className="TodoBuilder">
        <AddTodoForm />
        {todoBoard}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchTodos: () => {
      dispatch(fetchTodos());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoBuilder);
