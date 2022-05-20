import React from "react";

import { HeroBanner } from "../components";
import { Footer } from "../components";

const Home = () => {
  return (
    <>
      <HeroBanner />
      <div className="products-heading">
        <h2>Best Sellers</h2>
        <p>Bicycles and more!</p>
      </div>
      <div className="products-container">
        {["Product 1", "Product 2"].map((product) => product)}
      </div>
      <Footer />
    </>
  );
};

export default Home;
