import React from "react";
import './Footer.scss'

function Footer() {
  return (
    <div className="footer">
      <div className="top">
        <div className="item">
          <h1>Category</h1>
          <span>Women</span>
          <span>Men</span>
          <span>Children</span>
          <span>Accessories</span>
          <span>New Arrivals</span>
        </div>
        <div className="item">
          <h1>Links</h1>
          <span>FAQ</span>
          <span>Compare</span>
          <span>Shop</span>
          <span>Store</span>
        </div>
        <div className="item">
            <h1>About</h1>
            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, molestiae. 
                Voluptates optio tempore, deserunt ducimus fuga quis libero eveniet aut.</span>
        </div>
        <div className="item">
            <h1>Contact</h1>
            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Sint, ad quam aspernatur quasi dolore dicta.</span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <span className="logo">ISHOPSTORE</span>
          <span className="copyright"> © Copyright Reserved www.ishopstorecommerce.com  Government India</span>
          

        </div>
        <div className="right">
          <img src='https://citimedical.co.uk/wp-content/uploads/2020/10/paypal_payment-gateway.png' alt="" />
            
        </div>
      </div>
    </div>
  );
}

export default Footer;
