import React, { useEffect, useState } from "react";

// import CandyContext from "../../store/candy-context";
import ShowCandy from "./ShowCandy";
//getting the values of local storage becasue when the component reredner it will overwride with emepty array
const getDetaFormLs = () => {
  const data = localStorage.getItem("candy");
  if (data) {
    return JSON.parse(data);
  } else {
    return [];
  }
};
const CandyForm = () => {
  // const amountInputRef = useRef();
  // const medcnt = useContext(MediContext);
  const [candies, setCandies] = useState(getDetaFormLs());
  const [candy, setCandy] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, Setquantity] = useState("");
  const addItemHandler = (e) => {
    e.preventDefault();
    //preventing dublicates items to push
    let updatedItems;
    let quan = +quantity;
    const existingCandyItemIndex = candies.findIndex(
      (item) => item.id === candy
    );
    const existingCandy = candies[existingCandyItemIndex];
    if (existingCandyItemIndex !== -1) {
      console.log(typeof quan);
      const updateitem = {
        ...existingCandy,
        quantity: +existingCandy.quantity + quan,
      };
      updatedItems = [...candies];
      updatedItems[existingCandyItemIndex] = updateitem;
      setCandies(updatedItems);
    } else {
      let Candy = {
        id: candy,
        candy,
        description,
        price,
        quantity,
      };
      setCandies([...candies, Candy]);
    }
  };
  //savng data to locak storage
  useEffect(() => {
    localStorage.setItem("candy", JSON.stringify(candies));
  }, [candies]);
  return (
    <>
      <form className="form" onSubmit={addItemHandler}>
        <label htmlFor="">Candy Name:</label>
        <input
          name="candy"
          type="text"
          required
          onChange={(e) => setCandy(e.target.value)}
          value={candy}
        />
        <label>Description:</label>
        <input
          name="description"
          type="text"
          required
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        />
        <label htmlFor="">Price:</label>
        <input
          name="price"
          type="number"
          required
          onChange={(e) => setPrice(e.target.value)}
          value={price}
        />
        <label>Quantity</label>
        <input
          type="number"
          className="number"
          min={1}
          required
          onChange={(e) => Setquantity(e.target.value)}
          value={quantity}
        />
        <button>Add Candy</button>
      </form>
      <ShowCandy candies={candies} />
    </>
  );
};

export default CandyForm;