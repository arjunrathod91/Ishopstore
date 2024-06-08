import React, { useContext, useState } from 'react'
import { Context } from '../../Context/UserContext';
import { useNavigate } from 'react-router-dom';

function AdminUpdate({setLoggedIn,setUpdateFlex,updateFlex,setLoginFlex}) {
    const {setDefaultEmail, setDefaultPassword,setDefaultUsername} = useContext(Context)

    const [inputEmail, setInputEmail] = useState('');
    const [inputPassword, setInputPassword] = useState('');
    const [inputUsername,setInputUsername] = useState('')
    const [warning, setWarning] = useState(false);

    const navigate = useNavigate();
    const handleRegister=()=>{
        setDefaultEmail(inputEmail);
        setDefaultPassword(inputPassword);
        setDefaultUsername(inputUsername);
        navigate('/adminpage')
    }

    const handleLogin=()=>{
        setLoginFlex('flex');
        setUpdateFlex('none');
    }
  return (
    <div className='admin-login' style={{display:`${updateFlex}`}}>
            <h2>Register</h2>
            <div className='login-box'>
                
                {/* <p></p> */}
                <label>Username
                    <input type='text' onChange={(e)=>setInputUsername(e.target.value)} />
                </label>
                <label>Email
                    <input type='text' onChange={(e)=>setInputEmail(e.target.value)} />
                </label>
                <label>Password
                    <input type='password' onChange={(e)=>setInputPassword(e.target.value)} />
                     {/* {warning ? <span style={{color:'red',textDecoration:'none'}}>Password is too weak </span>:''} */}
                </label>
                <div className='btn'>
                    <button className='login-btn' onClick={handleRegister}>Create New Account</button>
                </div>
                <span onClick={handleLogin}>Login ? </span>
            </div>
        </div>
  )
}

export default AdminUpdate;
