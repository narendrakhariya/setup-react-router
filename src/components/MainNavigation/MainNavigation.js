import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./MianNavigation.module.css";

const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink
              to="/" /* Absolute path */
              // to="" /* Relative path */
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              end //Added to remove active class from default when other link get active
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/products" /* Absolute path */
              // to="products" /* Relative path */
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Products
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
