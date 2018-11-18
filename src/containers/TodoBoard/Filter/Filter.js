import React from "react";

/////////////////////

import "./Filter.scss";

////////////////////////

const Filter = props => {
  const { visibilitySwitchHandler, visibility } = props;

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
    </div>
  );
};

export default Filter;
