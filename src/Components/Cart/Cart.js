import React from 'react'
import './Cart.scss'
import DeleteIcon from '@mui/icons-material/Delete';

function Cart() {

    const fakeDate = [
        {
            id:1,
            // img1:"https://i.pinimg.com/736x/ba/ec/2f/baec2ff88743a128403386c2c1b150d2.jpg",
            img1:"https://th.bing.com/th/id/OIP.ZAPo1hkMmo5not8U_x5_lwAAAA?w=202&h=269&c=7&r=0&o=5&dpr=1.3&pid=1.7",
            title:"Kurta Salwar",
            desc:"This is very good product you should have to buy it.",
            oldPrice:"$190",
            newPrice:"$150",

        }]
  return (
    <div className='cart'>
      <span>Product Is in cart</span>
      {fakeDate.map((item)=>(
        <div className="item" key={item.id}>
            <img src={item.img1} alt="" />
            <div className="details">
                <h3>{item.title}</h3>
                <p>{item.desc.substring(0,100)}</p>
                <div className="price">1 x {item.newPrice}</div>


            </div>
            <DeleteIcon className='delete'/>
        </div>
      ))}
      <div className="total">
        <span>SUBTOTAL</span>
        <span>$123</span>

      </div>
      <button>PROCEED TO CHECKOUT</button>
      <span>Reset Cart</span>
    </div>
  )
}

export default Cart
