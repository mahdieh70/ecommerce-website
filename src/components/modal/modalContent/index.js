import React from "react";
import "./ModalContent.css";

const ModalContent = ({
  onClose,
  title,
  image,
  price,
  category,
  description,
  children,
}) => {
  return (
    <div className="modal-container">
      <div className="image-container">
        <img src={image} alt="product" />
      </div>
      <div className="closeModal" onClick={onClose}>
        <i className="fa-solid fa-xmark"></i>
      </div>
      <div className="detailsContainer">
        <h3>{title}</h3>
        <p>
          <span>category: </span>
          {category}
        </p>
        <p>
          <span>price: </span>
          {price} $
        </p>
        <p className="text">
          <span>description: </span>
          {description}
        </p>
        <div className="countContainer">
          <div className="buttons">
            <span className="mines">-</span>
            <span className="quantity">0</span>
            <span className="plus">+</span>
          </div>
          <button className="addToCart">Add to cart</button>
        </div>
      </div>

      <div>{children}</div>
    </div>
  );
};

export { ModalContent };
