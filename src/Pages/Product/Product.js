import React, { useState } from 'react'
import './Product.scss'
import BalanceIcon from '@mui/icons-material/Balance';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

function Product() {

  const [selectedImg,setSelectedImg] = useState(0)
  const [quantity,setQuantity] = useState(1)
 
  const productImg = [
    "https://rukminim2.flixcart.com/image/832/832/xif0q/shirt/i/a/z/4xl-white-vtexx-original-imagnzecssjs3y9g.jpeg?q=70",
    "https://rukminim2.flixcart.com/image/832/832/kwzap3k0/shirt/5/j/a/l-lstr-white-p-v-creations-original-imag9jgg6xtz4yg4.jpeg?q=70",
  ]
  return (
    <div className='product'>
      <div className="left">

      <div className="product-img">
          <img src={productImg[0]} alt="" onClick={e=>setSelectedImg(0)}/>
          <img src={productImg[1]} alt="" onClick={e=>setSelectedImg(1)}/>
        </div>
        <div className="mainImg">
          <img src={productImg[selectedImg]} alt="" />
        </div>

      </div>
      <div className="right">
        <h1>Title</h1>
        <span className='price'>$199</span>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque magni molestias quia harum aspernatur possimus quo dignissimos? Quos tenetur sed unde libero reiciendis, doloribus magnam.</p>
        <div className="quantity">
          <button onClick={()=>setQuantity((prev)=>prev === 1 ? 1 : prev-1)}>-</button>
          {quantity}
          <button onClick={()=>setQuantity((prev)=>prev+1)}>+</button>
        </div>
        <button className="add">
          <AddShoppingCartIcon/> Add To Cart
        </button>
        <div className="links">
          <div className="item">
            <FavoriteBorderIcon/> Add TO WishList
          </div>
          <div className="item">
            <BalanceIcon/> Add TO Compare
          </div>
        </div>
        <div className="info">
          <span>Vendor: Polo</span>
          <span>Product Type: T-Shirt</span>
          <span>Tag: T-Shirt, Women, Top </span>
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
  )
}

export default Product
