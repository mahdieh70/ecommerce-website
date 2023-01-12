import React, { useState, useEffect } from "react";
import axios from "axios";
import Cards from "../Cards";
import "./Card.css";

const Card = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/products").then((response) => {
      setProducts(response.data);
    });
  }, []);
  return (
    <div className="productsContainer">
      {products.map((item) => (
        <Cards key={item.id} productData={item} />
      ))}
    </div>
  );
};

export default Card;
