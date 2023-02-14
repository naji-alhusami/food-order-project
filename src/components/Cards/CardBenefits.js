import React from "react";
import AppBenefits from "./AppBenefits";

import classes from "./AppBenefits.module.css";
import discount from "../../images/discount.png";
import clock from "../../images/clock.avif";
import anytime from "../../images/anytime.PNG";

const CardsBenefits = () => {
  return (
    <div className={classes.cards}>
      <AppBenefits
        image={anytime}
        header="Seamless Process"
        text="FOOD2DOOR offers you freedom and choice to place an order at virtually any time, from anywhere."
      />
      <AppBenefits
        image={clock}
        header="Save Time"
        text="FOOD2DOOR offers you saves the time and resources typically spent on travelling to pick up a meal."
      />
      <AppBenefits
        image={discount}
        header="Perks & Options"
        text="FOOD2DOOR offers you offers you enticing promotions and limitless dining options."
      />
    </div>
  );
};

export default CardsBenefits;
