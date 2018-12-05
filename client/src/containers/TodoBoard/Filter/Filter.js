import React from "react";

/////////////////////

const Filter = props => {
  const { visibility } = props;

  return (
    <div className="Filter">
      <button
        onClick={() => {
          //@TODO: filter function 'all'
        }}
        className={visibility === "all" ? "btn btn-sm active" : "btn btn-sm"}
      >
        All
      </button>
      <button
        onClick={() => {
          //@TODO: filter function 'active'
        }}
        className={visibility === "active" ? "btn btn-sm active" : "btn btn-sm"}
      >
        Active
      </button>
      <button
        onClick={() => {
          //@TODO: filter function 'completed'
        }}
        className={
          visibility === "completed" ? "btn btn-sm active" : "btn btn-sm"
        }
      >
        Completed
      </button>
      <button
        onClick={() => {
          //@TODO: clear all todo items
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
