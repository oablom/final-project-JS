import React, { useState } from "react";
import Card from "./Card";
import { Link } from "react-router-dom";
import { data } from "../data";

//array med produkterna

function Category() {
  const [categories, setCategories] = useState(data);

  return (
    <>
      {categories.map((c) => (
        <div className="products-category">
          <div className="category-type">
            <h2>{c.category} </h2>
          </div>
          <div className="category-cards">
            <div>
              <Link to="/picked-product/pickedproduct1">
                <Card product={c.p1} />
              </Link>
              <Link to="/picked-product/pickedproduct2">
                <Card product={c.p2} />
              </Link>
            </div>
            <div>
              <Link to="/picked-product/pickedproduct3">
                <Card product={c.p3} />
              </Link>
              <Link to="/picked-product/pickedproduct4">
                <Card product={c.p4} />
              </Link>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default Category;

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

/* <div className="products-category">
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
</div> */

//funkar ej

//  const [categories, setCategories] ger felmeddelande pga använder ej setCategories
// const [categories] = useState([
//   {
//     category: "WHEY AND CASEIN",
//     p1: "Whey concentrate",
//     p2: "Whey isolate",
//     p3: "Casein hydrolysate",
//     p4: "Casein isolate",
//     price: 99,
//   },

//   {
//     category: "VEGAN",
//     p1: "Pea isolate",
//     p2: "Soy isolate",
//     p3: "Hemp protein",
//     p4: "Rice isolate",
//     price: 199,
//   },
// ]);
