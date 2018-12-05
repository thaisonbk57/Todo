import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = props => {
  return (
    <div className="Navigation">
      <ul className="Navbar">
        <li className="NavItem">
          <NavLink className="NavLink" to="/" exact>
            Homepage
          </NavLink>
        </li>
        <li className="NavItem">
          <NavLink className="NavLink" to="/signup">
            Signup
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
