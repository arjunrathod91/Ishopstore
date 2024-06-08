import React, { useContext, useEffect, useState } from "react";
import "./Product.scss";
import axios from "axios";
import BalanceIcon from "@mui/icons-material/Balance";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { Context } from "../../Context/UserContext";
import Card from "../../Components/Card/Card";
import { ArrowRight, ShoppingCart } from "@mui/icons-material";
import children from "../../children";
import women from "../../women";
import men from "../../men";


const Product = () => {
  const [selectedImg, setSelectedImg] = useState(0);
  const { cart, setCart,quantity, setQuantity,wishlist, setWishList,wishlistOn, setWishListOn, cartOn,data, SetCartOn,relatedProductCategory,setRelatedProductCategory,setData} = useContext(Context)

  const [currentImg, setCurrentImg] = useState();
  const { product, setProduct } = useContext(Context);

  const [relatedProduct,setRelatedProduct] = useState([]);

  const addTOCart=(e,item)=>{
    e.preventDefault()
    setCart([...cart,item])
    // SetCartOn(!cartOn)
    // const existingOrdersJSON = JSON.parse(localStorage.getItem('user'));
    // existingOrdersJSON.usercart = [...cart, item]
    // localStorage.setItem('user',JSON.stringify(existingOrdersJSON))
  }

  const addToWishList=(e,item)=>{
    e.preventDefault()
    // setWishListOn(!wishlistOn)
    setWishList([...wishlist,item])
    // const existingOrdersJSON = JSON.parse(localStorage.getItem('user'));
    // existingOrdersJSON.userwishlist = [...wishlist, item]
    // localStorage.setItem('user',JSON.stringify(existingOrdersJSON))
  }

  // useEffect(()=>{
  //   axios.get(`http://localhost:3004/${product.type}`)
  //   .then(details => setRelatedProduct(details.data))
  //   .catch(err => console.log(err))
  // },[relatedProduct])

  const shuffleArray = (array) => {
    let shuffledArray = array.slice();
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
  };

  useEffect(() => {
    switch (fetch) {
      case relatedProductCategory === "children":
        const shuffledItems1 = shuffleArray(children);
        setData(shuffledItems1);
        break;
      case relatedProductCategory === "women":
        const shuffledItems2 = shuffleArray(women);
        setData(shuffledItems2);
        break;
      case relatedProductCategory === "men":
        const shuffledItems3 = shuffleArray(men);
        setData(shuffledItems3);
        break; 
    }
  }, [])


  return (
    <div className="product">
      <div className="up-part">
        <div className="left">
          <div className="product-img">
            <img
              src={product.img1}
              alt=""
              onClick={(e) => setCurrentImg(product.img1)}
            />
            <img
              src={product.img2}
              alt=""
              onClick={(e) => setCurrentImg(product.img2)}
            />
          </div>
          <div className="mainImg">
            <img src={currentImg ? currentImg : product.img1} alt="" />
          </div>
        </div>
        <div className="right">
          <h1>{product.title}</h1>
          <span className="price">${product.newPrice}</span>
          <p>{product.desc}</p>
          {/* <div className="quantity">
            <button
            onClick={() => setQuantity((prev) => (prev === 1 ? 1 : prev - 1))}
          > - </button>
            {quantity}
            <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
          </div> */}
          <button className="add" onClick={(e)=>addTOCart(e,product)} >
            {/* */}
            {cartOn ? (<><ArrowRight /> Go to Cart</>) : (<><ShoppingCart/> Add to Cart</>)}
          </button>
          <div className="links">
            <div className="item" onClick={(e)=>addToWishList(e,product)} style={{cursor:'pointer'}} >
            {/* onClick={(e)=>addToWishList(e,product)} */}
              {wishlistOn ? (<><FavoriteBorderIcon sx={{color:"red"}} /> Added to Wishlist</>) : (<><FavoriteBorderIcon/> Add to Wishlist</>)}
            </div>
          </div>
          <div className="info">
            <span>{product.quality}</span>
          <span>Product Type: {product.category}</span>
            <span>Tag: {product.tags}</span>
          </div>
          <hr />
          <div className="detail">
            <span>Description</span>
            <hr />
            <span>Addistional Information</span>
            <hr />
            <span>FAQ</span>
          </div>
        </div>
      </div>
      <div className="down-part">
        <h2>Related Product</h2>
        <div className="series-product">
          {data.slice(0, 5).map((item)=>(
             <div><Card item={item} key={item.id}/></div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Product;
