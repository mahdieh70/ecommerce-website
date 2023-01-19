import React, { useEffect, useState } from "react";
import axios from "axios";
import Cards from "../cards";
import "./Card.css";

const Card = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/products").then((response) => {
      setProducts(response.data);
    });
  }, []);

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

// {
//   products.map((item) => <Cards key={item.id} productData={item} />);
// }
