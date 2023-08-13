import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
// import CardsBenefits from "./components/AppAdvantages/CardBenefits";
// import SliderSettings from "./components/Restaurants/SliderSettings";
// import MealsOffered from "./components/Meals/MealsOffered";
import Basket from "./components/Basket/Basket";
// import Footer from "./components/Footer/Footer";
import BasketProvider from "./store/BasketProvider";

function App() {

  const [basketVisible, setBasketIsVisible] = useState(false);

  const showBasketHandler = () => {
    setBasketIsVisible(true);
  }

  const hideBasketHandler = () => {
    setBasketIsVisible(false);
  }

  return (
    <BasketProvider>
      {basketVisible && <Basket hideBasket={hideBasketHandler} />}
      <Navbar showBasket={showBasketHandler} />
      {/* <main>
        <SliderSettings />
        <MealsOffered />
        <CardsBenefits />
      </main>
      <Footer /> */}
    </BasketProvider>
  );
}

export default App;
