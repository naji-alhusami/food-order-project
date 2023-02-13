import React, {Fragment} from "react";

import foodImage from '../../images/Image1.jpg'
import classes from './Navbar.module.css';

const Navbar = () => {
  return (
    <Fragment>
      <nav className={classes.Navbar}>
        <h1 className={classes.header}>Food Order</h1>
        <button className={classes.cartButton}>My Order</button>
      </nav>
      <div className={classes['food-image']}>
        <img src={foodImage} alt="foodImage" />
      </div>
    </Fragment>
  );
};

export default Navbar;
