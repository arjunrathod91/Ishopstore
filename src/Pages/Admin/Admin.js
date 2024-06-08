import React, { useDebugValue, useState } from 'react'
import AdminLogin from './AdminLogin'
import './Admin.scss'
import AdminUpdate from './AdminUpdate'
import AdminPage from './AdminPage'

function Admin() {
    const [loggedIn,setLoggedIn] = useState(false)
    const [loginFlex,setLoginFlex] = useState('flex');
    const [updateFlex,setUpdateFlex] = useState('none');
  return (
    <div className='admin'>
        {loggedIn ? '' : <AdminLogin setLoginFlex={setLoginFlex} loginFlex={loginFlex} updateFlex={updateFlex} setUpdateFlex={setUpdateFlex} setLoggedIn={setLoggedIn}/>}
        {loggedIn ? '' : <AdminUpdate setUpdateFlex={setUpdateFlex} updateFlex={updateFlex} setLoggedIn={setLoggedIn} setLoginFlex={setLoginFlex}/>}
      
    </div>
  )
}

export default Admin
