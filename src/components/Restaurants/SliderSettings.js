import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.js";
import SliderContent from "./SliderContent";
import Mac from "../../images/Mac.jpg";
import BK from "../../images/BK.png";
import Popeys from "../../images/Popeys.png";
import KFC from "../../images/KFC.jpg";
import Pizza from "../../images/Pizza.avif";
import pizzahot from "../../images/pizzahot.png";


import classes from "./Slider.module.css";

const SliderSettings = () => {

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

  return (
    <div className={classes["slider-container"]}>
      <h1 className={classes.restaurants}>Choose Your Favorite Restaurant</h1>
      <SliderContent restaurants={restaurants} settings={settings} />
    </div>
  );
};

export default SliderSettings;
