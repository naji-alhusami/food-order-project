import React, { useEffect, useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.js";
import $ from 'jquery';
import classes from "./Restaurants.module.css";

const Restaurants = (props) => {
  const sliderRef = useRef(null);

  useEffect(() => {
      $(sliderRef.current).not('.slick-initialized').slick(props.settings);
  }, []);

  return (
    <div ref={sliderRef} className={classes.slider}>
      {props.restaurants.map((restaurant) => (
        <div key={restaurant.id} className={classes.slide}>
          <img src={restaurant.logo} alt={restaurant.name} />
        </div>
      ))}
    </div>
  );
};
export default Restaurants;
