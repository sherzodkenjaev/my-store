import React from "react";
import { Link } from "react-router-dom";
import "../css/LeftMenu.css";

function LeftMenu() {
  return (
    <div className="left_menu">
      <Link to="/laptops" className="item">
        <h2>Laptops</h2>
      </Link>
      <Link to="/motherboards" className="item">
        <h2>Motherboards</h2>
      </Link>
      <Link to="/pcs" className="item">
        <h2>PCs</h2>
      </Link>
      <Link to="/headphones" className="item">
        <h2>Headphones</h2>
      </Link>
      <Link to="/mouses" className="item">
        <h2>Mouses</h2>
      </Link>
      <Link to="/keyboards" className="item">
        <h2>Keyboards</h2>
      </Link>
      <Link to="/hddssd" className="item">
        <h2>HHD and SSD</h2>
      </Link>
      <Link to="/accessories" className="item">
        <h2>Accessories</h2>
      </Link>
    </div>
  );
}

export default LeftMenu;
