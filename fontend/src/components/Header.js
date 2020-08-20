import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Header() {
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

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
        {userInfo ? (
          <Link to="/profile">{userInfo.name}</Link>
        ) : (
          <Link to="/signin">Sign In</Link>
        )}
      </div>
    </div>
  );
}
