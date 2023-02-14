import React, { Fragment } from "react";
import Navbar from "./components/Navbar/Navbar";
import CardsBenefits from "./components/Cards/CardBenefits";

function App() {
  return (
    <Fragment>
      <Navbar />
      <main>
        <CardsBenefits />
      </main>
    </Fragment>
  );
}

export default App;
