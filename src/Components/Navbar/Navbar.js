import React, { useContext, useEffect, useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import './Navbar.scss'
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../../Context/UserContext";
import Cart from "../Cart/Cart";
import Sidebar from "../Sidebar/Sidebar";
import axios from "axios";
import WishList from "../Wishlist/WishList";
import MenuIcon from '@mui/icons-material/Menu';
function Navbar() {
  const [open,setOpen] = useState(false)
  const [openWishList,setOpenWishList] = useState(false)
  const [menubar,setMenubar] = useState(false)
  const {cart,setCart,quory,setQuory,setSearched,wishlist, setWishList} = useContext(Context)
  const navigate = useNavigate();

  const search=()=>{
    navigate('/searchPage')
  }

  const [relatedProduct,setRelatedProduct] = useState([])

  // useEffect(()=>{
  //   axios.get('http://localhost:3004/women')
  //   .then(details => setRelatedProduct(details.data))
  //   .catch(err => console.log(err))
  // },[relatedProduct])

  const searchResults=[
    'hat','shoes','shirt'
  ]

  return (
    <div className="navbar">
      <div className="menu" onClick={()=>setMenubar(!menubar)}><MenuIcon/></div>
      <div className="wrapper">
        <div className="left">
          <div className="item">
            <img
              src="https://cdn.britannica.com/97/1597-050-008F30FA/Flag-India.jpg"
              alt=""
            />
          </div>
          {/* <div className="item">
            <span>Categories</span>

            <ExpandMoreIcon />
          </div> */}
          <div className="item">
            <Link to="children" className="link">Children</Link>
          </div>
          <div className="item">
            <Link to="women" className="link">Women</Link>
          </div>
          <div className="item">
            <Link to="men" className="link">Men</Link>
          </div>
        </div>
        <div className="center">
          <Link to="/" className="link">ISHOPSTORE</Link>
        </div>
        <div className="right">
          <div className="search-section">
            <input placeholder="Search" onChange={(e)=>setQuory(e.target.value)} />
            <div className="searchbtn" onClick={search}>
            <SearchIcon/>
            </div>
            {/* <div className="search-results">

            </div> */}
          </div>

          <div className="icons">
            <PersonIcon className="uicon"/>
            <div onClick={()=>{setOpenWishList(!openWishList);setOpen(false)}}>
            <FavoriteBorderIcon/>
            </div>
            
          </div>
          <div className="addcart"  onClick={()=>{setOpen(!open);setOpenWishList(false)}}>
            <ShoppingCartIcon/>
            <span>{cart.length}</span>
          </div>
        </div>
      </div>
      {open && <Cart cart={cart} setCart={setCart}/>}
      {openWishList && <WishList wishlist={wishlist} setWishList={setWishList}  />}
      {menubar && <Sidebar menubar={menubar} setMenubar={setMenubar} open={open} setOpen={setOpen} openWishList={openWishList} setOpenWishList={setOpenWishList} />}
    </div>
  );
}

export default Navbar;
