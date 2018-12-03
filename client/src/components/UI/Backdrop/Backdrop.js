import React from "react";

////////////////////

import "./Backdrop.scss";

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
