import React, { useContext } from 'react'
import { Context } from '../../Context/UserContext';
import { useNavigate } from 'react-router-dom';
import { useMediaQuery } from '@mui/material';

function Orders() {
    const { allOrders,setAllOrders } = useContext(Context);
    const navigate = useNavigate();
    const shopnow = () => {
        navigate('/')
    }
    const isScreenSmall = useMediaQuery('(max-width:699px)')

    let alldata = JSON.parse(localStorage.getItem('user'));

  return (
    <div className='cart'>
    <div className='cartsection' style={{ height: `${alldata.userallorders.length == 0 ? "400px" : ""}` }}>
        {alldata.userallorders.length == 0 ? <div className='emptyCart'><div style={{ display: "flex", flexDirection: "column",justifyContent:'center',alignItems:'center',gap:'10px' }}><p></p><button onClick={shopnow}>Order Now</button></div></div> : ''}
        {alldata.userallorders.map((item) => (
            <div className="item">
                <img src={item.img1} alt="" />
                <div className="details">
                    <h3 >{item.title}</h3>
                    <p style={{ color: "gray" }} >Seller : {item.quality}</p>
                    <p>{isScreenSmall ? item.desc.substring(0, 50) : item.desc.substring(0, 150)}</p>
                    <div className="total">
                        <span>₹{item.newPrice}</span>
                    </div>
                    <div className='checkout'>
                        {/* <button style={{ width: `${isScreenSmall ? '100px' : ''}` }} onClick={(e)=>{addTOCart(e,item);deleteItem(item.id)}}>Add to Cart</button> */}
                    </div>
                </div>
            </div>
        ))}
    </div>
    {/* <span onClick={() => setCartItem([])}>{setCart ? 'Reset Cart' : 'Cart Is Empty'}</span> */}
</div>
  )
}

export default Orders
