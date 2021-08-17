import React, { useState, useEffect } from "react";
import Items from "./Items";
import { products } from "./products";
import "../css/Search.css";
import axios from "axios";

function Search() {
  const [allData, setAllData] = useState([]);
  const [filteredData, setFilteredData] = useState(allData);

  useEffect(() => {
    setAllData(products);
    setFilteredData(products);
  }, []);

  const handleSearch = (event) => {
    let value = event.target.value.toLowerCase();
    let result = [];
    console.log(value);
    result = allData.filter((data) => {
      return data.title.search(value) != -1;
    });
    setFilteredData(result);
  };

  return (
    <div className="search">
      <div>
        <input type="search" onChange={(event) => handleSearch(event)} />
      </div>
      {filteredData.map((product) => (
        <Items
          key={product.id}
          id={product.id}
          title={product.title}
          description={product.description}
          price={product.price}
          rating={product.rating}
          category={product.category}
        />
      ))}
    </div>
  );
}

export default Search;
