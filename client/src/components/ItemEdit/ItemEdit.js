import React, { Component } from "react";

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
    let { todo, toggleEditForm } = this.props;

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
            //@TODO: update Todo Item (_id, newContent)
            toggleEditForm();
          }}
        />
      </div>
    );
  }
}

export default ItemEdit;
