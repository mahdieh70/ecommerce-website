import React from "react";

//style
import "./orderDetails.css";

const OrderDetails = ({ product, price, quantity }) => {
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
