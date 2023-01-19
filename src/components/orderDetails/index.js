import React, { useContext } from "react";
import "./orderDetails.css";
import { cartContext } from "../../context/CartContextProvider";

const OrderDetails = ({ product, price, quantity }) => {
  const { state, dispatch } = useContext(cartContext);
  return (
    <>
      <div className="column">
        <div className="productRow">{product}</div>
        <div className="priceRow">{price} $</div>
        <div className="quantityRow">{quantity}</div>
      </div>
    </>
  );
};

export default OrderDetails;
