import React from "react";
const CandyContext = React.createContext({
  items: [],
  addItem: (item) => {},
});
export default CandyContext;
