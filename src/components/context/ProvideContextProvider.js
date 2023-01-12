import React, { useState, useEffect, createContext } from "react";
import { getProducts } from "../api/api";

export const productsContext = createContext();
const ProvideContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchAPI = async () => {
      setProducts(await getProducts());
    };
    fetchAPI();
  }, []);
  return (
    <productsContext.Provider value={products}>
      {children}
    </productsContext.Provider>
  );
};

export default ProvideContextProvider;
