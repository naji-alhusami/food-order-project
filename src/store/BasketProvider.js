import React, { useReducer } from "react";
import BasketContext from "./BasketContext";

const defaultBasketState = {
  items: [],
  totalAmount: 0,
};

const basketReducer = (state, action) => {
  if (action.type === "ADD") {
    const newTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;

    const itemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const existingBasketItem = state.items[itemIndex];

    let newItems;
    if (existingBasketItem) {
      const newItem = {
        ...existingBasketItem,
        amount: existingBasketItem.amount + action.item.amount,
      };
      newItems = [...state.items];
      newItems[itemIndex] = newItem;
      console.log(newItem);
      console.log(newItems);
    } else {
      newItems = state.items.concat(action.item);
    }

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
