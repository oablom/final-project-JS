import "../../App.css";
import React, { useState, useEffect } from "react";
import { items1 } from "../data";

const Shop = (props) => {
  const [cart, setCart] = useState([]);
  const [alert, setAlert] = useState("");
  const [cartTotal, setCartTotal] = useState(0);

  const items = props.item;

  useEffect(() => {
    total();
  }, [cart]);

  const total = () => {
    let totalVal = 0;
    for (let i = 0; i < cart.length; i++) {
      totalVal += cart[i].price;
    }
    setCartTotal(totalVal);
  };

  const addToCart = (el) => {
    let addIt = true;
    for (let i = 0; i < cart.length; i++) {
      if (cart[i].id === el.id) addIt = false;
    }
    if (addIt) {
      setCart([...cart, el]);
      setAlert("");
    } else setAlert(`${el.name} ${el.flavour} is already in your cart`);
  };

  const removeFromCart = (el) => {
    let hardCopy = [...cart];
    hardCopy = hardCopy.filter((cartItem) => cartItem.id !== el.id);
    setCart(hardCopy);
    setAlert("");
  };

  const listItems = items.map((el) => (
    <div key={el.id}>
      {`${el.name}, ${el.flavour} : $${el.price}`}
      <input type="submit" value="add" onClick={() => addToCart(el)} />
    </div>
  ));

  const cartItems = cart.map((el) => (
    <div key={el.id}>
      {`${el.name}, ${el.flavour} : $${el.price}`}
      <input type="submit" value="remove" onClick={() => removeFromCart(el)} />
    </div>
  ));

  return (
    <div className="store">
      <br />
      <h2>Choose your flavour</h2>
      <div>{listItems}</div>
      <br />
      <br />
      <h4>CART</h4>
      <div>{cartItems}</div>
      <br />
      {alert}
      <br />
      <br />
      <div>Total ${cartTotal}</div>
    </div>
  );
};

export default Shop;
