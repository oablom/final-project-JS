import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Products from "./Components/Products/Products";
import PickedProduct from "./Components/PickedProduct/PickedProduct";
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PickedProductComponent from "./Components/PickedProduct/PickedProductComponent";
import PickedProductComponent2 from "./Components/PickedProduct/PickedProductComponent2";
import PickedProductComponent3 from "./Components/PickedProduct/PickedProductComponent3";
import PickedProductComponent4 from "./Components/PickedProduct/PickedProductComponent4";
// import { data } from "./Components/data";
import Home from "./Components/Home/Home";
import About from "./Components/Home/About";
import ShoppingCart from "./Components/Shopping-cart/ShoppingCart";
import ContactUs from "./Components/Contact/Contact";

function App() {
  const picked1 = <PickedProductComponent />;
  const picked2 = <PickedProductComponent2 />;
  const picked3 = <PickedProductComponent3 />;
  const picked4 = <PickedProductComponent4 />;

  return (
    <React.Fragment>
      <Router>
        <Navbar />
        <Switch>
          <Route
            path="/"
            exact
            render={() => <PickedProduct type={picked1} />}
          />
          <Route path="/navbar/products" exact component={Products} />
          <Route path="/navbar/shoppingcart" exact component={ShoppingCart} />
          <Route path="/navbar/home" exact component={Home} />
          <Route path="/navbar/about" exact component={About} />
          <Route path="/navbar/contact" exact component={ContactUs} />

          <Route
            path="/picked-product/pickedproduct1"
            exact
            render={() => <PickedProduct type={picked1} />}
          />
          <Route
            path="/picked-product/pickedproduct2"
            exact
            render={() => <PickedProduct type={picked2} />}
          />
          <Route
            path="/picked-product/pickedproduct3"
            exact
            render={() => <PickedProduct type={picked3} />}
          />
          <Route
            path="/picked-product/pickedproduct4"
            exact
            render={() => <PickedProduct type={picked4} />}
          />
        </Switch>
        <Footer />
      </Router>
    </React.Fragment>
  );
} //Enbart sidans adresser på den här sidan

export default App;

/*
<Route exact path="/">
{/* <Route exact path="/products" component={Products}> }
<Route exact path="/">
  <Route exact path="/">
    <Route exact path="/">
      { <Route
      exact
      path="/Shopping-cart/ShoppingCart"
      component={ShoppingCart}
    > }
      <Navbar />
      <Products />
      <Footer />
    </Route>{" "}
  </Route>{" "}
</Route>{" "}
</Route> */

// const pickedArray = [
//   <PickedProductComponent />,
//   <PickedProductComponent2 />,
//   <PickedProductComponent3 />,
//   <PickedProductComponent4 />,
// ];
// const pickedArray = [
//   {
//     picked: <PickedProductComponent />,
//   },
//   {
//     picked: <PickedProductComponent2 />,
//   },
//   {
//     picked: <PickedProductComponent3 />,
//   },
//   {
//     picked: <PickedProductComponent4 />,
//   },
// ];
//   const pickedArray = [picked1, picked2, picked3, picked4];

// const [picked, setPicked] = useState(pickedArray);

/* {picked.map((p) => {
            return (
              <Route
                path="/picked-product/pickedproduct1"
                exact
                render={() => <PickedProduct type={p.picked} />}
              />
            );
          })} */
