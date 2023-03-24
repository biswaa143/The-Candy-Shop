import React from "react";

// import CandyContext from "../../store/candy-context";
import CandyItems from "./CandyItems";
import "./ShowCandy.css";
const ShowCandy = ({ candies }) => {
  const candyItems = candies.map((item) => {
    return (
      <CandyItems
        key={item.candy}
        name={item.candy}
        description={item.description}
        price={item.price}
        quantity={item.quantity}
      />
    );
  });

  return (
    <div className="items">
      <table className="table">
        <tr>
          <th>Name</th>
          <th>Description</th>
          <th>Price</th>
          <th>Quantity</th>
        </tr>
        {candies.length < 1 && <div> no data found</div>}
        {candyItems}
      </table>
    </div>
  );
};

export default ShowCandy;
