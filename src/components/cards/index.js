import React from "react";
import { useState } from "react";
import Modal from "../modal";

import "./Cards.css";

const Cards = ({ productData }) => {
  const [showModal, setIsShowModal] = useState(false);

  const handleModalVisibility = () => {
    console.log("sdfsdfsdf");
    setIsShowModal((prev) => !prev);
  };

  return (
    <>
      <Modal
        isShow={showModal}
        onClose={handleModalVisibility}
        image={productData.image}
        title={productData.title}
        price={productData.price}
        category={productData.category}
        description={productData.description}
      ></Modal>
      <div className="container">
        <div className="products-area">
          <img src={productData.image} className="product-image" alt="pic" />
          <button onClick={handleModalVisibility} className="quickView">
            Quick View
          </button>
        </div>
        <div className="productsDetail">
          <p className="title">{productData.title}</p>
          <p className="price">{productData.price} $</p>
        </div>
      </div>
    </>
  );
};

export default Cards;
