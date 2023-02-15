import React from "react";

import classes from "./AppBenefits.module.css";

const AppBenefits = ({ image, header, text }) => {
  return (
    <div className={classes.summary}>
      <img src={image} alt="cardsphoto" style={{width:200, height:200}} />
      <h2>{header}</h2>
      <p>{text}</p>
    </div>
  );
};
export default AppBenefits;
