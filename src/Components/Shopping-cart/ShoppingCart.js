import "../../App.css";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import Products from "../../Components/Products/Products";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <React.Fragment>
      <Router>
        <Switch>
          <Route exact path="/">
            <Route exact path="/">
              <Route exact path="/">
                <Route exact path="/">
                  <Navbar />
                  <Products />
                  <Footer />
                </Route>{" "}
              </Route>{" "}
            </Route>{" "}
          </Route>
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
