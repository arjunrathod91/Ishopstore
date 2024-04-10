import React, { useContext, useState } from 'react'
import './WishList.scss'
import DeleteIcon from '@mui/icons-material/Delete';
import { Context } from '../../Context/UserContext';
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";


const WishList = () => {
    const {wishlist,setWishList,wishlistOn, setWishListOn,cart,setCart} = useContext(Context)
    // const storeQuantity = quantity;
    const deleteItem = (id) => {
      const updatedItems = wishlist.filter(item => item.id !== id);
      setWishList(updatedItems);
      setWishListOn(false)
    };

    const addTOCart=(e,item)=>{
        e.preventDefault()
        setCart([...cart,item])
      }

  return (
    <div className='cart'>
    <h3>Wishlist</h3>
    {wishlist.length == 0 ? <div className='emptyCart'><FavoriteBorderIcon/> Add items to Wishlist</div> : ''}
      {wishlist.map((item)=>(
        <>
      <div className="item">
          <img src={item.img1} alt="" />
          <div className="details">
              <h3 >{item.title}</h3>
              <p>{item.desc.substring(0,50)}</p>.
          </div>
          <div onClick={() => deleteItem(item.id)}>
          {/*  */}
          <DeleteIcon className='delete'/>
          </div>
      </div>
    <div className="total">
      <span>{item.newPrice}</span>
    </div>
    <button onClick={(e)=>{addTOCart(e,item);deleteItem(item.id)}}>Add to Cart</button>
    </>
    ))}
    {/* <span onClick={()=>setCartItem([])}>{setCart ? 'Reset Cart' : 'Cart Is Empty'}</span> */}
  </div>
    
  );
};
export default WishList;
