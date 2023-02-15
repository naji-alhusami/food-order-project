import React, { Fragment } from "react";
import Navbar from "./components/Navbar/Navbar";
import CardsBenefits from "./components/AppAdvantages/CardBenefits";
import MealsOffered from "./components/Meals/MealsOffered";
import Basket from "./components/Basket/Basket";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <Fragment>
      <Basket />
      <Navbar />
      <main>
        <CardsBenefits />
        <MealsOffered />
      </main>
      <Footer />
    </Fragment>
  );
}

export default App;
