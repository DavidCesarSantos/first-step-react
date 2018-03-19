import React from "react";
import { NavLink } from "react-router-dom";
import { LinearProgress } from "material-ui/Progress";
import "./style.css";

export default () => {
  return (
    <nav>
      <ul class="navigation-list">
        <li>
          <NavLink to="/" activeClassName="current">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" activeClassName="current">
            About
          </NavLink>
        </li>
      </ul>

      {/* <LinearProgress mode="indeterminate" /> */}
    </nav>
  );
};
