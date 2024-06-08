import React, { useContext, useState } from 'react';
import './Login.scss';
import { useNavigate } from 'react-router-dom';
import { Context } from '../../Context/UserContext';

function Login() {
  const [submit, setSubmit] = useState(false)
  const navigate = useNavigate()
  const [inputEmail, setInputEmail] = useState('');
  const [inputUsername, setInputUsername] = useState('');
  const [inputPassword, setInputPassword] = useState('');
  const [inputContact, setInputContact] = useState('');
  const [inputAddress, setInputAddress] = useState('');
  const [newUser, setNewUser] = useState(false);

  const [opt, setOtp] = useState('')
  const { cart, setCart, quory, setQuory, setSearched, wishlist, setWishList, user, setUser, userName, setUserName, userEmail, setUserEmail, userContact, setUserContact, userPassword, setUserPassword, userAddress, setUserAddress } = useContext(Context)

  const request = () => {
    setSubmit(true)

  }

  const userInfo = {
    inputUsername,
    inputEmail,
    inputContact,
    inputPassword,
    inputAddress,
    "usercart": [],
    "userwishlist": [],
    "userallorders": [],
    // "tags": { tags },
    // "category": { category },
    // "quality": { quality },
    // "type": { type }
  }

  // const userInfo={
  //   "username":{inputUsername},
  //     "useremail": { inputEmail},
  //     "usercontact": { inputContact },
  //     "userpassword": { inputPassword },
  //     "useraddress":{inputAddress},
  //     "usercart":[],
  //     "userwishlist": [],
  //     "userallorders":[],
  //     // "tags": { tags },
  //     // "category": { category },
  //     // "quality": { quality },
  //     // "type": { type }
  // }
  const loginAcc = () => {
    setUserName(inputUsername);
    setUserEmail(inputEmail);
    setUserContact(inputContact);
    setUserPassword(inputPassword);
    navigate('/')
    setUser(true)
    localStorage.setItem('user', userInfo)
  }


  const continued = () => {
    setUserName(inputUsername);
    setUserEmail(inputEmail);
    setUserContact(inputContact);
    setUserPassword(inputPassword);
    navigate('/')
    setUser(true)
    localStorage.setItem('user', JSON.stringify(userInfo))
  }
  // const logingetinfo = () => {
  //   // setUserName(inputUsername);
  //   // setUserEmail(inputEmail);
  //   // setUserContact(inputContact);
  //   // setUserPassword(inputPassword);
  //   // navigate('/')
  //   // setUser(true)
  //   localStorage.getItem('user',userInfo)
  // }

  return (
    <div className='login'>
      {/* <div className='loginbox'>
        <img src='' /> */}
      {/* <div className='login-cont'> */}
      {newUser ? (
        <div className='admin-login'>
          <h2>Register</h2>
          <div className='login-box'>

            {/* <p></p> */}
            <label>Username
              <input type='text' onChange={(e) => setInputUsername(e.target.value)} />
            </label>
            <label>Email
              <input type='text' onChange={(e) => setInputEmail(e.target.value)} />
            </label>
            <label>Password
              <input type='password' onChange={(e) => setInputPassword(e.target.value)} />
              {/* {warning ? <span style={{color:'red',textDecoration:'none'}}>Password is too weak </span>:''} */}
            </label>
            <label>Contact
              <input type='text' onChange={(e) => setInputContact(e.target.value)} />
            </label>
            <label>Address
              <input type='text' onChange={(e) => setInputAddress(e.target.value)} />
            </label>
            <div className='btn'>
              <button className='login-btn' onClick={continued}>Create New Account</button>
            </div>
            <span  style={{ cursor: 'pointer' }} onClick={() => setNewUser(false)}>Login ? </span>
          </div>
        </div>
      ) :
        <div className='admin-login'>
          <h2>Log In</h2>
          <div className='login-box'>
            <p>Login for go to your admin panel and start creating and managing the database</p>
            <label>Email
              <input type='text' onChange={(e) => setInputEmail(e.target.value)} />
            </label>
            <label>Password
              <input type='password' onChange={(e) => setInputPassword(e.target.value)} />
            </label>
            <div className='btn'>
              <button className='login-btn' onClick={continued}>Logged In</button>
              {/* {warning ? <span style={{ color: 'red', textDecoration: 'none' }}>Invalid email and password</span> : ''} */}
            </div>
            <span onClick={() => setNewUser(true)} style={{ cursor: 'pointer' }}>Create a new account ? </span>
          </div>
        </div>}


      {/* {submit ? (<>
        <label>Otp</label>
        <input placeholder='Enter Otp' onChange={(e)=>setOtp(e.target.value)} />
        <button onClick={continued}>Continue</button></>) : (<><input placeholder='Enter Email/Mobile Number' onChange={(e)=>setInput(e.target.value)} />
        <button onClick={request}>Request Otp</button></>)} */}
      {/* 
        <button onClick={continued}>Continue</button> */}
      {/* </div>
      </div> */}
    </div>
  );
}

export default Login;
