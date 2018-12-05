import React, { Component } from "react";
import { connect } from "react-redux";

import { updateTodo } from "./../../store/actions";

class ItemEdit extends Component {
  state = {
    updatedTask: ""
  };

  componentDidMount() {
    this.setState({
      updatedTask: this.props.todo.task
    });
  }

  onChangeHandler = e => {
    let value = e.target.value;

    this.setState(() => {
      return {
        updatedTask: value
      };
    });
  };

  submitUpdate = () => {
    this.props.updateTodo(this.props.todo._id, {
      ...this.props.todo,
      task: this.state.updatedTask
    });

    this.props.toggleEditForm();
  };

  render() {
    return (
      <div className="ItemEdit">
        <input
          value={this.state.updatedTask}
          onChange={e => {
            this.onChangeHandler(e);
          }}
          type="text"
          className="form-control"
        />
        <button onClick={this.submitUpdate} />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateTodo: (id, updatedTodo) => {
      dispatch(updateTodo(id, updatedTodo));
    }
  };
};

// @TODO: how to pass updatedTodo to axios.put to update the todoItem

export default connect(
  null,
  mapDispatchToProps
)(ItemEdit);
