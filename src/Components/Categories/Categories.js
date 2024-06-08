import React from 'react'
import './Categories.scss'
import { Link } from 'react-router-dom'

function Categories() {
  return (
    <div className='categories'>
      <div className="category-box">
        <div className="col">
          <div className="col-1">
            <img src="https://rukminim2.flixcart.com/image/612/612/xif0q/kids-t-shirt/p/y/t/-original-imagu2g3vg7fr6rb.jpeg?q=70" alt="" />
            <button><Link to="/products/1" className='link'>Children</Link></button>
          </div>
          <div className="col-1">
            <img src="https://tse3.mm.bing.net/th?id=OIP.MoZmjbjFoBDkQ-xKthu05gHaJd&pid=Api&P=0&h=180" alt="" />
            <button><Link to="/products/2" className='link'>Women</Link></button>
          </div>
        </div>
        <div className="col">
          <img src="https://rukminim2.flixcart.com/image/832/832/xif0q/shirt/r/9/n/xxl-patta-14-jai-textiles-original-imagn2fzpawqukgq.jpeg?q=70" alt="" />
          <button><Link to="/products/3" className='link'>Men</Link></button>
        </div>
        <div className="col-1">
          <div className="row">
            <div className="row1">
              <img src="https://rukminim2.flixcart.com/image/612/612/xif0q/watch/v/w/o/-original-imagta7uyupbfzsf.jpeg?q=70" alt="" />
            </div>
            <div className="row1">
              <img src="https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/1/i/u/-original-imaggcb7ndjv7fue.jpeg?q=70" alt="" />
            </div>


          </div>
          <div className="row">
            <img src="https://cdn.i.haymarketmedia.asia/?n=campaign-india%2fcontent%2fgoyalbillio.jpg&h=630&w=1200&q=75&v=20170226&c=1" alt="" />
            <button><Link to="/products/0" className='link'>& Many More</Link></button>
          </div>
        </div>
      
      </div>
    </div>
  )
}

export default Categories
