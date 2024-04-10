import React from "react";
import './Footer.scss'
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer">
      <div className="top">
        <div className="item">
          <h1>Category</h1>
          <div className="">
            <Link to="women" className="link">Women</Link>
          </div>
          <div className="">
            <Link to="men" className="link">Men</Link>
          </div>
          <div className="">
            <Link to="children" className="link">Children</Link>
          </div>

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
          <span className="copyright"> © Copyright Reserved www.ishopstorecommerce.com</span>
          

        </div>
      </div>
    </div>
  );
}

export default Footer;
