import React, { useEffect, useState } from "react";
import "./FeaturedProduct.scss";
import Card from "../Card/Card";
import axios from "axios";

function FeaturedProduct({ type }) {
  const fakeDate = [
    {
      id: 1,
      img1: "https://rukminim2.flixcart.com/image/612/612/jzzvs7k0/shirt/h/a/h/l-c301-dustypink-dennis-lingo-original-imafjvx7b9jguhdv.jpeg?q=70",
      img2: "https://rukminim2.flixcart.com/image/612/612/k6fd47k0/shirt/e/u/v/l-c301-dustygreen-dennis-lingo-original-imafzvvr7q8zn9kh.jpeg?q=70",
      title: "Men Solid Fit Shirt",
      oldPrice: "$190",
      newPrice: "$150",
    },
    {
      id: 2,
      img1: "https://rukminim2.flixcart.com/image/612/612/xif0q/top/m/o/n/s-zip-women-top-style-prezone-original-imagkfe6gbcebncv.jpeg?q=70",
      img2: "https://rukminim2.flixcart.com/image/832/832/xif0q/top/m/u/4/s-zip-women-top-style-prezone-original-imagkfe6q9tsgj3r.jpeg?q=70",
      title: "Casual Regular Sleeves Solid Black Top",
      oldPrice: "$230",
      newPrice: "$170",
    },
    {
      id: 3,
      img1: "https://rukminim2.flixcart.com/image/832/832/xif0q/t-shirt/r/v/k/m-ausk0165-ausk-original-imaghu9fbhcgf2za.jpeg?q=70",
      img2: "https://rukminim2.flixcart.com/image/832/832/xif0q/t-shirt/z/j/9/l-ask-007-ausk-original-imagqagg89pnyjdz.jpeg?q=70",
      title: "Men Stripend Round Necked T-Shirt",
      oldPrice: "$400",
      newPrice: "$230",
    },
    {
      id: 4,
      img1: "https://rukminim2.flixcart.com/image/832/832/l5bd5zk0/top/n/1/u/l-b-c-701-bowden-cahill-original-imaggyh2zr9sna2x.jpeg?q=70",
      img2: "https://rukminim2.flixcart.com/image/832/832/l5bd5zk0/top/9/1/9/s-b-c-701-bowden-cahill-original-imaggyh2vzgdnf7r.jpeg?q=70",
      title: "Casual Puff Sleeves Women Maroon Top",
      oldPrice: "$100",
      newPrice: "$99",
    },
  ];

  const [mydata, setMydata] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          process.env.REACT_APP_API_URL+"/products",{
            headers:{
                Authorization: "bearer" + process.env.REACT_APP_API_TOKEN,
            }}
        );
        console.log(res)
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  },[]);

  return (
    <div className="featuredproduct">
      <div className="top">
        <h1>{type}</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam alias
          itaque fuga voluptates dolor neque, culpa aliquid ipsum, tenetur
          explicabo fugiat! Reiciendis, laudantium laboriosam eius ad voluptatem
          corporis tempora a.
        </p>
      </div>
      <div className="bottom">
        {fakeDate.map((item) => {
          return <Card item={item} key={item.id} />;
        })}
      </div>
    </div>
  );
}


export default FeaturedProduct;
