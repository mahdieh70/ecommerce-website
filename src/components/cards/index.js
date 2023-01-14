import React from "react";
import { useState } from "react";
import Modal from "../modal";
import { ModalContent } from "./modalContent";

import "./Cards.css";

const Cards = ({ productData }) => {
  const [showModal, setIsShowModal] = useState(false);

  const handleModalVisibility = () => {
    setIsShowModal((prev) => !prev);
  };

  return (
    <>
      <Modal width={900} isShow={showModal} onClose={handleModalVisibility}>
        <ModalContent
          image={productData.image}
          title={productData.title}
          price={productData.price}
          category={productData.category}
          description={productData.description}
        />
      </Modal>
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
