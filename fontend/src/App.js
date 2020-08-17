import React from "react";
import "./components/style.css";
import Header from "./components/Header";
import Aside from "./components/Aside";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ProductScreen from "./components/Screen/ProductScreen";

export default function App() {
  return (
    <div className="body">
      <div className="grid-container">
        <Router>
          <Header />
          <Aside />
          <Switch>
            <Route path="/product/:id" component={ProductScreen} />
            <Route path="/" exact={true} component={Main} />
          </Switch>
          <Footer />
        </Router>
      </div>
    </div>
  );
}
