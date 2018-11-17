import React, { Component } from "react";

/////////////////////////////////

import "./AddTodoForm.scss";

/////////////////////////////////

export default class AddTodoForm extends Component {
  render() {
    return (
      <div className="AddTodoForm">
        <div className="form-group">
          <input type="text" className="form-control" />
          <button />
        </div>
      </div>
    );
  }
}
