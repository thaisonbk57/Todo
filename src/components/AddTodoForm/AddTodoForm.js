import React, { Component } from "react";

/////////////////////////////////

import "./AddTodoForm.scss";

/////////////////////////////////

export default class AddTodoForm extends Component {
  state = {
    task: ""
  };

  onInputChanged = e => {
    const target = e.target;
    let value = target.value;

    this.setState(() => {
      return {
        task: value
      };
    });
  };

  render() {
    return (
      <div className="AddTodoForm">
        <div className="form-group">
          <input
            value={this.state.task}
            type="text"
            className="form-control"
            onChange={e => {
              this.onInputChanged(e);
            }}
          />
          <button />
        </div>
      </div>
    );
  }
}
