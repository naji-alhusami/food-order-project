import React, { useState, useEffect } from "react";
import Card from "../Reusable/Card";
import Meal from "./Meal";

import classes from "./MealsOffered.module.css";

const MealsOffered = () => {
  const [mealsOffered, setMealsOffered] = useState([]);

  useEffect(() => {
    const fetchMeals = async () => {
      const response = await fetch(
        "https://react-hooks-9cae4-default-rtdb.firebaseio.com/meals.json"
      );
      const responseData = await response.json();
      const mealsData = [];

      for (const key in responseData) {
        mealsData.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price,
        });
      }
      setMealsOffered(mealsData);
    };
    fetchMeals();
  }, []);

  const allMeals = mealsOffered.map((meal) => {
    return (
      <Meal
        key={meal.id}
        id={meal.id}
        name={meal.name}
        description={meal.description}
        price={meal.price}
      />
    );
  });

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{allMeals}</ul>
      </Card>
    </section>
  );
};

export default MealsOffered;
