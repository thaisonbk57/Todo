import React from "react";

////////////////////

const Backdrop = props => {
  return (
    <div
      style={{ display: props.show ? "block" : "none" }}
      className="Backdrop"
      onClick={props.toggle}
    />
  );
};

export default Backdrop;
