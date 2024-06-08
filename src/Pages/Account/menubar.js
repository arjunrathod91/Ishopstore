import React from 'react'
import './Account.scss'
import { ArrowRight, West } from '@mui/icons-material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import PersonIcon from '@mui/icons-material/Person';

function menubar({ open, setOpen, setSection }) {
    return (
        <div className='acc-menu-bar' style={{ display: `${open ? 'flex' : 'none'}` }}>
            {/* <div className='item-head'>
                Hello Arjun,
            </div> */}
            <div className='item' onClick={() => { setSection('Profile'); setOpen(false) }}>
                <PersonIcon />
                <span>Profile</span>
            </div>
            <div className='item' onClick={() => { setSection('Orders'); setOpen(false) }}>
                <LocalShippingIcon/>
                <span>Orders</span>
            </div>
            <div className='item' onClick={() => { setSection('Wishlist'); setOpen(false) }}>
                <FavoriteIcon />
                <span>Wishlist</span>
            </div>
        </div>
    )
}

export default menubar
