import React, { useState } from "react";
// import Plus from "./plus.png";
// import Minus from "./minus.png";
import { pickedproduct } from "../data";

function PickedProductComponent() {
  const first = pickedproduct[0];

  const [protein, setProtein] = useState(first);

  return (
    <div className="picked-product-component">
      <h2 className="picked-product-component-header">
        {protein.product} <br /> 1KG
      </h2>
      <h5 className="picked-product-component-flavour">Flavour</h5>
      <div className="dropdown">
        <select id="flavour" name="flavour">
          <option value="Vanilla">{protein.flavour1}</option>
          <option value="Chocolate">{protein.flavour2}</option>
          <option value="Strawberry">{protein.flavour3}</option>
        </select>
      </div>
      <div className="buy-bar">
        {/* <div className="plusminus-div">
          <img src={Minus} className="plusminus" alt="" />
          {protein.qty}
          <img
            src={Plus}
            className="plusminus"
            // onClick={clickHandler()}
            alt=""
          /> */}

        <div className="price-div">{protein.price + "$"}</div>
        <button className="buy-btn">ADD TO CART</button>
      </div>
    </div>
  );
}

export default PickedProductComponent;

/*  <div className="picked-product-component">
      <h2 className="picked-product-component-header">SOY ISOLATE 1KG</h2>
      <h5 className="picked-product-component-flavour">Flavour</h5>
    </div> */

// const clickHandler = () => {
//     categories.qty++;
// }; funkar ej....

//const products = [{product:  "whey isolate", qty: 1, price 99}];
