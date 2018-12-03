import React from "react";

/////////////////////

import "./Filter.scss";

////////////////////////

const Filter = props => {
  const { visibilitySwitchHandler, visibility, clearCompletedTodos } = props;

  return (
    <div className="Filter">
      <button
        onClick={() => {
          visibilitySwitchHandler("all");
        }}
        className={visibility === "all" ? "btn btn-sm active" : "btn btn-sm"}
      >
        All
      </button>
      <button
        onClick={() => {
          visibilitySwitchHandler("active");
        }}
        className={visibility === "active" ? "btn btn-sm active" : "btn btn-sm"}
      >
        Active
      </button>
      <button
        onClick={() => {
          visibilitySwitchHandler("completed");
        }}
        className={
          visibility === "completed" ? "btn btn-sm active" : "btn btn-sm"
        }
      >
        Completed
      </button>
      <button
        onClick={() => {
          clearCompletedTodos();
        }}
        className="btn btn-sm"
        style={{ color: "red" }}
      >
        Clear completed
      </button>
    </div>
  );
};

export default Filter;
