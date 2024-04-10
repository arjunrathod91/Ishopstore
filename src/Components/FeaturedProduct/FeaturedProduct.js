import React, { useContext, useEffect, useState } from "react";
import "./FeaturedProduct.scss";
import Card from "../Card/Card";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import { Context } from "../../Context/UserContext";

function FeaturedProduct({ type }) {
  const {data, setData} = useContext(Context);
  // const fetch = true

  useEffect(()=>{
    axios.get('http://localhost:3004/featured')
    .then(details => setData(details.data))
    .catch(err => console.log(err))
  },[data])

  // switch(fetch){
  //   case location.pathname == '/':{

  //   }

  // }

  // const nav = useNavigate()

  // const nevigate=()=>{
  //   nav("/product")
  // }


  return (
    <div className="featuredproduct">
      <div className="top">
        <h1>{type}</h1>
        <p>
        Discover our latest featured product, crafted with precision and quality. Designed to
         enhance various aspects of your life, this product offers both style and functionality.
          With its sleek design and innovative features, it promises to elevate your experience effortlessly.
           Upgrade today and discover the difference..
        </p>
      </div>
      <div className="bottom">
        {data.slice(0,4).map((item) => {
          return <div><Card item={item} key={item.id}/></div>;
        })}
      </div>
    </div>
  );
}


export default FeaturedProduct;
