import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

export default function Header() {
  const openMenu = () => {
    document.querySelector(".sidebar").classList.add("open");
  };
  return (
    <div className="header">
      <div className="brand">
        <button onClick={openMenu}>&#9776;</button>
        <Link to="/">amazon</Link>
      </div>
      <div className="header-link">
        <a href="chart">Chart</a>
        <a href="signin">Sign In</a>
      </div>
    </div>
  );
}
