import React, { useEffect, useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.js";
import RightArrow from "../../images/RightArrow.svg";
import LeftArrow from "../../images/LeftArrow.svg";
import $ from "jquery";
import classes from "./Slider.module.css";

const SliderContent = (props) => {
  const sliderRef = useRef(null);

  useEffect(() => {
    $(sliderRef.current).not(".slick-initialized").slick(props.settings);
  }, []);

  const hendlePrevClick = () => {
    $(sliderRef.current).slick("slickPrev");
  };

  const hendleNextClick = () => {
    $(sliderRef.current).slick("slickNext");
  };

  return (
    <>
      <div className={classes.slider} ref={sliderRef}>
        {props.restaurants.map((restaurant) => (
          <div key={restaurant.id} className={classes.slide}>
            <img src={restaurant.logo} alt={restaurant.name} />
          </div>
        ))}
      </div>
      <div className={classes["slider-arrows"]}>
        <img
          src={LeftArrow}
          alt="LeftArrow"
          className={classes.arrow}
          onClick={hendlePrevClick}
        />
        <img
          src={RightArrow}
          alt="RightArrow"
          className={classes.arrow}
          onClick={hendleNextClick}
        />
      </div>
    </>
  );
};
export default SliderContent;
