import React, { useContext, useEffect, useState } from "react";
import "./FeaturedProduct.scss";
import Card from "../Card/Card";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import { Context } from "../../Context/UserContext";
import allData from '../../data'

function FeaturedProduct({ type,desc,categoryData,start,end }) {
  const {data, setData} = useContext(Context);

  // useEffect(()=>{
  //   axios.get('http://localhost:3004/featured')
  //   .then(details => setData(details.data))
  //   .catch(err => console.log(err))
  // },[data])


  return (
    <div className="featuredproduct">
      <div className="top">
        <h1>{type}</h1>
        <p>
        {desc}
        </p>
      </div>
      <div className="bottom">
        {categoryData.slice(start,end).map((item) => {
          return <div><Card item={item} key={item.id}/></div>;
        })}
      </div>
    </div>
  );
}


export default FeaturedProduct;
