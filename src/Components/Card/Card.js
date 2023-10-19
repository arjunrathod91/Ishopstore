import React from 'react'
import './Card.scss'
import { Link } from 'react-router-dom'

function Card({item}) {
  return (
    <Link to={`/product/:${item.id}`} className='link'>
    <div className='card'>
        <div className="images">
            <span>New Season</span>
            <img src={item.img1} alt="" className='mainImg' />
            <img src={item.img2} alt="" className='secImg' />
        </div>
        <span>{item.title}</span>
        <div className="content">
            <span className='oldPrice'>{item.oldPrice}</span>
            <span className='newPrice'>{item.newPrice}</span>
        </div>

      
    </div>
    </Link>
  )
}

export default Card
