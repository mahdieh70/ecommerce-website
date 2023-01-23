import React, { useEffect, useState } from "react";

//َApi
import axios from "axios";

//component
import Cards from "../cards";

//style
import "./Card.css";

const Card = () => {
  const [products, setProducts] = useState([]);
  const [visible, setVisible] = useState(8);

  useEffect(() => {
    axios.get("http://localhost:8000/products").then((response) => {
      setProducts(response.data);
    });
  }, []);

  const showMoreItems = () => {
    if (visible >= products.length) return;
    setVisible((prevValue) => prevValue + 8);
  };

  const isButtonVisible = visible < products.length;

  return (
    <>
      <div className="productsContainer">
        <div className="itemsContainer">
          {products.slice(0, visible).map((item) => (
            <Cards key={item.id} productData={item} />
          ))}
        </div>
        {isButtonVisible ? (
          <div className="loadMoreContainer">
            <button onClick={showMoreItems}>Load More</button>
          </div>
        ) : null}
      </div>
    </>
  );
};

export default Card;
