import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Products from "./Components/Products/Products";
import React from "react";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Products />
      <Footer />
    </React.Fragment>
  );
}

export default App;
