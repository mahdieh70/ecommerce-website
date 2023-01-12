import React from "react";
import { Route, Routes } from "react-router-dom";
import Landing from "./components/Landing";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Card from "./components/card/Card";
import About from "./components/About";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Modal from "./components/Modal";

const App = () => {
  return (
    <div className="App">
      <Modal />
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/products" element={<Card />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
