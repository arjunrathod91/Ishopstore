import React, { useState } from 'react'
import './Account.scss'
import Orders from './Orders'
import Profile from './Profile'
import Wishlist from './Wishlist'
import MenuIcon from '@mui/icons-material/Menu';
import { useMediaQuery } from '@mui/material'
import { ArrowRight, West } from '@mui/icons-material'
import Menubar from './menubar'
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import PersonIcon from '@mui/icons-material/Person';

function Account() {
  const [section, setSection] = useState('Orders')
  const [open, setOpen] = useState(true)

  const renderSection = () => {
    switch (section) {
      case 'Orders':
        return <Orders />;
      case 'Profile':
        return <Profile />;
      case 'Wishlist':
        return <Wishlist />;
      // Add more cases as needed
      default:
        return <Orders />;
    }
  };
  return (
    <div className='account'>
      <div onClick={() => setOpen(true)} className="menubtn"><West className='icon' />{section}</div>

      <div className='acc-menu'>
        {/* <div className='item-head'>
          Hello Arjun,
        </div> */}
        <div className='item' onClick={() => { setSection('Profile') }}>
          <PersonIcon/>
          <span>Profile</span>
        </div>
        <div className='item' onClick={() => { setSection('Orders') }}>
          <LocalShippingIcon/>
          <span>Orders</span>
        </div>
        <div className='item' onClick={() => { setSection('Wishlist') }}>
          <FavoriteIcon/>
          <span>Wishlist</span>
        </div>
      </div>
      <div className='acc-details'>
        {renderSection()}
      </div>
      {open && <Menubar open={open} setOpen={setOpen} setSection={setSection} />}
    </div>
  )
}

export default Account
