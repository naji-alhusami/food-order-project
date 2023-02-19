import React, { Fragment } from "react";
import BasketButton from "./BasketButton";

import foodImage from "../../images/Image1.jpg";
import appIcon from "../../images/app-icon.png";
import classes from "./Navbar.module.css";

const Navbar = (props) => {
  return (
    <Fragment>
      <nav className={classes.Navbar}>
        <div className={classes["icon-title"]}>
          <img src={appIcon} alt="app-icon" />
          <h1 className={classes.header}>FOOD2DOOR</h1>
        </div>
        <BasketButton showBasket={props.showBasket} />
      </nav>
      <div className={classes["food-image"]}>
        <img src={foodImage} alt="foodImage" />
      </div>
    </Fragment>
  );
};

export default Navbar;
