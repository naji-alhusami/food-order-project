import React, { Fragment } from "react";

import foodImage from "../../images/Image1.jpg";
import appIcon from "../../images/app-icon.png";
import classes from "./Navbar.module.css";

const Navbar = () => {
  return (
    <Fragment>
      <nav className={classes.Navbar}>
        <div className={classes["icon-title"]}>
          <img src={appIcon} alt="app-icon" />
          <h1 className={classes.header}>FOOD2DOOR</h1>
        </div>
        <button className={classes.button}>
          <span className={classes.icon}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
            </svg>
          </span>
          <span>MY BASKET</span>
          <span className={classes.badge}>0</span>
        </button>
      </nav>
      <div className={classes["food-image"]}>
        <img src={foodImage} alt="foodImage" />
      </div>
    </Fragment>
  );
};

export default Navbar;
