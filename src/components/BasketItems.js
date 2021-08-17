import { DeleteForever } from "@material-ui/icons";
import React from "react";
import "../css/Basket.css";

function BasketItems({ ids, title, price, onDelete }) {
  return (
    <div className="basket_items">
      <h3>{title}</h3>
      <h3>${price}</h3>
      <h3>
        <DeleteForever
          className="red_icon"
          onClick={() => {
            onDelete(ids);
          }}
        />
      </h3>
    </div>
  );
}

export default BasketItems;
