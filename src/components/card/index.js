import React, { useContext } from "react";

import Cards from "../cards";
import "./Card.css";
import { productsContext } from "../../context/ProductContextProvider";

const Card = () => {
  const products = useContext(productsContext);

  return (
    <>
      <div className="productsContainer">
        {products.map((item) => (
          <Cards key={item.id} productData={item} />
        ))}
      </div>
    </>
  );
};

export default Card;
