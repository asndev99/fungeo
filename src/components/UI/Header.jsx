import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="container header">
      <div className="grid navbar-grid">
        <div className="Logo">
          <NavLink to="/">
            <h1>WorldAtlas</h1>
          </NavLink>
        </div>
        <nav>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/About">About</NavLink>
            </li>
            <li>
              <NavLink to="/country">Country</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
