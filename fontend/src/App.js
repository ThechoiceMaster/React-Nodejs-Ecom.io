import React from "react";
import "./components/style.css";
import Header from "./components/Header";
import Aside from "./components/Aside";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ProductScreen from "./components/Screen/ProductScreen";
import ProductsScreen from "./components/Screen/ProductsScreen";
import CartScreen from "./components/Screen/CartScreen";
import SignInScreen from "./components/Screen/signinScreen";
import RegisterScreen from "./components/Screen/RegisterScreen";
import ShippingScreen from "./components/Screen/ShippingScreen";
import PaymentScreen from "./components/Screen/PaymentScreen";
import PlaceOrderScreen from "./components/Screen/PlaceOrderScreen";
import ProfileScreen from "./components/Screen/ProfileScreen";

export default function App() {

  return (
    <div className="body">
      <div className="grid-container">
        <Router>
          <Header />
          <Aside />
          <Switch>
            <Route path="/products" component={ProductsScreen} />
            <Route path="/product/:id" component={ProductScreen} />
            <Route path="/Shipping" component={ShippingScreen} />
            <Route path="/payment" component={PaymentScreen} />
            <Route path="/profile" component={ProfileScreen} />
            <Route path="/placeorder" component={PlaceOrderScreen} />
            <Route path="/signin" component={SignInScreen} />
            <Route path="/register" component={RegisterScreen} />
            <Route path="/cart/:id?" component={CartScreen} />
            <Route path="/" exact={true} component={Main} />
          </Switch>
          <Footer />
        </Router>
      </div>
    </div>
  );
}
