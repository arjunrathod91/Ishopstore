import React, { useContext } from 'react'
import '../Cart/Cart.scss'
import { Context } from '../../Context/UserContext';
import { useMediaQuery } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function Wishlist() {
    const { wishlist, setWishList, wishlistOn, setWishListOn, cart, setCart } = useContext(Context);
    let alldata = JSON.parse(localStorage.getItem('user'));

    const deleteItem = (id) => {
        const updatedItems = wishlist.filter(item => item.id !== id);
        setWishList(updatedItems);
        setWishListOn(false)

        const existingOrdersJSON = JSON.parse(localStorage.getItem('user'));
        existingOrdersJSON.userwishlist = [updatedItems]
        localStorage.setItem('user',JSON.stringify(existingOrdersJSON))
    };

    const isScreenSmall = useMediaQuery('(max-width:699px)')

    const navigate = useNavigate();
    const shopnow = () => {
        navigate('/')
    }

    const addTOCart = (e, item) => {
        e.preventDefault()
        setCart([...cart, item])
        const existingOrdersJSON = JSON.parse(localStorage.getItem('user'));
        existingOrdersJSON.usercart = [...cart, item]
        localStorage.setItem('user',JSON.stringify(existingOrdersJSON))
    }

    return (
        <div className='cart'>
            <div className='cartsection' style={{ height: `${alldata.userwishlist.length == 0 ? "400px" : ""}` }}>
                {alldata.userwishlist.length == 0 ? <div className='emptyCart'><div style={{ display: "flex", flexDirection: "column", justifyContent: 'center', alignItems: 'center', gap: '10px' }}><img src='https://www.pavejewelers.com/assets/images/empty-wishlist.png' height={200} width={300} /><p>Your Wishlist is empty !</p><button onClick={shopnow}>Shop More</button></div></div> : ''}
                {alldata.userwishlist.map((item) => (
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
                                <div onClick={() => deleteItem(item.id)} className='remove'>
                                    Remove
                                </div>
                                <button style={{ width: `${isScreenSmall ? '100px' : ''}` }} onClick={(e) => { addTOCart(e, item); deleteItem(item.id) }}>Add to Cart</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            {/* <span onClick={() => setCartItem([])}>{setCart ? 'Reset Cart' : 'Cart Is Empty'}</span> */}
        </div>
    )
}

export default Wishlist
