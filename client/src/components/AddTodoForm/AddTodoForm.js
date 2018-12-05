import React, { Component } from "react";
import { connect } from "react-redux";

import { addTodo, fetchTodos } from "./../../store/actions";

class AddTodoForm extends Component {
  state = {
    todo: {
      task: "",
      completed: false
    }
  };

  onInputChanged = e => {
    const target = e.target;
    let value = target.value;

    this.setState(state => {
      return {
        todo: { ...state.todo, task: value }
      };
    });
  };

  submitHandler = e => {
    // click || press Enter key
    if (e.type === "click" || e.keyCode === 13) {
      this.props.addTodo(this.state.todo);

      // this.props.fetchTodos();

      // reset the form
      this.setState(state => {
        return {
          todo: { ...state.todo, task: "" }
        };
      });
    }
  };

  render() {
    return (
      <div className="AddTodoForm">
        <div className="form-group">
          <input
            value={this.state.todo.task}
            type="text"
            placeholder="Enter new task..."
            className="form-control"
            onChange={e => {
              this.onInputChanged(e);
            }}
            onKeyDown={e => {
              this.submitHandler(e);
            }}
          />
          <button
            onClick={e => {
              this.submitHandler(e);
            }}
          />
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addTodo: todo => {
      dispatch(addTodo(todo));
    },
    fetchTodos: () => {
      dispatch(fetchTodos());
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(AddTodoForm);
