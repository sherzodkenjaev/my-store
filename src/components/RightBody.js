import React from "react";
import "../css/RightBody.css";
import { Redirect, Route } from "react-router-dom";
import Items from "./Items";
import { useSelector } from "react-redux";
import { products } from "./products";
import Search from "./Search";

function RightBody() {
  // const items = useSelector((state) => state);

  const productItems = (cat) =>
    products.map(
      (product) =>
        product.category === cat && (
          <Items
            key={product.id}
            id={product.id}
            title={product.title}
            description={product.description}
            price={product.price}
            rating={product.rating}
            category={product.category}
          />
        )
    );

  return (
    <div className="right_body">
      <Route path="/laptops">{productItems("laptop")}</Route>
      <Route path="/motherboards">{productItems("motherboard")}</Route>
      <Route path="/pcs">{productItems("pc")}</Route>
      <Route path="/headphones">{productItems("headphone")}</Route>
      <Route path="/mouses">{productItems("mouse")}</Route>
      <Route path="/keyboards">{productItems("keyboard")}</Route>
      <Route path="/hddssd">{productItems("hddssd")}</Route>
      <Route path="/accessories">{productItems("accessory")}</Route>
      <Route exact path="/">
        <Redirect to="/my-store" />
      </Route>
      <Route path="/my-store">
        <Search />
      </Route>
    </div>
  );
}

export default RightBody;
