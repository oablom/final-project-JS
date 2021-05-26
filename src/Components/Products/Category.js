import React, { useState } from "react";
import Card from "./Card";

//array med produkterna

const productName = ["Whey isolate"];

function Category() {
  const [product, setProduct] = useState(productName);

  return (
    <>
      <div className="products-category">
        <div className="category-type">
          <h2>WHEY AND CASEIN</h2>
        </div>
        <div className="category-cards">
          <div>
            <Card product="Whey concentrate" />
            <Card product={product} />
          </div>
          <div>
            <Card product="Casein hydrolysate" />
            <Card product="Whey hydrolysate" />
          </div>
        </div>
      </div>
      <div className="products-category">
        <div className="category-type">
          <h2>VEGAN</h2>
        </div>
        <div className="category-cards">
          <div>
            <Card product="Pea isolate" />
            <Card product="Soy isolate" />
          </div>
          <div>
            <Card product="Rice isolate" />
            <Card product="Hemp protein" />
          </div>
        </div>
      </div>
    </>
  );
}

// function Category(props) {
//   return (
//     <div className="products-category">
//       <div className="category-type">
//         <h2>{props.type}</h2>
//       </div>
//       <div className="category-cards">
//         <div>
//           <Card product="Whey concentrate" />
//           <Card product="Whey isolate" />
//         </div>
//         <div>
//           <Card product="Casein hydrolysate" />
//           <Card product="Whey hydrolysate" />
//         </div>
//       </div>
//     </div>
//   );
// }

export default Category;
