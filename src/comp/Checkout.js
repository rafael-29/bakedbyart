import React, { useState } from 'react'

import { Link } from 'react-router-dom'



const Checkout = () => {


const [guest, setGuest] = useState('');
const [login, setLogin] = useState();
const [pass, setPass] = useState();

const [isLogin, setIsLogin] = useState(false);






// FUNCTIONSSS




// adding email to LOCAL STORAGE
const addEmailToLocal = (e) => {
e.preventDefault()
window.location.replace('/shipping')
}

// insertlocalem
const insertLocalEm = () => {
const emailLoc = guest;
localStorage.setItem('localEm', JSON.stringify(emailLoc))
}

// START
return(
<div className="checkout-cont">
<h1 className="ch-logoname">Baked.By.Art</h1>


<div className="register-guest">
    <div className="guest">
        <div className="ch-head">GUEST CHECKOUT</div>
        <div className="ch-cnt">You will be able to register your account at the end of checkout.</div>
        <div className="ch-ben">Benefits of Baked.By.Art account:</div>
        <ul className="ch-ul">
            <li className="ch-li">Expedited Checkout Process</li>
            <li className="ch-li">Exclusive Offers</li>
        </ul>
        <form className="ch-formz" onSubmit={addEmailToLocal}>
        <input type="email" className="ch-email" placeholder="Enter Email Address" 
        value={guest} onChange={e => setGuest(e.target.value)} required />

        <button onMouseMove={insertLocalEm} className="ch-btn">
        GUEST CHECKOUT
        </button>

        </form>
    </div>
  

    <form className="ch-form">
        <p className="form-headcd">REGISTERED CUSTOMERS</p>
            <input type="email" className="ch-email" placeholder="Enter Email Address" 
            value={login} onChange={e => setLogin(e.target.value)} required />
            <input type="password" className="ch-email" placeholder="Enter Password" 
            value={pass} onChange={e => setPass(e.target.value)} required />
            <div className="ch-btnbx">
                <button className="ch-btnz">Sign in</button>
                <Link className="ch-link" to="/forgot">Forgot password?</Link>
            </div>
    </form>

    
</div>
</div>
)
}
export default Checkout;