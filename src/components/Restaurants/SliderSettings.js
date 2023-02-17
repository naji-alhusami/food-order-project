import React, { useEffect, useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.js";
import $ from "jquery";
// import Restaurants from "./Restaurants";
import Mac from "../../images/Mac.jpg";
import BK from "../../images/BK.png";
import Popeys from "../../images/Popeys.png";
import KFC from "../../images/KFC.jpg";
import Pizza from "../../images/Pizza.avif";
import pizzahot from "../../images/pizzahot.png";
import RightArrow from "../../images/RightArrow.svg";
import LeftArrow from "../../images/LeftArrow.svg";

import classes from "./Restaurants.module.css";

const SliderSettings = () => {
  const sliderRef = useRef(null);

  const restaurants = [
    {
      id: 1,
      name: "Restaurant 1",
      logo: Mac,
    },
    {
      id: 2,
      name: "Restaurant 2",
      logo: BK,
    },
    {
      id: 3,
      name: "Restaurant 3",
      logo: Popeys,
    },
    {
      id: 4,
      name: "Restaurant 4",
      logo: KFC,
    },
    {
      id: 5,
      name: "Restaurant 5",
      logo: Pizza,
    },
    {
      id: 6,
      name: "Restaurant 6",
      logo: pizzahot,
    },
  ];

  const settings = {
    centerMode: true,
    centerPadding: "60px",
    slidesToShow: 5,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 1,
        },
      },
    ],
  };

  const hendlePrevClick = () =>{
    $(sliderRef.current).slick("slickPrev");
  }

  const hendleNextClick = () =>{
    $(sliderRef.current).slick("slickNext");
  }

  useEffect(() => {
    $(sliderRef.current).not(".slick-initialized").slick(settings);
  }, []);

  return (
    <div className={classes["slider-container"]}>
      <h1 className={classes.restaurants}>Choose Your Favorite Restaurant</h1>
      <div className={classes.slider} ref={sliderRef}>
        {restaurants.map((restaurant) => (
          <div key={restaurant.id} className={classes.slide}>
            <img src={restaurant.logo} alt={restaurant.name} />
          </div>
        ))}
      </div>
      <div className={classes["slider-arrows"]}>
        <img src={LeftArrow} alt="LeftArrow" className={classes.arrow} onClick={hendlePrevClick} />
        <img src={RightArrow} alt="RightArrow" className={classes.arrow} onClick={hendleNextClick} />
      </div>
    </div>
  );
};

export default SliderSettings;
