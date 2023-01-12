import React from "react";

import "./Cards.css";

const Cards = ({ productData }) => {
  return (
    <div className="container">
      <div className="products-area">
        <img src={productData.image} className="product-image" alt="pic" />
        <button className="quickView">Quick View</button>
      </div>
      <div className="productsDetail">
        <p className="title">{productData.title}</p>
        <p className="price">{productData.price} $</p>
      </div>
    </div>
  );
};

export default Cards;
