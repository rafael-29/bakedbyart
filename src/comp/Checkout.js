import React, { useState } from 'react'

import { Link } from 'react-router-dom'



const Checkout = () => {


const [guest, setGuest] = useState('');
const [login, setLogin] = useState();
const [pass, setPass] = useState();


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
<h1 style={{marginBottom: '30px'}} className="ch-logoname">
            <Link style={{textDecoration: 'none', color: 'brown'}} to="/">Baked.By.Art</Link>
    </h1>

<div className="register-guest">
    <div className="guest">
        <div className="ch-head">GUEST CHECKOUT</div>
        <div className="ch-cnt">You will be able to register your account at the end of checkout.</div>
        
        <form className="ch-formz" onSubmit={addEmailToLocal}>
            <input type="email" className="ch-email" placeholder="Enter Email Address" 
            value={guest} onChange={e => setGuest(e.target.value)} required />

            <button onMouseMove={insertLocalEm} className="ch-btn ch-unibtn">
            GUEST CHECKOUT
            </button>

        </form>
    </div>
  

    <form className="ch-form">
        <p className="ch-head">REGISTERED CUSTOMERS</p>
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