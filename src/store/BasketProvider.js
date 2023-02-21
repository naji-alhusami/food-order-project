import React, { useReducer } from "react";
import { act } from "react-dom/test-utils";
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
    } else {
      newItems = state.items.concat(action.item);
    }

    return {
      items: newItems,
      totalAmount: newTotalAmount,
    };
  }

  if (action.type === "DELETE") {
    const itemIndex = state.items.findIndex((item) => item.id === action.id);
    const existingBasketItem = state.items[itemIndex];
    const newTotalAmount = state.totalAmount - existingBasketItem.price;
    let newItems;
    if (existingBasketItem.amount === 1) {
      newItems = state.items.filter((item) => item.id !== action.id);
    } else {
      const newItem = {
        ...existingBasketItem,
        amount: existingBasketItem.amount - 1,
      };
      newItems = [...state.items];
      newItems[itemIndex] = newItem;
    }

    return {
      items: newItems,
      totalAmount: newTotalAmount,
    };
  }

  if (action.type === "CLEAR") {
    return defaultBasketState;
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

  const clearBasketHandler = () => {
    dispatchBasketAction({ type: "CLEAR" });
  };

  const basketContext = {
    items: basketState.items,
    totalAmount: basketState.totalAmount,
    addItem: addItemHandler,
    deleteItem: deleteItemHandler,
    clearBasket: clearBasketHandler,
  };

  return (
    <BasketContext.Provider value={basketContext}>
      {props.children}
    </BasketContext.Provider>
  );
};

export default BasketProvider;
