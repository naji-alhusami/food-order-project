import React from "react";
import Restaurants from "./Restaurants";

import classes from "./Restaurants.module.css";

const SliderSettings = () => {
  const restaurants = [
    {
      id: 1,
      name: "Restaurant 1",
      logo: "restaurant1.jpg",
    },
    {
      id: 2,
      name: "Restaurant 2",
      logo: "restaurant2.jpg",
    },
    {
      id: 3,
      name: "Restaurant 3",
      logo: "restaurant3.jpg",
    },
    {
      id: 4,
      name: "Restaurant 4",
      logo: "restaurant4.jpg",
    },
    {
      id: 5,
      name: "Restaurant 5",
      logo: "restaurant5.jpg",
    },
    {
      id: 6,
      name: "Restaurant 6",
      logo: "restaurant6.jpg",
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
    <div>
      <h1 className={classes.restaurants}>Choose Your Favorite Restaurant</h1>
      <Restaurants restaurants={restaurants} settings={settings} />
    </div>
  );
};

export default SliderSettings;
