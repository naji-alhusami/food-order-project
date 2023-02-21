import React from "react";

const BasketContext = React.createContext({
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  deleteItem: (id) => {},
  clearBasket: () => {},
});

export default BasketContext;
