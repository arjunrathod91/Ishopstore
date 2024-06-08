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
            <span>Welcome to Ishopstore, your number one source for all things fashion. We're dedicated to giving you the very best of clothing, with a focus on quality, style, and uniqueness.</span>
        </div>
        <div className="item">
            <h1>Contact</h1>
            <input placeholder="Email"/>
            <button>Send</button>
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
