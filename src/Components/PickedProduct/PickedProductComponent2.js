import React, { useState } from "react";
// import Plus from "./plus.png";
// import Minus from "./minus.png";
import { pickedproduct } from "../data";
import Modal from "react-modal";
import ShoppingCart from "../../Components/Shopping-cart/ShoppingCart";
import { items2 } from "../data";
import "./PickedProductComponent.css";

Modal.setAppElement("#root");
export default function ModalCart() {
  const [ModalisOpen, setModalisOpen] = useState(false);

  const first = pickedproduct[1];
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
        <div className="price-div">{protein.price + "$"}</div>
        <button onClick={() => setModalisOpen(true)} className="buy-btn">
          ADD TO CART
        </button>
      </div>

      <Modal
        isOpen={ModalisOpen}
        onRequestClose={() => setModalisOpen(false)}
        style={{
          content: {
            color: "white",
            backgroundColor: "black",
            fontSize: "1.875rem",
            borderRadius: "3px",
            width: "700px",
            height: "500px",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            justifyContent: "center",
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
          },
        }}
      >
        <h2>Checkout</h2>
        <p>This is your picked products</p>
        <div>
          <button  onClick={() => setModalisOpen(false)}>Close</button>
        </div>
        <ShoppingCart item={items2} />
      </Modal>
    </div>
  );
}

/*  <div className="picked-product-component">
      <h2 className="picked-product-component-header">SOY ISOLATE 1KG</h2>
      <h5 className="picked-product-component-flavour">Flavour</h5>
    </div> */

// const clickHandler = () => {
//     categories.qty++;
// }; funkar ej....

//const products = [{product:  "whey isolate", qty: 1, price 99}];

/* <div className="plusminus-div">
          <img src={Minus} className="plusminus" alt="" />
          {protein.qty}
          <img
            src={Plus}
            className="plusminus"
            // onClick={clickHandler()}
            alt=""
          /> */
