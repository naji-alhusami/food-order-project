import React, { Fragment } from "react";
import Navbar from "./components/Navbar/Navbar";
import CardsBenefits from "./components/Cards/CardBenefits";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <Fragment>
      <Navbar />
      <main>
        <CardsBenefits />
      </main>
      <Footer />
    </Fragment>
  );
}

export default App;
