import "../../App.css";
import React, { useState, useEffect } from "react";
import "./ShoppingCart.css";
import { Link } from "react-router-dom";
 
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
      <input className="modal-cart__btn" type="submit" value="remove" onClick={() => removeFromCart(el)} />
    </div>
  ));
 
  return (
      <div className="checkout">
        <br />
        <h2>Choose your flavour</h2>
        <div>{listItems}</div>
        <br />
   
        <h4>CART</h4>
        <div>{cartItems}</div>
        <br />
        {alert}
   
        <div>Total ${cartTotal}</div>
        <br />
        <Link to="/checkout">
          <button>Checkout</button>
        </Link>
      </div>
  );
};
 
export default Shop;