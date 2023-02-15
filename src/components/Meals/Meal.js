import React from "react";
import Input from "../Reusable/Input";

import classes from "./Meal.module.css";

const Meal = ({ id, name, description, price }) => {
  return (
    <li className={classes.meal}>
      <div>
        <h3>{name}</h3>
        <div className={classes.description}>{description}</div>
        <div className={classes.price}>{price} TL</div>
      </div>
      <div>
        <form className={classes.form}>
          <Input
            label="Amount"
            input={{
              id: "amount_" + id,
              type: "number",
              min: "1",
              max: "5",
              step: "1",
              defaultValue: "1",
            }}
          />
          <button>Add to Basket</button>
        </form>
      </div>
    </li>
  );
};

export default Meal;
