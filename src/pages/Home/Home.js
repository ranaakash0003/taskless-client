import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Products from "../../components/Products/Products";
import Cart from "../../components/Cart/Cart";
import "./home.css";

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <div className="home-content">
        <Products />
        <Cart />
      </div>
    </div>
  );
};

export default Home;
