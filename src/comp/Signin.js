import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


const Signin = () => {

useEffect( () => {

if(localStorage.getItem('adminauth')){
return window.location.replace('/adminpage')
}
        
}, [])


window.document.querySelector('body').style.overflow = 'visible'


const [signemail, setSignEmail] = useState()
const [signpass, setSignPass] = useState()

const [admin, setAdmin] = useState(false)

const [adminUser, setAdminUser] = useState()
const [adminPass, setAdminPass] = useState()

const [wrong, setWrong] = useState()


// loading page when signed in
const [auth, setAuth] = useState(false)





//FUNCITONS
const register = () => {
window.location.replace('/signin/register')
}


// AUTHENTICATION
const adminAuth = () => {
setAuth(true)
if(!adminUser && !adminPass) return setWrong('error blank')

const authThis = {
admin: adminUser,
password: adminPass
}
axios.post('https://bakedbyartapi.herokuapp.com/admin/login', authThis)
.then( result => {
const data = result.data;
if(data === false) return setWrong('wrong username !')
if(data === 'Wrong password') return setWrong('wrong password')

localStorage.setItem('adminauth', adminPass)
window.document.getElementById('linktoadmin').click()
})

.catch(error => console.log(error))
}

// CLOSING ADMIN SIGN IN PAGE
const closeAdmin = () => {
setAdmin(false)
window.document.querySelector('body').style.overflow = "visible"
}


const renderAdmin = () => {

window.document.querySelector('body').style.overflow = 'hidden';
return(
<div className="admin-signbx">
    <div className="admin-form">
        <div className="admin-imgbx">
            <img src="/images/april.png" alt="baked.by.art"
            className="adminimg" />
        </div>
        <p style={{color: 'red', marginBottom: '10px'}}>{wrong}</p>
        <div className="admin-input-dev">
            <input placeholder="username" type="text" value={adminUser}
            onChange={e => setAdminUser(e.target.value)}
            className="admin-input" />
        </div>

        <div className="admin-input-dev">
            <input placeholder="password" type="password" value={adminPass}
            onChange={e => setAdminPass(e.target.value)}
            className="admin-input" />
        </div>

        <div className="admin-btnz">
        <button className="admin-subcan" onClick={adminAuth}>SUBMIT</button>
        <button className="admin-subcan can" onClick={closeAdmin}>CANCEL</button>
        </div>
        <Link id="linktoadmin" style={{opacity: '0', pointerEvents: 'none'}} to="/adminpage">go</Link>
    </div>
</div>
)
}

const authLoad = () => (
<div className="auth-load">
    <h2 className="auth-load-h">Connecting please wait ...</h2>
</div>
)

// JSX START
return(
<div className="signin-page">
{auth ? authLoad() : ''}
<button onClick={() => setAdmin(true)} className="admin-btn"><i className="fas fa-user-lock"></i></button>

{admin ? renderAdmin() : <> </>}
    <h1 style={{marginBottom: '30px'}} className="ch-logoname">
        <Link style={{textDecoration: 'none', color: 'brown'}} to="/">Baked.By.Art</Link>
    </h1>

    <div className="signin-cont">

        <div className="member-login">
            <h3 className="sign-cap">Member Login</h3>
            <form className="sign-form">
                
                <label className="sign-lbl">Email</label>
                <input type="email" className="sign-input"
                value={signemail} onChange={e => setSignEmail(e.target.value)} />


                <label className="sign-lbl">Password</label>
                <input type="password" className="sign-input"
                value={signpass} onChange={e => setSignPass(e.target.value)} />
                

                <button className="sign-btn">Login</button>
            </form>
        </div>


        <div className="register">
            <h3 className="sign-cap">Not a member ?</h3>
            <p className="sign-cnt">
            Register for free to recieve discounts, specials offers and manage your online account.
            </p>
            <ul className="sign-ul">
                <li className="sign-li">Detailed order histories</li>
                <li className="sign-li">Shipment tracking</li>
                <li className="sign-li">Recipient address book management</li>
                <li className="sign-li">Expedited checkout process</li>
            </ul>
            <button onClick={register} className="sign-btn">Register Now</button>
        </div>

    </div>

</div>
)
}
export default Signin;