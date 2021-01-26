import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const Signin = () => {


const [signemail, setSignEmail] = useState()
const [signpass, setSignPass] = useState()


//FUNCITONS
const register = () => {
window.location.replace('/signin/register')
}

return(
<div className="signin-page">

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