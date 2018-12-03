import React, { Component } from "react";

/////////////////////

import "./TodoItem.scss";

///////////////////////

import ItemEdit from "./../../../../components/ItemEdit/ItemEdit";

///////////////////////

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
    let {
      todo,
      toggleTodoCompleteHandler,
      deleteTodoItemHandler,
      updateTodoItemHandler
    } = this.props;

    return this.state.editFormShow ? (
      <ItemEdit
        todo={todo}
        updateTodoItemHandler={updateTodoItemHandler}
        toggleEditForm={this.toggleEditForm}
      />
    ) : (
      <li className="TodoItem">
        <div className="TodoContent">
          <input
            type="checkbox"
            id={todo.id}
            onChange={() => {
              toggleTodoCompleteHandler(todo.id);
            }}
            defaultChecked={todo.completed}
          />
          <label htmlFor={todo.id} />
          <span
            // TODO: changed the event to catch double Click event on touch devices
            onClick={() => {
              // if the difference between 2 clicks < 500ms => dbClick
              if (new Date().getTime() - touchtime < 500) {
                this.toggleEditForm();
              }
              // update new touchTime
              touchtime = new Date().getTime();
            }}
            className="task"
          >
            {todo.task}
          </span>
          <span
            className="delete"
            onClick={() => {
              deleteTodoItemHandler(todo.id);
            }}
          />
        </div>
      </li>
    );
  }
}

export default TodoItem;
