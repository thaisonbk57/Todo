import React, { Component } from "react";

/////////////////////////////////

import "./AddTodoForm.scss";

/////////////////////////////////

export default class AddTodoForm extends Component {
  state = {
    todo: {
      id: null,
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
    if (e.type === "click" || e.keyCode === 13) {
      this.props.addTodoHandler({
        ...this.state.todo,
        id: new Date().getTime()
      });

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
            className="form-control"
            onChange={e => {
              this.onInputChanged(e);
            }}
            onKeyDown={e => {
              this.submitHandler(e);
            }}
          />
          <button
            // using Timestamp as ID of new TodoItem
            onClick={e => {
              this.submitHandler(e);
            }}
          />
        </div>
      </div>
    );
  }
}
