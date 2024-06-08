import React, { useContext, useEffect, useState } from 'react'
import './Cart.scss'
import DeleteIcon from '@mui/icons-material/Delete';
import { Context } from '../../Context/UserContext';
import ShoppingCart from '@mui/icons-material/ShoppingCart';
import { Link, json, useNavigate } from "react-router-dom";
import { useMediaQuery } from '@mui/material';
import PaymentButton from './PaymentButton';
import { v4 as uuidv4 } from 'uuid';
import allData from '../../data';


const Cart = () => {
    const { cart, setCart, allOrders, setAllOrders, userName, setUserName, userEmail, setUserEmail, userContact, setUserContact, userPassword, setUserPassword, userAddress } = useContext(Context)

    const isScreenSmall = useMediaQuery('(max-width:699px)')
    let alldata = JSON.parse(localStorage.getItem('user'));

    const navigate = useNavigate();
    // const uuid = uuidv4();

    const shopnow = () => {
        navigate('/')
    }
    const deleteItem = (id) => {
        const updatedItems = cart.filter(item => item.id !== id);
        setCart(updatedItems);

        const existingOrdersJSON = JSON.parse(localStorage.getItem('user'));
        existingOrdersJSON.usercart = [updatedItems]
        localStorage.setItem('user',JSON.stringify(existingOrdersJSON))
    };

    const orderNow = (e, item) => {
        e.preventDefault()
        setAllOrders([...allOrders, item])
        const existingOrdersJSON = JSON.parse(localStorage.getItem('user'));
        existingOrdersJSON.userallorders = [...allOrders, item]
        localStorage.setItem('user',JSON.stringify(existingOrdersJSON))
        
        // let existingOrders = [];
        // if (existingOrdersJSON) {
        //     existingOrders = JSON.parse(existingOrdersJSON);
        // }
        // existingOrders.push(...allOrders);
        // localStorage.setItem('user.allorders', JSON.stringify(existingOrders));
    }


    {/* <div className="price">1 X {storeQuantity} </div> */ }
    {/* <span onClick={()=>setCart((prev) => (prev === 1 ? 1 : prev - 1))}>-</span> <span onClick={()=>setCart((prev) => prev + 1)}>+</span> */ }

    const handlePayment = (e, item) => {
        const options = {
            key: 'rzp_test_SmZeJidun1X0rz', // Enter your Razorpay Key ID
            amount: `${item.newPrice * 100}`, // Amount in paise (50000 paise = 500 INR){newPrice}
            currency: 'INR',
            name: 'Your Company Name',
            description: 'Test Transaction',
            //   order_id:`order_${uuid.split('-')[0]}`,
            image: 'img/ishopstorelogo.png', // Optional: Add your logo URL
            handler: function (response) {
                alert(`Payment successful: ${response.razorpay_payment_id}`);
            },
            prefill: {
                name: { userName },//{username}
                email: { userEmail },//{email}
                contact: { userContact },//{contact}
            },
            notes: {
                address: { userAddress },
            },
            theme: {
                color: '#fff',
            },
        };

        const rzp = new window.Razorpay(options);
        rzp.open();
    };
    return (
        <div className='cart'>
            <div className='cartsection' style={{ height: `${cart.length == 0 ? "400px" : ""}` }}>
                {cart.length == 0 ? <div className='emptyCart'><div style={{ display: "flex", flexDirection: "column", justifyContent: 'center', alignItems: 'center', gap: '10px' }}><img src='https://www.infoskysolutions.com/images/cart_is_empty.png' height={200} width={200} /><button onClick={shopnow}>Shop Now</button></div></div> : ''}
                {cart.map((item) => (
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
                                {/* <button style={{ width: `${isScreenSmall ? '100px' : ''}` }} onClick={(e) => { orderNow(e,item); deleteItem(item.id) }}>Buy Now</button> */}
                                <button onClick={(e) => {handlePayment(e, item);orderNow(e, item);deleteItem(item.id)}}>Buy Now</button>
                                {/* handlePayment(e, item) deleteItem(item.id) orderNow(e, item); */}

                            </div>
                        </div>
                    </div>
                ))}
            </div>
            {/* <span onClick={() => setCartItem([])}>{setCart ? 'Reset Cart' : 'Cart Is Empty'}</span> */}
        </div>
        //     <button onClick={(e)=>{addTOCart(e,item);deleteItem(item.id)}}>Add to Cart</button>

    );
};
export default Cart;
