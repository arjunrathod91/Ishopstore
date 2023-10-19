import React, { useState } from "react";
import "./Products.scss";
import List from "../../Components/List/List";
import { useParams } from "react-router-dom";

function Products() {
  const catId = useParams().id;
  const [maxPrice, setMaxPrice] = useState(1000);
  const [sort, setSort] = useState(null);

  return (
    <div className="products">
      <div className="left">
      <div className="filterItem">
        <h2>Product Categories</h2>
        <div className="inputItem">
          <input type="checkbox" id="1" value={1} />
          <label htmlFor="1">Shoes</label>
        </div>
        <div className="inputItem">
          <input type="checkbox" id="2" value={2} />
          <label htmlFor="2">Shirts</label>
        </div>
        <div className="inputItem">
          <input type="checkbox" id="3" value={3} />
          <label htmlFor="3">Pants</label>
        </div>
        <div className="inputItem">
          <input type="checkbox" id="4" value={4} />
          <label htmlFor="4">Hats</label>
        </div>
      </div>
      <div className="filterItem">
        <h2>Filter by price</h2>
        <div className="inputItem">
          <span>0</span>
          <input
            type="range"
            min={0}
            max={1000}
            onChange={(e) => setMaxPrice(e.target.value)}
          />
          <span>{maxPrice}</span>
        </div>
        <div className="filterItem">
          <h2>Sort by</h2>
          <div className="inputItem">
            <input
              type="radio"
              id="asc"
              value="asc"
              name="price"
              onChange={(e) => setSort("asc")}
            />
            <label htmlFor="asc">Price (Lowest First) </label>
          </div>
          <div className="inputItem">
            <input
              type="radio"
              id="desc"
              value="desc"
              name="price"
              onChange={(e) => setSort("desc")}
            />
            <label htmlFor="desc">Price (highest First) </label>
          </div>
        </div>
      </div>
      </div>
      <div className="right">
        <div className="theme-img">
          <img
            src="https://imagetolink.com/ib/bQwGdvJajM.jpg"
            className="catImg"
            alt=""
          />
        </div>
        <List catId={catId} maxPrice={maxPrice} sort={sort} />
      </div>
    </div>
  );
}

export default Products;
