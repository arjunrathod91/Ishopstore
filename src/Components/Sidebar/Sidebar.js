import './Sidebar.scss'
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonIcon from "@mui/icons-material/Person";
import CloseIcon from '@mui/icons-material/Close';
import Cart from "../Cart/Cart";
import WishList from "../Wishlist/WishList";
import { Link } from 'react-router-dom';

const Sidebar = ({ menubar, setMenubar}) => {
    return (
        <div className="sidebar">
            <div className='close' onClick={() => setMenubar(!menubar)} ><CloseIcon /></div>
            <div className='content'>
            <div className="item" style={{fontSize:"1rem",fontWeight:"500"}}>
                   Chategories
                </div>
                <div className="item">
                    <Link to="children" className="link">Children</Link>
                </div>
                <div className="item">
                    <Link to="women" className="link">Women</Link>
                </div>
                <div className="item">
                    <Link to="men" className="link">Men</Link>
                </div>
                <div className="item">
                    <Link to="searchPage" className="link">Search Product</Link>
                </div>
            </div>
        </div>
    )
}
export default Sidebar;