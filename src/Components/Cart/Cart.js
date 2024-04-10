import React, { useContext, useState } from 'react'
import './Cart.scss'
import DeleteIcon from '@mui/icons-material/Delete';
import { Context } from '../../Context/UserContext';
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useNavigate } from 'react-router-dom';

function Cart({ item }) {
  const { cart, setCart, quantity } = useContext(Context)
  const navigate = useNavigate()
  // const storeQuantity = quantity;
  const deleteItem = (id) => {
    const updatedItems = cart.filter(item => item.id !== id);
    setCart(updatedItems);
  };

  return (
    <div className='cart'>
      <h3>Cart</h3>
      {cart.length == 0 ? <div className='emptyCart'> <ShoppingCartIcon />Cart is Empty</div> : ''}
      {cart.map((item) => (
        <>
          <div className="item">
            <img src={item.img1} alt="" />
            <div className="details">
              <h3 >{item.title}</h3>
              <p>{item.desc.substring(0, 50)}</p>.
              {/* <div className="price">1 X {storeQuantity} </div> */}
              {/* <span onClick={()=>setCart((prev) => (prev === 1 ? 1 : prev - 1))}>-</span> <span onClick={()=>setCart((prev) => prev + 1)}>+</span> */}
            </div>
            <div onClick={() => deleteItem(item.id)}>
              {/*  */}
              <DeleteIcon className='delete' />
            </div>
          </div>
          <div className="total">
            <span>SUBTOTAL</span>
            <span>{item.newPrice}</span>
          </div>
          <button onClick={()=>{navigate('/payments');deleteItem(item.id)}}>PROCEED TO CHECKOUT</button>
        </>
      ))}
      {/* <span onClick={()=>setCartItem([])}>{setCart ? 'Reset Cart' : 'Cart Is Empty'}</span> */}
    </div>
  )
}

export default Cart
