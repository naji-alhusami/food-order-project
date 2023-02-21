import React, { useContext } from "react";
import BasketItem from "./BasketItem";
import BasketCard from "./BasketCard";
import BasketContext from "../../store/BasketContext";

import classes from "./Basket.module.css";

const Basket = (props) => {
  const basket_context = useContext(BasketContext);

  const basketItemAddHandler = (item) => {};

  const basketItemDeleteHandler = (id) => {};

  const basketOrders = (
    <ul className={classes["basket-meals"]}>
      {basket_context.items.map((order) => (
        <BasketItem
          key={order.id}
          name={order.name}
          amount={order.amount}
          price={order.price}
          addItem={() => basketItemAddHandler}
          deleteItem={() => basketItemDeleteHandler}
        />
      ))}
    </ul>
  );

  return (
    <BasketCard hideBasket={props.hideBasket}>
      {basketOrders}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{basket_context.totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.hideBasket}>
          Close
        </button>
        {basket_context.items.length > 0 && (
          <button className={classes.button}>Order</button>
        )}
      </div>
    </BasketCard>
  );
};

export default Basket;
