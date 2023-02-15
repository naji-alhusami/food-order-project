import React from "react";
import BasketCard from "./BasketCard";

import classes from "./Basket.module.css";

const Basket = () => {
  const basketOrders = (
    <ul className={classes['basket-meals']}>
      {[{ id: "o1", name: "burger", amount: 1, price: 70 }].map((order) => (
        <li>{order.name}</li>
      ))}
    </ul>
  );

  return (
    <BasketCard>
      {basketOrders}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>150</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']}>Close</button>
        <button className={classes.button}>Order</button>
      </div>
    </BasketCard>
  );
};

export default Basket;
