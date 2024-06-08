import React, { useContext, useState } from 'react'
import { Context } from '../../Context/UserContext'

function Profile() {
    const { userName, setUserName, userEmail, setUserEmail, userContact, setUserContact, userPassword, setUserPassword, userAddress,setUserAddress } = useContext(Context);
    let alldata = JSON.parse(localStorage.getItem('user'));
    const [edit, setEdit] = useState(false);

    const [inputEmail, setInputEmail] = useState('');
    const [inputUsername, setInputUsername] = useState('');
    const [inputPassword, setInputPassword] = useState('');
    const [inputContact, setInputContact] = useState('');
    const [inputAddress, setInputAddress] = useState('');

    const [changeEmail,setChangeEmail] = useState(false);
    const [changeUsername,setChangeUsername] = useState(false);
    const [changeContact,setChangeContact] = useState(false);
    const [changePassword,setChangePassword] = useState(false);
    const [changeAddress,setChangeAddress] = useState(false);


    return (
        <div className='user-profile' style={{ display: 'flex', justifyContent: 'start', alignContent: 'start', flexDirection: 'column', gap: '10px' }}>
            <strong>Personal Information</strong>
            <div className='user-detail'>
                <div style={{ display: 'flex', gap: '100px' }}>
                    <span style={{ width: '100px' }}>Username</span>
                    {changeUsername ? <div className='save' onClick={() => {setChangeUsername(false);setUserName(inputUsername)}}>Save</div>: <div className="edit" onClick={() => setChangeUsername(true)}>Edit</div>}
                </div>
                {changeUsername ? <input value={inputUsername} autoFocus onChange={(e) => setInputUsername(e.target.value)}/>:<p>{userName}</p>}
            </div>
            <div className='user-detail'>
                <div style={{ display: 'flex', gap: '100px' }}>
                    <span style={{ width: '100px' }}>Email</span>
                    {changeEmail ? <div className='save' onClick={() => {setChangeEmail(false);setUserEmail(inputEmail)}}>Save</div>: <div className="edit" onClick={() => setChangeEmail(true)}>Edit</div>}
                </div>
                {changeEmail ? <input onChange={(e) => setInputEmail(e.target.value)}/>:<p>{userEmail}</p>}                
            </div>
            <div className='user-detail'>
                <div style={{ display: 'flex', gap: '100px' }}>
                    <span style={{ width: '100px' }}>Contact</span>
                    {changeContact ? <div className='save' onClick={() => {setChangeContact(false);setUserContact(inputContact)}}>Save</div>: <div className="edit" onClick={() => setChangeContact(true)}>Edit</div>}
                </div>
                {/* <p>{alldata.inputContact}</p> */}
                {changeContact ? <input onChange={(e) => setInputContact(e.target.value)}/>:<p>{userContact}</p>}

            </div>
            <div className='user-detail'>
                <div style={{ display: 'flex', gap: '100px' }}>
                    <span style={{ width: '100px' }}>Password</span>
                    {changePassword ? <div className='save' onClick={() => {setChangePassword(false);setUserPassword(inputPassword)}}>Save</div>: <div className="edit" onClick={() => setChangePassword(true)}>Edit</div>}
                </div>
                {changePassword ? <input onChange={(e) => setInputPassword(e.target.value)}/>:<p>{userPassword}</p>}

            </div>
            <div className='user-detail'>
                <div style={{ display: 'flex', gap: '100px' }}>
                    <span style={{ width: '100px' }}>Address</span>
                    {changeAddress ? <div className='save' onClick={() => {setChangeAddress(false);setUserAddress(inputAddress)}}>Save</div>: <div className="edit" onClick={() => setChangeAddress(true)}>Edit</div>}
                </div>
                {changeAddress ? <input onChange={(e) => setInputAddress(e.target.value)}/>:<p>{userAddress}</p>}
            </div>
        </div>
    )
}

export default Profile
