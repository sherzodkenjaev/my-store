import { LaptopMac, ShoppingCart } from "@material-ui/icons";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "../css/Header.css";

function Header(props) {
  const items = useSelector((state) => state);

  return (
    <div className="header">
      <div className="left_header">
        <Link to="/" className="logo">
          <LaptopMac />
          <h2>SK tech</h2>
        </Link>
      </div>
      <div className="right_header">
        <Link to="/login" className="right_header_login">
          <p>log in</p>
        </Link>
        <div className="basket_item">
          <Link to="/basket" className="right_header_basket">
            <ShoppingCart />
            <p className="length">{items.length}</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
