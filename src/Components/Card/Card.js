import React, { useContext, useEffect, useState } from 'react'
import './Card.scss'
import { Link, useNavigate } from 'react-router-dom'
import { Context } from '../../Context/UserContext';

function Card({item}) {
  const {product, setProduct} = useContext(Context);
  const {cart,setCart} = useContext(Context)

  const navigate = useNavigate()

  const singleProduct=(e,item)=>{
    e.preventDefault()
    console.log(item)
    setProduct(item)
    navigate('/product')
  }

  return (
    <div className='card' onClick={(e)=>singleProduct(e,item)}>
      {/* //()=>setProduct(item) */}
        <div className="images">
            <span>New Season</span>
            <img src={item.img1} alt="" className='mainImg' />
            <img src={item.img2} alt="" className='secImg' />
        </div>
        <span>{item.title}</span>
        <div className="content">
            <span className='oldPrice'>${item.oldPrice}</span>
            <span className='newPrice'>${item.newPrice}</span>
        </div>

      
    </div>
  )
}

export default Card
