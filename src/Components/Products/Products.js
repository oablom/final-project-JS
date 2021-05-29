import React from "react";
import "./Products.css";
import Image from "./supplement.png";

import Category from "./Category";

function Products() {
  return (
    <div className="products-container">
      <div className="products">
        <div className="products-header">
          <img src={Image} alt="" />
        </div>
        <div className="products-slogan">
          <h3>ONLY THE BEST YOU CAN GET</h3>
          <h6>
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts.
          </h6>
        </div>
        <Category />
      </div>
    </div>
  );
}

export default Products;
