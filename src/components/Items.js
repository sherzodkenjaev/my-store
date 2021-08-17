import React from "react";
import { useState } from "react";
import "../css/Items.css";
import Fade from "react-reveal/Fade";
import { useDispatch, useSelector } from "react-redux";
import nextId from "react-id-generator";

function Items({ id, title, description, price, rating, category, ids }) {
  const [count, setCount] = useState(0);
  const [isTrue, setIsTrue] = useState(false);
  ids = nextId();

  const items = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleAddClick = (e) => {
    e.preventDefault();
    setCount(count + 1);
    setIsTrue(true);
    dispatch({
      type: "ADD_ITEMS",
      payload: {
        id,
        title,
        description,
        price,
        rating,
        category,
        ids,
      },
    });
  };

  const handleRemoveClick = (e) => {
    e.preventDefault();
    setCount(count - count);

    dispatch({
      type: "REMOVE_ITEMS",
      id: id,
    });
  };

  return (
    <Fade bottom>
      <div className="items">
        <h2>{title}</h2>
        {/* <p>{id}</p> */}
        <p>{description}</p>
        <p>${price}</p>
        <div className="rating">
          {Array(rating)
            .fill()
            .map((_) => (
              <p>⭐</p>
            ))}
        </div>
        <p>Category: {category}</p>
        <div className="btn_all">
          {!isTrue ? (
            <button className="btn_over" onClick={handleAddClick}>
              Add to Card
            </button>
          ) : (
            <div className="btn">
              <button className="left_button" onClick={handleAddClick}>
                +
              </button>

              <span>{count}</span>

              <button className="right_button" onClick={handleRemoveClick}>
                -
              </button>
            </div>
          )}
        </div>
      </div>
    </Fade>
  );
}

export default Items;
