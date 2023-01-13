import React, { useState, useEffect, createContext } from "react";

import axios from "axios";

export const productsContext = createContext();

const ProductContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  console.log(products);

  useEffect(() => {
    axios.get("http://localhost:8000/products").then((response) => {
      setProducts(response.data);
    });
  }, []);

  return (
    <productsContext.Provider value={products}>
      {children}
    </productsContext.Provider>
  );
};

export default ProductContextProvider;
