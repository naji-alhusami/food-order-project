import React, { useRef, useState, useContext } from "react";
import BasketContext from "../../store/BasketContext";
import Input from "../Reusable/Input";

import classes from "./Meal.module.css";

const Meal = ({ id, name, description, price }) => {
  const basket_context = useContext(BasketContext);
  const [enteredNumberIsValid, setEnteredNumberIsValid] = useState(true);
  const inputRef = useRef();

  const formSubmitHandler = (event) => {
    console.log(event);
    event.preventDefault();

    const enteredMealAmount = inputRef.current.value;
    const enteredMealAmountNumber= +enteredMealAmount;

    if (
      enteredMealAmount.trim().length === 0 ||
      enteredMealAmount < 1 ||
      enteredMealAmount > 5
    ) {
      setEnteredNumberIsValid(false);
      return;
    }

    basket_context.addItem({
      id: id,
      name: name,
      amount: enteredMealAmountNumber,
      price: price,
    });
  };

  return (
    <li className={classes.meal}>
      <div>
        <h3>{name}</h3>
        <div className={classes.description}>{description}</div>
        <div className={classes.price}>{price} TL</div>
      </div>
      <div>
        <form className={classes.form} onSubmit={formSubmitHandler}>
          <Input
            ref={inputRef}
            label="Amount"
            input={{
              id: "amount_" + id,
              type: "number",
              min: "1",
              step: "1",
              defaultValue: "1",
            }}
          />
          <button>Add to Basket</button>
          {!enteredNumberIsValid && <p>Please enter number between 1 and 5!</p>}
        </form>
      </div>
    </li>
  );
};

export default Meal;
