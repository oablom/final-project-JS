import React from "react";
import Image from "./supplement.png";

function Card(props) {
  return (
    <div className="products-card">
      <img src={Image} alt="" />
      <h4>{props.product}</h4>
    </div>
  );
}

export default Card;
