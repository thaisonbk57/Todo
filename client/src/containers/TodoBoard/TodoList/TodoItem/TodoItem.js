import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteTodo } from "./../../../../store/actions";

import ItemEdit from "./../../../../components/ItemEdit/ItemEdit";

// create point-of-time for catch dbClick event both on mobile and desktop
let touchtime = 0;

class TodoItem extends Component {
  state = {
    editFormShow: false
  };

  toggleEditForm = () => {
    this.setState(() => {
      return {
        editFormShow: !this.state.editFormShow
      };
    });
  };

  render() {
    let { todo } = this.props;

    return this.state.editFormShow ? (
      <ItemEdit todo={todo} toggleEditForm={this.toggleEditForm} />
    ) : (
      <li className="TodoItem">
        <div className="TodoContent">
          <input
            type="checkbox"
            id={todo._id}
            onChange={() => {
              //@TODO: toggle completeItem
            }}
            defaultChecked={todo.completed}
          />
          <label htmlFor={todo._id} />
          <span
            onClick={() => {
              // if the difference between 2 clicks < 500ms => dbClick
              if (new Date().getTime() - touchtime < 300) {
                this.toggleEditForm();
              }
              touchtime = new Date().getTime();
            }}
            className="task"
          >
            {todo.task}
          </span>
          <span
            className="delete"
            onClick={() => {
              this.props.deleteTodo(todo._id);
            }}
          />
        </div>
      </li>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    deleteTodo: todoId => {
      dispatch(deleteTodo(todoId));
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(TodoItem);
