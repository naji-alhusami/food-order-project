import React, { Fragment, useContext, useState } from "react";
import BasketItem from "./BasketItem";
import BasketCard from "./BasketCard";
import BasketContext from "../../store/BasketContext";
import Order from "./Order";

import classes from "./Basket.module.css";

const Basket = (props) => {
  const [orderForm, setOrderForm] = useState(false);
  const [isSubmit, setIsSubmit] = useState(false);
  const [didSubmit, setDidSubmit] = useState(false);
  const basket_context = useContext(BasketContext);

  const basketItemAddHandler = (item) => {
    basket_context.addItem({ ...item, amount: 1 });
  };

  const basketItemDeleteHandler = (id) => {
    basket_context.deleteItem(id);
  };

  const orderHandler = () => {
    setOrderForm(true);
  };

  const submitOrderHandler = async (userData) => {
    setIsSubmit(true);
    await fetch(
      "https://react-hooks-9cae4-default-rtdb.firebaseio.com/orders.json",
      {
        method: "POST",
        body: JSON.stringify({
          user: userData,
          order: basket_context.items,
        }),
      }
    );
    setIsSubmit(false);
    setDidSubmit(true);
    basket_context.clearBasket();
  };

  const basketOrders = (
    <ul className={classes["basket-meals"]}>
      {basket_context.items.map((order) => (
        <BasketItem
          key={order.id}
          name={order.name}
          amount={order.amount}
          price={order.price}
          addItem={() => basketItemAddHandler(order)}
          deleteItem={() => basketItemDeleteHandler(order.id)}
        />
      ))}
    </ul>
  );

  const BasketContent = (
    <Fragment>
      {basketOrders}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{basket_context.totalAmount} TL</span>
      </div>
      {orderForm && (
        <Order hideBasket={props.hideBasket} orderSubmit={submitOrderHandler} />
      )}
      {!orderForm && (
        <div className={classes.actions}>
          <button className={classes["button--alt"]} onClick={props.hideBasket}>
            Close
          </button>
          {basket_context.items.length > 0 && (
            <button className={classes.button} onClick={orderHandler}>
              Order
            </button>
          )}
        </div>
      )}
    </Fragment>
  );

  const loadingSendingData = <p>Sending Our Data...</p>;
  const successSendingData = (
    <Fragment>
      <p>Successfully sent the order!</p>
      <div className={classes.actions}>
        <button className={classes.button} onClick={props.hideBasket}>
          Close
        </button>
      </div>
    </Fragment>
  );

  return (
    <BasketCard hideBasket={props.hideBasket}>
      {!isSubmit && !didSubmit && BasketContent}
      {isSubmit && loadingSendingData}
      {!isSubmit && didSubmit && successSendingData}
    </BasketCard>
  );
};

export default Basket;
