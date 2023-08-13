// import React, { useState, useEffect } from "react";
// import Card from "../Reusable/Card";
// import Meal from "./Meal";

// import classes from "./MealsOffered.module.css";

// const MealsOffered = () => {
//   const [mealsOffered, setMealsOffered] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [fetchError, setFetchError] = useState();

//   useEffect(() => {
//     const fetchMeals = async () => {
//       const response = await fetch(
//         "https://react-hooks-9cae4-default-rtdb.firebaseio.com/meals.json"
//       );

//       if (!response.ok) {
//         throw new Error("Fetch Went Wrong!");
//       }

//       const responseData = await response.json();
//       const mealsData = [];

//       for (const key in responseData) {
//         mealsData.push({
//           id: key,
//           name: responseData[key].name,
//           description: responseData[key].description,
//           price: responseData[key].price,
//         });
//       }
//       setMealsOffered(mealsData);
//       setLoading(false);
//     };

//     fetchMeals().catch((error) => {
//       setLoading(false);
//       setFetchError(error.message);
//     });
//   }, []);

//   if (loading) {
//     return (
//       <section className={classes.loading}>
//         <h1>Loading...</h1>
//       </section>
//     );
//   }

//   if (fetchError) {
//     return (
//       <section className={classes.error}>
//         <h1>{fetchError}</h1>
//       </section>
//     );
//   }

//   const allMeals = mealsOffered.map((meal) => {
//     return (
//       <Meal
//         key={meal.id}
//         id={meal.id}
//         name={meal.name}
//         description={meal.description}
//         price={meal.price}
//       />
//     );
//   });

//   return (
//     <section className={classes.meals}>
//       <Card>
//         <ul>{allMeals}</ul>
//       </Card>
//     </section>
//   );
// };

// export default MealsOffered;
