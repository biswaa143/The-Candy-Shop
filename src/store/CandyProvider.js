import React, { useReducer } from "react";

import CandyContext from "./candy-context";
const defaultCandyState = {
  items: [],
};
const candyReducer = (state, action) => {
  //for adding itmes
  if (action.type === "ADD") {
    const existingCandyItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    console.log("exit", existingCandyItemIndex);
    const existingCandyItem = state.items[existingCandyItemIndex];
    let updatedItems;
    if (existingCandyItemIndex !== -1) {
      //id items exist already
      console.log("yes there", existingCandyItem);
      const updateItem = {
        ...existingCandyItem,
        quantity: existingCandyItem.quantity + action.item.quantity,
      };
      updatedItems = [...state.items];
      updatedItems[existingCandyItemIndex] = updateItem;
    } else {
      //adding new item for the first time
      updatedItems = state.items.concat(action.item);
    }
    return { items: updatedItems };
  } //Add action end here
  return defaultCandyState;
};
const CandyProvider = (props) => {
  const [candyState, dispatchCandyAction] = useReducer(candyReducer, defaultCandyState);
  const addItemHandler = (item) => {
    console.log("add handler", item.quantity);
    dispatchCandyAction({ type: "ADD", item: item });
  };
  const candyContext = {
    items: candyState.items,
    addItem: addItemHandler,
  };
  console.log("check ", candyContext.items);
  return (
    <CandyContext.Provider value={candyContext}>
      {props.children}
    </CandyContext.Provider>
  );
};

export default CandyProvider;