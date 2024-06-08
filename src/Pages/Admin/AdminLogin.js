import React, { useContext, useState } from 'react'
import './Admin.scss'
import { useNavigate } from 'react-router-dom';
import { Context } from '../../Context/UserContext';

function AdminLogin({ setLoginFlex,loginFlex, setLoggedIn, setUpdateFlex }) {

    const {defaultEmail,defaultPassword} = useContext(Context)
    const navigate = useNavigate();


    const [inputEmail, setInputEmail] = useState('');
    const [inputPassword, setInputPassword] = useState('');
    const [warning, setWarning] = useState(false)
    const handleLogin=()=>{
        if(defaultEmail == inputEmail && defaultPassword == inputPassword){
            navigate('/adminpage')
        }
        else{
            setWarning(true)
            setTimeout(()=>{
                setWarning(false)
            },[5000])
        }
    }
    const handleNewAcc=()=>{
        setLoginFlex('none');
        setUpdateFlex('flex');
    }
    return (
        <div className='admin-login' style={{display:`${loginFlex}`}}>
            <h2>Log In</h2>
            <div className='login-box'>
                <p>Login for go to your admin panel and start creating and managing the database</p>
                <label>Email
                    <input type='text' onChange={(e)=>setInputEmail(e.target.value)} />
                </label>
                <label>Password
                    <input type='password' onChange={(e)=>setInputPassword(e.target.value)} />
                </label>
                <div className='btn'>
                    <button className='login-btn' onClick={handleLogin}>Logged In</button>
                    {warning ? <span style={{color:'red',textDecoration:'none'}}>Invalid email and password</span>:''}
                </div>
                <span onClick={handleNewAcc} style={{cursor:'pointer'}}>Create a new account ? </span>
            </div>
        </div>
    )
}

export default AdminLogin
