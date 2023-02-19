import React from "react";
import BasketContext from "./BasketContext";

const BasketProvider = (props) => {
  const addItemHandler = (item) => {};

  const deleteItemHandler = (id) => {};

  const basketContext = {
    items: [],
    totalAmount: 0,
    addItem: addItemHandler,
    deleteItem: deleteItemHandler,
  };

  return (
    <BasketContext.Provider value={basketContext}>
      {props.children}
    </BasketContext.Provider>
  );
};

export default BasketProvider;
