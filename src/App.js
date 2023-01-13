import React from "react";
import { Route, Routes } from "react-router-dom";
import Landing from "./components/landing";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Card from "./components/card";
import About from "./components/About";
import Blog from "./components/Blog";
import Contact from "./components/contact";
import ShoppingCart from "./components/shoppingCart";
import ProductContextProvider from "./context/ProductContextProvider";

const App = () => {
  return (
    <ProductContextProvider>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/products" element={<Card />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<ShoppingCart />} />
        </Routes>
        <Footer />
      </div>
    </ProductContextProvider>
  );
};

export default App;
