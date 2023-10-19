import React, { useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import './Navbar.scss'
import { Link } from "react-router-dom";
import Cart from "../Cart/Cart";
function Navbar() {
  const [open,setOpen] = useState(false)
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="left">
          <div className="item">
            <img
              src="https://cdn.britannica.com/97/1597-050-008F30FA/Flag-India.jpg"
              alt=""
            />
            <ExpandMoreIcon />
          </div>
          <div className="item">
            <span>USD</span>

            <ExpandMoreIcon />
          </div>
          <div className="item">
            <Link to="/products/1" className="link">Children</Link>
          </div>
          <div className="item">
            <Link to="/products/2" className="link">Women</Link>
          </div>
          <div className="item">
            <Link to="/products/3" className="link">Men</Link>
          </div>
        </div>
        <div className="center">
          <Link to="/" className="link">ISHOPSTORE</Link>
        </div>
        <div className="right">
          <div className="item">
            <Link to="/products/1" className="link">Homepage</Link>
          </div>
          <div className="item">
            <Link to="/products/2" className="link">About</Link>
          </div>
          <div className="item">
            <Link to="/products/3" className="link">Contact</Link>
          </div>
          <div className="item">
            <Link to="/products/3" className="link">Shop</Link>
          </div>
          <div className="icons">
            <SearchIcon/>
            <PersonIcon/>
            <FavoriteBorderIcon/>
          </div>
          <div className="addcart" onClick={()=>setOpen(!open)}>
            <ShoppingCartIcon/>
            <span>0</span>
          </div>
        </div>
      </div>
      {open && <Cart/>}
    </div>
  );
}

export default Navbar;
