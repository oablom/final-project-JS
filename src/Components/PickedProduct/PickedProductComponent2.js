import React, { useState } from "react";
import Plus from "./plus.png";
import Minus from "./minus.png";
// import { data } from "../data";

function PickedProductComponent() {
  // const [categories, setCategories] = useState({ data });
  // const [categories, setCategories] = useState( data );

  return (
    <div className="picked-product-component">
      <h2 className="picked-product-component-header">
        WHEY ISOLATE <br /> 1KG
      </h2>
      <h5 className="picked-product-component-flavour">Flavour</h5>
      <div class="dropdown">
        <select id="flavour" name="flavour">
          <option value="Vanilla">Vanilla</option>
          <option value="Chocolate">Chocolate</option>
          <option value="Strawberry">Strawberry</option>
        </select>
      </div>
      <div className="buy-bar">
        <div className="plusminus-div">
          <img src={Minus} className="plusminus" alt="" />
          {/* komponent antal */} 1
          <img src={Plus} className="plusminus" alt="" />
        </div>
        <div className="price-div">99$</div>
        {/* {categories.price} */}
        <button className="buy-btn">BUY</button>
      </div>
    </div>
  );
}

export default PickedProductComponent;

/*  <div className="picked-product-component">
      <h2 className="picked-product-component-header">SOY ISOLATE 1KG</h2>
      <h5 className="picked-product-component-flavour">Flavour</h5>
    </div> */
