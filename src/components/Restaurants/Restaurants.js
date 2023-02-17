import React, { useEffect, useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.js";
import RightArrow from "../../images/RightArrow.svg";
import LeftArrow from "../../images/LeftArrow.svg";
import $ from "jquery";
import classes from "./Restaurants.module.css";

const Restaurants = (props) => {
  const sliderRef = useRef(null);

  useEffect(() => {
    $(sliderRef.current).not(".slick-initialized").slick(props.settings);
  }, []);

  // return (
  //   <div className={classes.slider}>
  //     <div ref={sliderRef} className={classes["slider-container"]}>
  //       {props.restaurants.map((restaurant) => (
  //         <div key={restaurant.id} className={classes.slide}>
  //           <img src={restaurant.logo} alt={restaurant.name} />
  //         </div>
  //       ))}
  //     </div>
  //     <button className={classes['left-arrow']}></button>
  //     <button className={classes['right-arrow']}></button>
  //   </div>
  // );
  return (
    <div ref={sliderRef} className={classes.slider}>
      <img src={LeftArrow} alt="left arrow" className={`${classes.arrow} left`}  />
      {props.restaurants.map((restaurant) => (
        <div key={restaurant.id} className={classes.slide}>
          <img src={restaurant.logo} alt={restaurant.name} />
        </div>
      ))}
      <img src={RightArrow} alt="right arrow" className={`${classes.arrow} right`} />
    </div>
  );
};
export default Restaurants;
