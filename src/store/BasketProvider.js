import React, { useReducer } from "react";
import BasketContext from "./BasketContext";

const defaultBasketState = {
  items: [],
  totalAmount: 0,
};

const basketReducer = (state, action) => {
  if (action.type === "ADD") {
    const newItems = state.items.concat(action.item);
    const newTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;
    return {
      items: newItems,
      totalAmount: newTotalAmount,
    };
  }

  return defaultBasketState;
};

const BasketProvider = (props) => {
  const [basketState, dispatchBasketAction] = useReducer(
    basketReducer,
    defaultBasketState
  );

  const addItemHandler = (item) => {
    dispatchBasketAction({ type: "ADD", item: item });
  };

  const deleteItemHandler = (id) => {
    dispatchBasketAction({ type: "DELETE", id: id });
  };

  const basketContext = {
    items: basketState.items,
    totalAmount: basketState.totalAmount,
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
