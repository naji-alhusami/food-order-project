import React, { Fragment } from "react";
import Navbar from "./components/Navbar/Navbar";
import CardsBenefits from "./components/AppAdvantages/CardBenefits";
import SliderSettings from "./components/Restaurants/SliderSettings";
// import MealsOffered from "./components/Meals/MealsOffered";
// import Basket from "./components/Basket/Basket";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <Fragment>
      {/* <Basket /> */}
      <Navbar />
      <main>
        {/* <MealsOffered /> */}
        <SliderSettings />
        <CardsBenefits />
      </main>
      <Footer />
    </Fragment>
  );
}

export default App;
