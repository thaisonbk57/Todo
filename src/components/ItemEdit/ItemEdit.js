import React, { Component } from "react";

///////////////////////

import "./ItemEdit.scss";

///////////////////////

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

  render() {
    let { todo, updateTodoItemHandler } = this.props;

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
        <button
          onClick={() => {
            updateTodoItemHandler(todo.id, this.state.updatedTask);
          }}
        />
      </div>
    );
  }
}

export default ItemEdit;
