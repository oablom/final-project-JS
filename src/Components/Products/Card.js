import React from "react";
import Image from "./supplement.png";

function Card(props) {
  return (
    <div className="products-card">
      <img src={Image} alt="" />
      <h4>{props.product}</h4>
      {/* <p>{props.price}</p> */}
    </div>
  );
}

export default Card;
