import React from "react";
import Card from "../Reusable/Card";
import Meal from "./Meal";

import classes from "./MealsOffered.module.css";

const OFFERED_MEALS = [
  {
    id: "o1",
    name: "Mushroom Burger",
    description:
      "One or more patties made out of mushroom as a replacement, instead of the traditionally used ground meat.",
    price: 70,
  },
  {
    id: "o2",
    name: "Neapolitan pizza",
    description:
      "Buffalo mozzarella (produced from the milk of Italian Mediterranean buffalo)",
    price: 105,
  },
  {
    id: "o3",
    name: "Chicken Curry",
    description:
      "Chicken and vegetables, or just vegetables, in a sauce containing hot spices.",
    price: 90,
  },
  {
    id: "o4",
    name: "Salad",
    description:
      "varieties of lettuce, garden cress and watercress, endives, cabbage, spinach, escarole, romaine (cos), arugula, and fresh herbs.",
    price: 45,
  },
];

const MealsOffered = () => {
  const allMeals = OFFERED_MEALS.map((meal) => {
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
