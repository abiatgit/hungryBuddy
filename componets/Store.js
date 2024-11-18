import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Itemlist from "./Itemlist";
import { emptyCart } from "../utils/cartSlice";

const Store = () => {
  const dispatch = useDispatch();
  const handleEmptyCart = () => {
    dispatch(emptyCart());
  };
  const cart = useSelector((store) => store.cart.items);
  return (
    <div className="m-5 text-center items-center">
      <h1 className="font-bold">Cart</h1>
      <button onClick={handleEmptyCart}>Embty cart</button>
      <div className="text-center w-6/12 mx-auto">
        {cart.length > 0 ? <Itemlist item={cart} /> : <h1>cart Embty</h1>}
      </div>
    </div>
  );
};

export default Store;
