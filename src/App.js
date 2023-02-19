import React, { Fragment, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import CardsBenefits from "./components/AppAdvantages/CardBenefits";
import SliderSettings from "./components/Restaurants/SliderSettings";
import MealsOffered from "./components/Meals/MealsOffered";
import Basket from "./components/Basket/Basket";
import Footer from "./components/Footer/Footer";

function App() {

  const [basketVisible, setBasketIsVisible] = useState(false);

  const showBasketHandler = () => {
    setBasketIsVisible(true);
  }

  const hideBasketHandler = () => {
    setBasketIsVisible(false);
  }

  return (
    <Fragment>
      {basketVisible && <Basket hideBasket={hideBasketHandler} />}
      <Navbar showBasket={showBasketHandler} />
      <main>
        <SliderSettings />
        <MealsOffered />
        <CardsBenefits />
      </main>
      <Footer />
    </Fragment>
  );
}

export default App;
