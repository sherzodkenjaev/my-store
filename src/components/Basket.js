import { RemoveShoppingCart } from "@material-ui/icons";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "../css/Basket.css";
import { getBasketTotal } from "../redux/reducers/cardReducer";
import BasketItems from "./BasketItems";

function Basket() {
  const items = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleRemove = (ids) => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      ids: ids,
    });
  };

  return (
    <div className="basket">
      <div className="top_table">
        <h2>Product</h2>
        <h2>Price</h2>
        <h2>
          <RemoveShoppingCart />
        </h2>
      </div>
      <div className="middle_table">
        {items.map((item) => (
          <BasketItems
            key={item.ids}
            ids={item.ids}
            title={item.title}
            price={item.price}
            onDelete={handleRemove}
          />
        ))}
      </div>
      <div className="total">
        <h2>Totoal</h2>
        <h2>${getBasketTotal(items)}</h2>
        <h2 className="red_text">Checkout not working</h2>
      </div>
    </div>
  );
}

export default Basket;
